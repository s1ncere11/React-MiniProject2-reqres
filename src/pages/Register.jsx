import React, { useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import { motion } from "framer-motion";
import {
  cardClass,
  containerClass,
  formWrapperClass,
  submitButtonClass,
} from "../styling/style";
import TitleRegLog from "../components/TitleRegLog";
import InputBG from "../components/InputBG";
import SocialButton from "../components/SocialButton";
import axios from "axios";
import bgImg from "../assets/images/bghome.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert("Please fill all required fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password Must been same");
      setLoading(false);
      return;
    }

    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log("success", res.data.message);
        setNotif("Register Successful Please Login");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log("error: ", err.message);
        setNotif(`Failed to register: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={`${containerClass} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className={`${cardClass} backdrop-blur-md bg-black/50`}
      >
        <InputBG />
        <div className={formWrapperClass}>
          <TitleRegLog titleName={"Join"} />

          <SocialButton />

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              icon={<FaUser />}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              icon={<FaEnvelope />}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              icon={<FaKey />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              icon={<FaKey />}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className={`${submitButtonClass} ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
            {notif && (
              <p
                style={{
                  color:
                    notif === "Register Successful Please Login"
                      ? "green"
                      : "red",
                }}
                className="text-center mt-2 text-sm"
              >
                {notif}
              </p>
            )}
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

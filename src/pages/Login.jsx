import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InputField from "../components/InputField";
import bgImg from "../assets/images/bghome.jpg";
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
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const registeredEmail = "eve.holt@reqres.in";
    const registeredPassword = "cityslicka";

    e.preventDefault();

    if (email !== registeredEmail || password !== registeredPassword) {
      setNotif("Wrong Email or Password");
      return;
    }
    setNotif("");
    setLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          toast.success("Login Successful!", { theme: "colored" });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setNotif("Failed to login token not received ");
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.error || "Failed to login", {
          theme: "colored",
        });
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
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className={`${cardClass} backdrop-blur-md bg-black/50`}
      >
        <div className={formWrapperClass}>
          <TitleRegLog titleName={"Login"} />
          <SocialButton />

          <form className="space-y-4">
            <InputField
              icon={<FaEnvelope />}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              icon={<FaKey />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-indigo-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              className={submitButtonClass}
              type="button"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          {notif && (
            <p
              style={{ color: notif === "Login Successful." ? "green" : "red" }}
              className="text-center mt-2 text-sm"
            >
              {notif}
            </p>
          )}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
        <InputBG />
      </motion.div>
    </div>
  );
};

export default Login;

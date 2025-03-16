import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { getUsers } from "../services/api";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      let users = [];
      let page = 1;
      let foundUser = null;

      while (!foundUser) {
        const response = await getUsers(page);
        users = response.data;

        foundUser = users.find((u) => u.id === parseInt(id));
        if (foundUser || users.length === 0) break; // berenti jika ketemu atau sudah tidak ada data
        page++; //  ambil data dari halaman berikutnya
      }

      setUser(foundUser);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading)
    return <div className="text-white text-center mt-10">Loading...</div>;
  if (!user)
    return <div className="text-white text-center mt-10">User not found</div>;

  const workExperience = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Google",
      year: "2021 - 2023",
    },
    { id: 2, role: "UI/UX Designer", company: "Facebook", year: "2019 - 2021" },
    {
      id: 3,
      role: "Software Engineer Intern",
      company: "Microsoft",
      year: "2018 - 2019",
    },
  ];

  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Figma",
    "Node.js",
    "Express.js",
  ];

  const isOpenToWork = true; // badge open to work

  return (
    <>
      <Navbar />
      {/* kontener */}
      <div className="relative flex flex-col items-center w-full min-h-screen px-4 pt-20 pb-20">
        {/* profile Card */}

        <div className="relative z-30 w-full max-w-5xl mx-auto  mt-12 mb-2">
          <BreadCrumb />
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-black/70 rounded-lg shadow-lg mt-2 p-6"
        >
          {/* picture & profile info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-x-6">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                {user.first_name} {user.last_name}{" "}
                {isOpenToWork && (
                  <span className="bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Open to Work
                  </span>
                )}
              </h2>
              <p className="text-white">IT Enthusiast</p>
              <p className="text-white flex items-center gap-1 justify-center sm:justify-start mt-1">
                <MapPin size={16} /> San Francisco, California
              </p>
              <p className="text-white">500+ connections</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 mt-4">
            <button
              className="bg-gradient-to-r from-indigo-900 to-purple-950 text-white px-6 py-2 rounded-full font-semibold shadow w-full sm:w-auto
  hover:from-indigo-700 hover:to-purple-800 transition-all duration-300"
            >
              Hire
            </button>

            <button
              className="border border-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow w-full sm:w-auto
  bg-gradient-to-r from-transparent to-transparent
  hover:from-indigo-900 hover:to-purple-950 hover:border-transparent transition-all duration-300"
            >
              Message
            </button>

            <button
              className="border border-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow w-full sm:w-auto
  bg-gradient-to-r from-transparent to-transparent
  hover:from-indigo-900 hover:to-purple-950 hover:border-transparent transition-all duration-300"
            >
              More
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-white text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} /> {user.email}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-indigo-500 flex items-center gap-2">
              <FaBriefcase /> Work Experience
            </h3>
            <ul className="mt-2 space-y-3">
              {workExperience.map((job) => (
                <li
                  key={job.id}
                  className="text-white bg-white/10 p-3 rounded-lg shadow-md"
                >
                  <p className="text-lg font-semibold">{job.role}</p>
                  <p className="text-sm text-gray-300">
                    {job.company} • {job.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-indigo-500 flex items-center gap-2">
              <FaCheckCircle /> Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-900 to-purple-950 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center sm:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-indigo-600 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-indigo-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-indigo-600 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default UserDetail;

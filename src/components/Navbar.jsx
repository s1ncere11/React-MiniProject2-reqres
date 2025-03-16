import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoutModal from "../components/LogoutModal"; // Import modal

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State modal logout
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);

    setTimeout(() => {
      navigate("/login");
    }, 500);

    setIsLogoutModalOpen(false);
  };

  return (
    <nav className="p-4 h-20 flex justify-between items-center backdrop-blur-md bg-indigo-900/10 shadow-[0_0_15px_rgba(99,102,241,0.8)] fixed top-0 left-0 right-0 w-full z-50 transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link
          to="/"
          className="text-white md:text-2xl text-xl font-bold flex items-center gap-2"
        >
          <img src="/logoo.png" alt="Logo" className="w-8 h-8" />
          <h1>OutsourSync.</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <Link
            to="/users"
            className="text-white font-semibold hover:text-indigo-500 transition"
          >
            Talent Pool
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => setIsLogoutModalOpen(true)} // Buka modal logout
              className="bg-gray-600 text-white px-6 py-3 font-semibold rounded-full transition hover:shadow-[0_0_20px_rgba(99,102,241,1)] hover:bg-gradient-to-r from-indigo-800 to-purple-900 duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-indigo-400 to-purple-900 text-white px-6 py-3 font-semibold rounded-full transition hover:shadow-[0_0_20px_rgba(99,102,241,1)] hover:bg-indigo-800 duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center space-y-6 text-2xl transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <Link to="/users" onClick={() => setIsOpen(false)}>
            Talent Pool
          </Link>

          {isAuthenticated ? (
            <button
              onClick={() => {
                setIsLogoutModalOpen(true);
                setIsOpen(false);
              }}
              className="bg-gray-500 px-6 py-3 rounded-lg hover:bg-gradient-to-r from-indigo-800 to-purple-900 duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="hover:bg-indigo-600 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-800 to-purple-900 duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* logout modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </nav>
  );
};

export default Navbar;

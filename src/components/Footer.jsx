import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${formData.name} telah dikirim!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <footer className=" bg-gradient-to-r from-black to-indigo-950 text-white py-10 px-6 h-fit ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-8">
          {/* Bagian Kiri */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or would like to collaborate, send a
              message via this form.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
              />
              <textarea
                name="message"
                rows="2"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-900 to-purple-950 hover:bg-indigo-800 transition-all py-3 rounded-lg font-semibold shadow-lg hover:shadow-[0_0_5px_rgba(99,102,241,1)] "
              >
                Send
              </button>
            </form>
          </div>

          {/* Bagian Kanan */}
          <div className="md:w-1/2 text-center">
            <h2 className="text-2xl font-bold mb-4">Follow Us On</h2>
            <div className="flex justify-center space-x-6 text-2xl">
              <a href="#" className="hover:text-indigo-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-300 mt-4">
              © 2025 OutsourSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

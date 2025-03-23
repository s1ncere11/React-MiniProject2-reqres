import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "IT Outsourcing",
    description:
      "We provide skilled IT professionals to help your business scale efficiently. Get the best developers, designers, and engineers on-demand.",
    icon: "/images/itoutsorcing.jpg",
  },
  {
    title: "HR & Recruitment",
    description:
      "Looking for top talent? Our recruitment outsourcing service helps you find and onboard the right candidates for your business needs.",
    icon: "/images/hr.jpg",
  },
  {
    title: "Business Process Outsourcing",
    description:
      "Let us handle your non-core tasks. From customer service to administrative work, we optimize your operations for efficiency.",
    icon: "/images/bisnis.jpg",
  },
];

const ServicesCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-10"
      style={{ backgroundImage: "url('/src/assets/images/bghome-copy.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
      <div className="relative container mx-auto py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center md:text-left drop-shadow-lg  md:mt-10">
          What We Offer
        </h1>
        <p className="text-md text-gray-300 text-center md:text-left mt-2">
          Discover the best outsourcing solutions tailored for your business
          needs.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-800 to-purple-900 duration-300 mx-auto md:mx-0 mt-3"></div>
        <p className="text-lg mt-4 text-white text-center md:text-left">
          With years of experience in the outsourcing industry, we provide
          high-quality services to help businesses scale efficiently. Our
          network of skilled professionals ensures you get the right talent for
          your projects, allowing you to focus on strategic growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 cursor-pointer">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all hover:shadow-2xl overflow-hidden hover:scale-105 hover:border-indigo-400"
              onMouseMove={handleMouseMove}
            >
              <div
                className="absolute w-40 h-40 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  top: mousePosition.y - 80,
                  left: mousePosition.x - 80,
                }}
              ></div>

              <div className="relative">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-full object-cover rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-2"
                />
              </div>

              <div className="flex flex-col items-center justify-center mt-4">
                <h2 className="text-3xl text-white font-bold transition-opacity duration-500 group-hover:opacity-0">
                  {card.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1 group-hover:opacity-0">
                  Professional & Reliable
                </p>
              </div>

              <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 [backface-visibility:hidden]">
                <h2 className="text-xl text-white font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-300 text-sm">{card.description}</p>
                <div className="mt-4 flex justify-end">
                  <button className="w-10 h-10 flex items-center justify-center bg-indigo-900 text-white rounded-full hover:scale-110 transition">
                    <FaArrowRight className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

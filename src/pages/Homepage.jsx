import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import SlideButton from "../components/SlideButton";
import ServicesCard from "../components/ServicesCard";
import Footer from "../components/Footer";

const Homepage = () => {
  const servicesRef = useRef(null);
  const handleScroll = () => {
    if (servicesRef.current) {
      const targetY = servicesRef.current.offsetTop;
      animate(window.scrollY, targetY, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2,
        onUpdate: (v) => window.scrollTo(0, v), // Update posisi scroll
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-cover bg-center bg-no-repeat">
        {/* Overlay blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
          className="max-w-3xl py-20 relative z-10"
        >
          <h1 className="text-5xl font-bold text-gray-100 mb-4">
            Welcome to{" "}
            <motion.span
              className="text-indigo-700  drop-shadow-[0_0_px_rgba(99,101,201,0.8)]"
              style={{
                textShadow: `
        -1px -1px 2px rgba(255, 255, 255, 1),
        1px -1px 2px rgba(255, 255, 255, 1),
        -1px 1px 2px rgba(255, 255, 255, 1),
        1px 1px 2px rgba(255, 255, 255, 1)
      `,
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              OutsourSync.
            </motion.span>
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Seamlessly synchronizing businesses with top talent for efficient
            and reliable outsourcing solutions.
          </p>
          <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
            <SlideButton />
            <button
              onClick={handleScroll}
              className="bg-gray-200 flex justify-center items-center gap-2 text-gray-900 px-6 py-[18px] rounded-full hover:bg-gray-300 transition"
            >
              More <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
      <div ref={servicesRef}>
        <ServicesCard />
      </div>

      <Footer />
    </>
  );
};

export default Homepage;

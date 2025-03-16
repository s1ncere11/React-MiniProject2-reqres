import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const SlideButton = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleDrag = (_, info) => {
    const percentage = Math.min((info.point.x / 200) * 100, 100); // limit max ny 100%
    setProgress(percentage);
  };

  const handleDragEnd = (_, info) => {
    if (info.point.x > 200) {
      setTimeout(() => navigate("/users"), 500);
    } else {
      controls.start({ x: 0 });
      setProgress(0);
    }
  };

  return (
    <div
      className="relative w-[300px] h-[60px] rounded-full flex items-center justify-end px-5 shadow-lg transition"
      style={{
        background: `linear-gradient(to right, rgba(99, 102, 241, ${
          1 - progress / 100
        }) 40%, rgba(99, 10, 255, 1))`,
      }}
    >
      <div className="flex space-x-2 text-lg">
        {["Drag", "to", "Hire", "Our", "Talent!"].map((word, index) => (
          <motion.span
            key={index}
            className="text-white font-semibold"
            style={{ opacity: 1 - progress / (100 / 6) / (index + 1) }} // ngilang bertahap
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-indigo-800 to-purple-700 duration-300 rounded-full shadow-[0_0_12px_rgba(99,100,247,0.8)] flex items-center justify-center cursor-pointer"
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <span className="text-white text-xl">➤</span>
      </motion.div>
    </div>
  );
};

export default SlideButton;

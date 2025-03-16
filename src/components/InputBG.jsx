import React from "react";
import { imageWrapperClass } from "../styling/style";

const InputBG = () => {
  return (
    <div className={imageWrapperClass}>
      <img
        src="src/assets/images/bgbgbg.png"
        alt="Login Illustration"
        className="w-full object-cover"
      />
    </div>
  );
};

export default InputBG;

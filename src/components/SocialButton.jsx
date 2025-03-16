import React from "react";
import { socialButtonClass } from "../styling/style";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialButton = () => {
  return (
    <>
      <button className={socialButtonClass}>
        <FaGoogle className="text-red-500" /> Login with Google
      </button>
      <button className={socialButtonClass}>
        <FaFacebook className="text-blue-500" /> Login with Facebook
      </button>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>
    </>
  );
};

export default SocialButton;

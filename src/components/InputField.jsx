import React from "react";

const InputField = ({ icon, type, placeholder, onChange }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full pl-10 p-2 border rounded-lg"
      onChange={onChange}
      required
    />
  </div>
);

export default InputField;

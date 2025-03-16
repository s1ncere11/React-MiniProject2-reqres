import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
      toastStyle={{
        backgroundColor: "#6440F1", // Warna indigo (Tailwind: indigo-500)
        color: "#fff", // Warna teks putih
      }}
    />
  );
};

export default ToastProvider;

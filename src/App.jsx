import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import ProtectedRoute from "./routes/Protect";

import bgImg from "./assets/images/bghome.jpg"; // Import background
import ToastProvider from "./components/ToastProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastProvider />
    </div>
  );
};

export default App;

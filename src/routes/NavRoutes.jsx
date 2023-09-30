import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import EmailVerify from "../pages/EmailVerify";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

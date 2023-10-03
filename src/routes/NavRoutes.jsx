import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
// import SignUp from "../pages/SignUp";
import EmailVerify from "../pages/EmailVerify";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Notfound from "../pages/NotFound";
import { SignUp } from "../pages/SignUp/SignUp";
// import EmailVerify from "../pages/EmailVerify";
// import ResetPassword from "../pages/ResetPassword";
// import ForgotPassword from "../pages/ForgotPassword";
// import NotFound from "../pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/Dashboard";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

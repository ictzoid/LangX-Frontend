import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import EmailVerify from "../pages/EmailVerify";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import EmailVerify2 from "../pages/EmailVerify/EmailVerify2";  
import EmailVerifyThankYou from "../pages/EmailVerify/EmailVerifyThankYou";
import EmailVerifySuccess from "../pages/EmailVerify/EmailVerifySuccess";

import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp/SignUp";

export const NavRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerify />} />
        <Route path="/email-verification2" element={<EmailVerify2 />} />
        <Route path="/email-verification3" element={<EmailVerifyThankYou />} />
        <Route path="/email-verification4" element={<EmailVerifySuccess/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<ProtectedRoutes />} isAuthenticated={isAuthenticated}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import EmailVerify from "../pages/EmailVerify";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Notfound from "../pages/NotFound";
import { SignUp } from "../pages/SignUp/SignUp";
import EmailVerify2 from "../pages/EmailVerify/EmailVerify2";
import EmailVerifyThankYou from "../pages/EmailVerify/EmailVerifyThankYou";
import EmailVerifySuccess from "../pages/EmailVerify/EmailVerifySuccess";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/Dashboard";

export const NavRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerify />} />
        <Route path="/email-verification2" element={<EmailVerify2 />} />
        <Route path="/email-verification3" element={<EmailVerifyThankYou />} />
        <Route path="/email-verification4" element={<EmailVerifySuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoutes />} isAuthenticated={isAuthenticated}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

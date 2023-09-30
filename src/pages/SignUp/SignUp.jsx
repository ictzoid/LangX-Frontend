import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import googleIcon from "../../assets/images/google.png";
import appleIcon from "../../assets/images/apple.png";
import eyeIcon from "../../assets/images/eye.png";
import emailIcon from "../../assets/images/mail.png";
import { SignUpButton } from "../../components/Buttons/SignUpBtn";

export const SignUp = () => {
  return (
    <div className="w-full lg:flex">
      <div className="lg:w-[50%] hidden lg:flex"></div>
      <div className="lg:w-[50%]">
        <div className="px-[10px] py-20 w-[320px] md:w-[400px]  lg:w-[320px] mx-auto">
          <h3 className="text-center text-[24px] font-medium">
            Create an account
          </h3>
          <p className="text-center text-[12px] font-regular mt-4 leading-5">
            Please note that email verification is required for signup. Your
            email will only be used to verify your identity for security
            purposes.
          </p>

          <div className="flex flex-col mt-6 gap-4">
            <SignUpButton icon={googleIcon} text="Sign up with Google" />
            <SignUpButton icon={appleIcon} text="Sign up with Apple" />
          </div>

          <div className="flex items-center mt-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <p className="px-2 text-GrayColor1 text-[12px]">or</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col items-center mt-6 gap-4">
            <Input
              type="text"
              className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px]"
              placeholder="Username"
            />

            <Input
              type="email"
              className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px]"
              placeholder="Email address"
              icon={
                <button className="focus:outline-none">
                  <img src={emailIcon} alt="eye icon" />
                </button>
              }
            />

            <Input
              type="password"
              className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px]"
              placeholder="Password"
              icon={
                <button className="focus:outline-none">
                  <img src={eyeIcon} alt="eye icon" />
                </button>
              }
            />
          </div>
          <p className="text-[12px] font-regular mt-2">
            For a secure password use{" "}
            <span className="text-primaryColor">8 characters</span>
          </p>

          <button className="text-[13px] font-regular py-3 rounded-[7px] text-white flex items-center justify-center gap-2 w-full mt-8 bg-primaryColor">
            Sign Up
          </button>

          <Link to="/login">
            <p className="text-[12px] font-regular mt-2 text-center">
              Have an Account? <span className="text-primaryColor">Log in</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

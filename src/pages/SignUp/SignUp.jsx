import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import googleIcon from "../../assets/images/google.png";
import appleIcon from "../../assets/images/apple.png";
import eyeIcon from "../../assets/images/eye.png";
import emailIcon from "../../assets/images/mail.png";
import { SignUpButton } from "../../components/Buttons/SignUpBtn";
import Language from "../../assets/images/Language.png";
import Logo from "../../assets/images/Logo.png";
import "./styles.css";

export const SignUp = () => {
  return (
    <div className="lg:p-[60px] max-w-[1300px] mx-auto">
      <img className="hidden xl:flex w-[15%]" src={Logo} alt="logo_image" />
      <div className="w-full lg:flex flex justify-center items-center gap-20">
        <div className=" hidden xl:flex xl:flex-col xl:justify-center mt-[-10px] gap-10">
          <h2 className="text-center text-[32px] font-medium">
            Welcome to LingoLeap
          </h2>
          <img src={Language} alt="language_image" className="min-w-[100%]" />
        </div>
        <div className=" md:flex md:justify-left">
          <div className="px-[10px] py-16 md:py-20 w-[320px] md:w-[400px] mx-auto">
            <h3 className="text-center text-[24px] md:text-[28px] lg:text-[32px] font-medium lg:font-semibold">
              Create an account
            </h3>
            <p
              id="text-custom-shadow"
              className="hidden lg:block text-center text-[12px] md:text-[13px] lg:text-[14px] font-regular mt-4 leading-5"
            ></p>
            <p className="block lg:hidden text-center text-[12px] md:text-[13px] lg:text-[14px] font-regular mt-4 leading-5">
              Please note that email verification is required for signup. Your
              email will only be used to verify your identity for security
              purposes.
            </p>

            <div className="flex flex-col mt-6 gap-4">
              <SignUpButton icon={googleIcon} text="Sign up with Google" />
              <SignUpButton icon={appleIcon} text="Sign up with Apple" />
            </div>

            <div className="flex items-center mt-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="px-2 text-GrayColor1 text-[12px] md:text-[13px] lg:text-[14px]">
                or
              </p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col items-center mt-6 gap-4">
              <Input
                type="text"
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px] md:text-[14px] lg:text-[16px]"
                placeholder="Username"
              />

              <Input
                type="email"
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px] md:text-[14px] lg:text-[16px]"
                placeholder="Email address"
                icon={
                  <button className="focus:outline-none">
                    <img src={emailIcon} alt="eye icon" />
                  </button>
                }
              />

              <Input
                type="password"
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-[12px] md:text-[14px] lg:text-[16px]"
                placeholder="Password"
                icon={
                  <button className="focus:outline-none">
                    <img src={eyeIcon} alt="eye icon" />
                  </button>
                }
              />
            </div>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] font-regular mt-2">
              For a secure password use{" "}
              <span className="text-primaryColor">8 characters</span>
            </p>

            <button className="text-[13px] md:text-[16px] lg:text-[18px] font-regular py-3 rounded-[7px] text-white flex items-center justify-center gap-2 w-full mt-8 bg-primaryColor">
              Sign Up
            </button>

            <Link to="/login">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-regular mt-2 text-center">
                Have an Account?{" "}
                <span className="text-primaryColor">Log in</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

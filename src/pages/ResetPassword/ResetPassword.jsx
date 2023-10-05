import React, { useState } from "react";
import { Link } from "react-router-dom";
import resetLogo from "../../assets/images/resetLogo.png";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { PrimaryBtn } from "../../components/Buttons/PrimaryBtn";
import Logo from "../../assets/images/Logo.png";
import { ResetSuccessfulPopUp } from "../ForgotPassword/ResetSuccessfulPopUp";

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [resetInput, setResetInput] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setResetInput({ ...resetInput, [name]: value });
  };

  const resetButton = (event) => {
    // setIsLoading(true);
    event.preventDefault();
    const regEx = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/
    );
    if (!regEx.test(resetInput.newPassword)) {
      setPassError(
        "Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters"
      );
    } else if (resetInput.newPassword !== resetInput.confirmNewPassword) {
      setError("Passwords do not match!");
    } else {
      setIsLoading(true);
      setError("");
      setPassError("");
      setTimeout(() => {
        setSuccessful(true);
        setResetInput({ newPassword: "", confirmNewPassword: "" });
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="flex  justify-center items-center mt-[38%] lg:flex-col lg:mt-[7%]">
        <img
          className="hidden md:block absolute top-5 left-10 w-[149px] h-[36px]"
          src={Logo}
          alt="LingoLeap Logo"
        />
        <div className="flex flex-col items-center px-[10%] gap-[13px] lg:gap-[15px]">
          <div className="flex flex-col items-center">
            {" "}
            <img
              className="w-[32px] h-[32px] lg:h-[96px] lg:w-[96px]"
              src={resetLogo}
              alt="shield logo"
            />
            <p className="text-primaryColor font-semibold lg:text-[40px] lg:leading-[60px]">
              Reset Password
            </p>
          </div>
          <p className="text-center font-normal leading-[20px] text-[14px] text-[#616161] lg:text-[18px] lg:w-[366px]">
            Enter a strong password that is 8 character long.
          </p>
          <div className="flex flex-col gap-[12px] justify-center items-center">
            <div className="flex border-[1px] border-[#616161] items-center px-[5px] w-[300px] h-[40px] rounded-[8px] lg:w-[366px] lg:h-[42px]">
              <input
                className="outline-none w-full font-normal text-[14px] leading-[20px]"
                type={showPassword ? "text" : "password"}
                placeholder="Enter New Password"
                name="newPassword"
                value={resetInput.newPassword}
                onChange={handleInput}
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {!showPassword ? (
                  <BsEyeSlash className="w-[24px] h-[24px]" />
                ) : (
                  <BsEye className="w-[24px] h-[24px]" />
                )}
              </div>
            </div>
            <div>
              <div className="flex border-[1px] border-[#616161] items-center px-[5px] w-[300px] h-[40px] rounded-[8px] lg:w-[366px] lg:h-[42px]">
                <input
                  className="outline-none w-full font-normal text-[14px] leading-[20px]"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm New Password"
                  name="confirmNewPassword"
                  onChange={handleInput}
                  value={resetInput.confirmNewPassword}
                />
                <div onClick={() => setShowPassword2(!showPassword2)}>
                  {!showPassword2 ? (
                    <BsEyeSlash className="w-[24px] h-[24px]" />
                  ) : (
                    <BsEye className="w-[24px] h-[24px]" />
                  )}
                </div>
              </div>
            </div>
            <p className="text-red-500 italic text-[13px]">{error}</p>
            <p className="text-red-500 italic text-[13px] lg:w-[50%]">
              {passError}
            </p>
          </div>

          <PrimaryBtn
            className="w-full text-[14px] lg:w-[366px] hover:bg-[#8D5E9E]"
            onClick={resetButton}
            isLoading={isLoading}
          >
            Reset Password
          </PrimaryBtn>
          <Link to="/">
            <p className="text-primaryColor text-[14px]">Back To Login</p>
          </Link>
        </div>
        <p className="mt-[6%] hidden lg:block text-[16px] text-[#616161] font-normal">
          &#169; Copyright 2023{" "}
          <span className="text-primaryColor">Langleap</span>
        </p>
      </div>
    {successful && <ResetSuccessfulPopUp setSuccessful={setSuccessful} />}
    </>
  );
};

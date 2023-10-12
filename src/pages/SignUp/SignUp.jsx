import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import googleIcon from "../../assets/images/google.png";
import appleIcon from "../../assets/images/apple.png";
import { SignUpButton } from "../../components/Buttons/SignUpBtn";
import Language from "../../assets/images/Language.png";
import Logo from "../../assets/images/Logo.png";
import { showToast } from "../../Toastify/Toast";
import "./styles.css";
import { PrimaryBtn } from "../../components/Buttons/PrimaryBtn";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { RegisterApi } from "../../services/ApiCalls";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlePayload = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  console.log("SignUp_Payload", payload);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      if (
        payload.username === "" ||
        payload.email === "" ||
        payload.password === ""
      ) {
        showToast({
          message: "Please fill all fields",
          type: "error",
        });
      } else if (payload.password.length < 8) {
        showToast({
          message: "Password must be at least 8 characters",
          type: "error",
        });
      } else {
        const response = await RegisterApi(payload);

        console.log("RegisterResponse", response);

        if (response.status === 201) {
          showToast({
            message: "Account created successfully",
            type: "success",
          });
          // localStorage.setItem("pendingEmail", payload.email);
        } else {
          showToast({
            message: "Account creation failed",
            type: "error",
          });
          // localStorage.setItem("pendingEmail", payload.email);
        }

        setPayload({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      showToast({
        message: error.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:p-sixtyPixels max-w-thirteenHundredPixels mx-auto">
      <img
        className="hidden xl:flex w-fifteenPercent"
        src={Logo}
        alt="logo_image"
      />
      <div className="w-full lg:flex flex justify-center items-center gap-">
        <div className=" hidden xl:flex xl:flex-col xl:justify-center mt-[-10px] gap-10">
          <h2 className="text-center text-thirtyTwoPixels font-medium">
            Welcome to LingoLeap
          </h2>
          <img
            src={Language}
            alt="language_image"
            className="min-w-oneHundredPercent"
          />
        </div>
        <div className=" md:flex md:justify-left">
          <div className="px-[10px] py-16 md:py-20 w-threeTwentyPixels md:w-fourHundredPixels mx-auto">
            <h3 className="text-center text-twentyFourPixels md:text-twentyEightPixels lg:text-thirtyTwoPixels font-medium lg:font-semibold">
              Create an account
            </h3>
            <p
              id="text-custom-shadow"
              className="hidden lg:block text-center text-twelvePixels md:text-thirteenPixels lg:text-fourteenPixels font-regular mt-4 leading-5"
            ></p>
            <p className="block lg:hidden text-center text-twelvePixels md:text-thirteenPixels lg:text-fourteenPixels font-regular mt-4 leading-5">
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
              <p className="px-2 text-GrayColor1 text-twelvePixels md:text-thirteenPixels lg:text-fourteenPixels">
                or
              </p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col items-center mt-6 gap-4">
              <Input
                type="text"
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-twelvePixels md:text-fourteenPixels lg:text-sixteenPixels outline-none"
                placeholder="Username"
                name="username"
                id="username"
                value={payload.username}
                onChange={handlePayload}
                rightIcon={<BiSolidUser color="#713586" />}
              />

              <Input
                type="email"
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-twelvePixels md:text-fourteenPixels lg:text-sixteenPixels outline-none"
                placeholder="Email address"
                name="email"
                id="email"
                value={payload.email}
                onChange={handlePayload}
                rightIcon={<MdEmail color="#713586" />}
              />

              <Input
                className="border border-GrayColor1 w-full py-3 rounded-[7px] px-[8px] text-twelvePixels md:text-fourteenPixels lg:text-sixteenPixels outline-none"
                placeholder="Password"
                name="password"
                id="password"
                value={payload.password}
                onChange={handlePayload}
                type="password"
              />
            </div>
            <p className="text-twelvePixels md:text-thirteenPixels lg:text-fourteenPixels font-regular mt-2">
              For a secure password use{" "}
              <span className="text-primaryColor">8 characters</span>
            </p>
            <PrimaryBtn
              text="text-thirteenPixels md:text-sixteenPixels lg:text-eighteenPixels text-white"
              w="w-full"
              onClick={handleSubmit}
              className="mt-8"
              isLoading={isLoading}
            >
              Sign Up
            </PrimaryBtn>

            <Link to="/">
              <p className="text-twelvePixels md:text-thirteenPixels lg:text-fourteenPixels font-regular mt-2 text-center">
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

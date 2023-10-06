import React from "react";
import logo from "../../../src/assets/images/Logo.png";
import { Link } from "react-router-dom";

export const EmailVerify = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      {/* <div className="hidden md:block h-16 w-60 ml-12 mt-8">
        <img className="w-[100%] h-[100%]" src={logo} alt="company_logo" />
      </div> */}
      <div>
        <img className="hidden xl:flex w-[15%]" src={logo} alt="logo_image" />
      </div>

      <div className="flex justify-center items-center">
        <div className="text-primaryColor h-[40vh] lg:w-[20vw] px-10 my-auto text-center mt-[40%] md:mt-[20%] lg:mt-[10%] md:px-0">
          <img className="m-auto my-4" src={logo} />
          <h2 className="my-8 md:text-4xl font-bold">Verify your email</h2>
          <p className="md:text-xl text-black">
            To complete your signup and start learning on{" "}
            <span className="text-primaryColor">LingoLeap</span>
          </p>
          <div className="bg-primaryColor rounded p-2 my-8 lg:w-[100%] mx-auto">
            <Link to="/email-verification2">
              <p className="text-white md:text-xl">Verify your email</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

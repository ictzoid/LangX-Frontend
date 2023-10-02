import React from "react";
import logo from "../../../src/assets/images/Logo.png";
import { Link } from "react-router-dom";

export const EmailVerify = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="hidden md:block h-16 w-60 ml-12 mt-8">
        <img className="w-[100%] h-[100%]" src={logo} />
      </div>

      
      <div className="text-primaryColor h-[40vh] w-[100vw] px-10 my-auto text-center mt-[40%] md:mt-[20%] lg:mt-[10%] md:px-0">
        <img className="m-auto my-4" src={logo} />
        <h2 className="my-8 md:text-2xl">Verify your email</h2>
        <p className="md:text-2xl">
          To complete your signup and start learning on LingoLeap
        </p>
        <div className="bg-primaryColor rounded p-2 my-8 lg:w-[40vw] mx-auto">
        <Link to="/email-verification2" >
        <p className="text-white md:text-2xl">Verify your email</p>
        </Link>
          
        </div>
      </div>
      
    </div>
  );
};

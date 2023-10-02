import React from "react";
import mail from "../../assets/images/email.png";
import logo from "../../../src/assets/images/Logo.png";
import { Link } from "react-router-dom";

const EmailVerifyThankYou = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]">
        <div className="hidden md:block h-16 w-60 ml-12 mt-8">
          <img className="w-[100%] h-[100%]" src={logo} />
        </div>

        <div className="text-GrayColor1 h-[40vh] mx-auto w-[100vw] lg:w-[40vw] px-10 my-auto text-center mt-[40%] md:mt-[20%] lg:mt-[10%] md:px-0">
          <img
            className="m-auto my-4 text-[5rem] h-[4rem] w-[5rem]"
            src={mail}
          />
          <h2 className="text-primaryColor my-8 text-4xl">
            Email Verification
          </h2>
          <p className="md:text-2xl">
            An email has been sent to {"$email"}. Click on the link in your
            email to complete your registration
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyThankYou;

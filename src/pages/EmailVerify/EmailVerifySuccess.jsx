import React from "react";
// import mail from "../../assets/images/email.png";
import SuccessLogo from "../../../src/assets/images/verified.png";
import logo from "../../../src/assets/images/Logo.png";
import { Link } from "react-router-dom";
// import Home from "../Home";

const EmailVerifySuccess = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]">
        <div className="hidden md:block h-16 w-60 ml-12 mt-8">
          <img className="w-[100%] h-[100%]" src={logo} />
        </div>

        <div className="text-GrayColor1 h-[40vh] mx-auto w-[100vw] lg:w-[40vw] px-10 my-auto text-center mt-[40%] md:mt-[20%] lg:mt-[10%] md:px-0">
          <img
            className="m-auto my-4"
            src={SuccessLogo}
          />  

          <h2 className="text-primaryColor my-4 text-4xl font-bold">Verified</h2>
          <p className="md:text-xl">
            You have successfully verified your email
          </p>
          <div className="bg-primaryColor rounded-xl p-2 my-8 lg:w-[40vw] mx-auto">
            <Link to="/">
              <p className="text-white md:text-xl text-center">
                Go to Dashboard
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifySuccess;

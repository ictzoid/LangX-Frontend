import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/Logo.png";
import Emailpix from "../../assets/images/mark_email_unread.jpg";
import { toast } from "react-toastify";
// import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const firstRender = useRef(true);

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  // const [disable, setDisabled] = useState(true);
  // set error messages to display to the user
  const [emailError, setEmailError] = useState(null);

  const formValidation = () => {
    let error = false;

    let regEmail =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test.email) {
      setEmailError("Enter a valid email");
      error = true;
      console.error(emailError);
    }
    if (email === "") {
      setEmailError("Mandatory Field");
      error = true;
    }

    if (error === true) {
      return true;
    } else {
      setEmailError(null);
      return false;
    }
  };

  useEffect(() => {
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    formValidation();
  }, [email]);

  function emailHandler(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function submitHandler() {
    setTimeout(() => {
      setEmail("");
    }, 2000);

    toast.success("Successful");

    console.log({ email });
  }

  return (
    <div className=" md:w-full h-[100vh] m-0  items-center justify-center">
      <img src={Logo} alt="logo" className="w-30 ml-10 mt-4" />
      <div className="min-h-screen grid place-items-center">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={Emailpix}
            alt="headerpix"
            className=" w-[76px] h-[76px] pt-3"
          />
          <h1 className="text-2xl md:text-4xl text-primaryColor font-bold text-center mb-6">
            Forgot Password
          </h1>
          <p className="text-[8px] md:text-[16px] text-center shrink md:shrink-0">
            Enter your email address to reset <br className="block" />
            password. A password reset email will be <br className="block" />
            sent to you shortly
          </p>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter New Email"
              value={email}
              onChange={emailHandler}
              className="w-[312px] min-h-4 h-10 text-white rounded-md mt-4 border px-4 border-gray-600"
            />
            {/* <img src={ Eye } alt="eye" className='absolute top-7 right-3'/> */}
          </div>
          <button
            onClick={submitHandler}
            className="w-[312px] mb-4 text-[8px] md:text-[18px] mt-6 rounded-md bg-primaryColor text-white hover:bg-primaryColor hover:text-white py-2 transition-colors duration-300"
            type="Submit"
          >
            Verify Email
          </button>
          {/* <p> <Link to="Login">Back to Login</Link></p> */}
          <p className="text-[8px] md:text-[16px] ">Back to Login</p>
        </div>
        <p className="text-center mb-2 text-[8px] md:text-[16px]">
          &copy; Copyright 2023 Langleap
        </p>
      </div>
    </div>
  );
};

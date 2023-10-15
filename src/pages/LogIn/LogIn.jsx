import { useState } from "react";
import heroImg from "../../assets/images/Hero Image.png";
import googleIcon from "../../assets/images/google.png";
import appleIcon from "../../assets/images/apple.png";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { showToast } from "../../Toastify/Toast";
import { MdEmail } from "react-icons/md";
import Input from "../../components/Input";
import { PrimaryBtn } from "../../components/Buttons/PrimaryBtn";
import { SignUpButton } from "../../components/Buttons/SignUpBtn";
import axios from "axios";

export const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (login.email === "" || login.password === "") {
      showToast({
        message: "Please fill all fields",
        type: "error",
      });
      setIsLoading(false);
    } else {
      console.log(login);
      await apicall(login);
    }
  };
  const apicall = async (loginData) => {
    try {
      console.log(loginData);
      const response = await axios.post(
        "https://language-learning-app-omg7.onrender.com/auth/signin",
        loginData // You can directly use the loginData object
      );

      console.log("Response data:", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }

    // setTimeout(() => {
    //   showToast({
    //     message: "Login Successful",
    //     type: "success",
    //   });
    //   setLogin({
    //     email: "",
    //     password: "",
    //   });
    //   setIsLoading(false);
    // }, 2000);
  };
  return (
    <div className="flex justify-center w-[90%] mx-auto">
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-col w-[50%]">
        <img className="w-[149.1px] h-[36px] ml-[-200px] mt-3" src={logo} />
        <img className="w-[60%] h-[600px] pr-[20px]" src={heroImg} />
      </div>
      <div className="text-center pt-[60px] lg:border-l lg:w-[45%] px-[24px]">
        <h2 className="font-semibold leading-[60px] text-[40px]">
          Welcome back!
        </h2>
        <div className="font-normal text-[16px] leading-[22px] text-center text-GrayColor1 88px]">
          <p>Unlock the world of languages and embark on </p>
          <p>an extraordinary experience.</p>
          <p>Login now and discover the power of</p>
          <p>communication.</p>
        </div>
        <div className="container">
          <div className="flex flex-col mt-6 gap-4">
            <SignUpButton icon={googleIcon} text="Sign up with Google" />
            <SignUpButton icon={appleIcon} text="Sign up with Apple" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span>or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div>
            <Input
              type="email"
              className="border border-GrayColor1 mt-4 w-full py-3 rounded-[7px] px-[8px] text-[12px] md:text-[14px] lg:text-[16px] outline-none"
              placeholder="Email address"
              name="email"
              id="email"
              value={login.email}
              onChange={handleLogin}
              rightIcon={<MdEmail color="primaryColor" />}
            />
          </div>
          <div>
            <Input
              className="border border-GrayColor1 w-full py-3 mt-3 rounded-[7px] px-[8px] text-[12px] md:text-[14px] lg:text-[16px] outline-none"
              placeholder="Password"
              name="password"
              id="password"
              value={login.password}
              onChange={handleLogin}
              type="password"
            />
          </div>
          <div className=" flex items-center justify-between h-[29px] mt-1">
            <div>
              <input className=" h-[15px] border-2" type="checkbox" />
              <label className="font-normal text-[16px] leading-[24px] text-[#121212]">
                Keep me logged in
              </label>
            </div>
            <div className="font-normal text-[16px] leading-[20px] text-primaryColor">
              <Link to="/forgot-password">Forget Password?</Link>
            </div>
          </div>
          <div className="">
            <PrimaryBtn
              text="text-[13px] md:text-[16px] lg:text-[18px] text-white"
              w="w-full"
              onClick={handleSubmit}
              className="mt-8"
              isLoading={isLoading}
            >
              LogIn
            </PrimaryBtn>

            <Link to="/register">
              <p className="mt-2 font-medium text-[18px] leading-[27px] text-[#121212]">
                Don't have an Account?
                <span className="text-primaryColor cursor-pointer">
                  Sign Up
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

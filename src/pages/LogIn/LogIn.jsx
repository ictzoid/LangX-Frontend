import { useState } from "react";
import heroImg from "../../assets/images/Hero Image.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const [view, setView] = useState(false);
  return (
    <div className="flex justify-center gap-20">
      <div className="hidden lg:block">
        <h4 className="text-[#713584] w-[15.71px] h-[16.63px]">Lingoleap</h4>
        <img className="w-[300px] h-[600px]" src={heroImg} />
      </div>
      <div className="text-center mt-[60px] ">
        <h2 className="font-semibold leading-[60px] text-[40px]">
          Welcome back!
        </h2>
        <div className="font-normal text-[16px] leading-[22px] text-center text-[#616161] w-[364px] h-[88px]">
          <p>Unlock the world of languages and embark on </p>
          <p>an extraordinary experience.</p>
          <p>Login now and discover the power of</p>
          <p>communication.</p>
        </div>
        <div className="container">
          <div className="flex w-[366px] h-[42px] border-2 text-[#713586] p-[20px, 48px] gap-8 justify-center items-center rounded-lg mt-6 cursor-pointer">
            <img className="mr-3" src={google} />
            Continue with Google
          </div>
          <div className="flex w-[366px] h-[42px] text-[#713586] p-[20px, 48px] border-2 justify-center item-center rounded mt-4 gap-8 cursor-pointer">
            {" "}
            <img className="mr-3" src={apple} />
            Continue with Apple
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-[1px] w-[165px] bg-black"></div>
            <span>or</span>
            <div className="h-[1px] w-[165px] bg-black"></div>
          </div>
          <div>
            <input
              className="w-[366px] h-[42px] px-3 gap-4 border-2 rounded"
              type="text"
              id="email"
              name="email"
              placeholder="Username/Email"
            />
          </div>
          <div className=" flex items-center border-2 w-[366px] h-[42px] mt-4">
            <input
              className="w-[90%] outline-none px-3"
              type={view ? "text" : "password"}
              id="email"
              name="email"
              placeholder="Password"
            />
            {view ? (
              <FiEye
                className="cursor-pointer"
                onClick={() => {
                  setView(false);
                }}
              />
            ) : (
              <FiEyeOff
                className="cursor-pointer"
                onClick={() => {
                  setView(true);
                }}
              />
            )}
          </div>
          <div className=" flex  items-center gap-9 w-[369px] h-[29px]">
            <div>
              <input className="w-[20px] h-[15px] border-2" type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>
              <Link to="/">Forget Password?</Link>
            </div>
          </div>
          <div className="">
            <button className="w-[367px] h-[42px] rounded-[8px] p-[8px, 32px] border-2 bg-[#713586] text-white">
              Login
            </button>
            <p>
              {" "}
              Don't have an Account?{" "}
              <span className="text-[#713586] cursor-pointer">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

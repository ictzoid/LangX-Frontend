import React, { useState } from "react";
import resetLogo from "../../assets/images/resetLogo.png";

export const ResetPassword = () => {

  const [resetInput, setResetInput] = useState({
    newPassword : "",
    confirmNewPassword : ""
  });

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center px-[10%] gap-[10px]">
        <div className="flex flex-col items-center">
          {" "}
          <img
            className="w-[32px] h-[32px] lg:h-[96px] lg:w-[96px]"
            src={resetLogo}
            alt="shield logo"
          />
          <p className="text-primaryColor font-semibold">Reset Password</p>
        </div>
        <p className="text-center font-normal leading-[20px] text-[14px] text-[#616161] ">
          Enter a strong password that is 8 character long.
        </p>
        <div>
          <input type="text" placeholder="" name="newPassword"/>
        </div>
      </div>
    </div>
  );
};

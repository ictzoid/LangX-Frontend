import React from "react";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import SuccessIcon from "../../assets/images/SuccessIcon.png";
import { PrimaryBtn } from "../../components/Buttons/PrimaryBtn";

export const ResetSuccessfulPopUp = ({ setSuccessful }) => {
  return (
    <>
      <Modal>
        <div className="bg-[#fff] w-[302px] h-[202px] rounded-[10px] flex flex-col justify-center items-center px-[5%] gap-[7%] lg:w-[385px] lg:h-[346px] lg:px-0">
          <img
            className="w-[32px] h-[32px] lg:w-[96px] lg:h-[96px]"
            src={SuccessIcon}
            alt="/success-icon"
          />
          <p className="text-[16px] text-primaryColor text-center lg:text-[20px] ">
            You have successfully reset your password.
          </p>
          <Link to="/">
            <PrimaryBtn
              onClick={() => setSuccessful(false)}
              className="w-full text-[18px] lg:w-[215px] hover:bg-[#8D5E9E]"
            >
              Proceed To Login
            </PrimaryBtn>
          </Link>
        </div>
      </Modal>
    </>
  );
};

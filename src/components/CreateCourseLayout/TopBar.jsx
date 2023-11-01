import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function TopBar({ toggleSideBar, setToggleSideBar }) {
  return (
    <div
      className={`${
        toggleSideBar ? "sticky top-0 " : "sticky top-0"
      } text-[12px] h-[40px] border-b-[1px] border-[#e5e2e2] flex justify-between px-[5%] lg:h-[76px] bg-white`}
    >
      <div className="flex items-center gap-[10px]">
        <GiHamburgerMenu
          onClick={() => setToggleSideBar(true)}
          className="text-[#713586] w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"
        />
        <p className="lg:text-[32px] lg:text-[#713586] lg:absolute lg:left-[23%]">
          Create Course
        </p>
      </div>
      <div className="flex items-center gap-[10px] lg:text-[16px]">
        <p>Name Name</p>
        <img
          className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          src="./images/dp.png"
          alt="profile-picture"
        />
      </div>
    </div>
  );
}

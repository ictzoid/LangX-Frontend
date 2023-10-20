import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col justify-between text-[14px] text-white bg-[#713586] w-[166px] h-screen pt-[5%] pb-[10%] lg:w-[230px] lg:text-[18px] lg:pt-[2%] lg:pb-[3%]">
      <div>
        {/* logo */}
        <img
          className="mx-auto w-[106px] h-[25px] lg:w-[132px] lg:h-[31px]"
          src="./images/LingoleapLogo.png"
          alt="LingoLeap Logo"
        />

        <div className="mt-[30%] ml-[10%] flex flex-col gap-[45px] lg:ml-[15%]">
          <div className="flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[90%] hover:rounded-[7px]">
            <FaRegUser />
            <p>My Profile</p>
          </div>
          <div className="flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[95%] hover:rounded-[7px]">
            <MdOutlineEdit className="text-xl" />
            <p className="w-[100%]">Create Course</p>
          </div>
          <div className="flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[90%] hover:rounded-[7px]">
            <TbSchool className="text-xl" />
            <p>My Courses</p>
          </div>
          <div className="flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[90%] hover:rounded-[7px]">
            <MdOutlineSettings className="text-xl" />
            <p>Settings</p>
          </div>
          <div className="flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[90%] hover:rounded-[7px]">
            <MdHelpOutline className="text-xl" />
            <p>Help</p>
          </div>
        </div>
      </div>
      <div className=" ml-[10%] flex items-center gap-[10%] hover:bg-[#A986B6] hover:p-[6px] hover:w-[85%] hover:rounded-[7px] lg:ml-[15%]">
        <TbLogout className="text-xl" />
        <p>Logout</p>
      </div>
    </div>
  );
}

import React from "react";

export const Notfound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 h-screen">
      <div className="">
        <h1 className="text-[30px] lg:text-[80px] font-semibold text-primaryColor">
          Oooppss!!!
        </h1>
        <p className="text-center">Page Not Found</p>
      </div>
    </div>
  );
};

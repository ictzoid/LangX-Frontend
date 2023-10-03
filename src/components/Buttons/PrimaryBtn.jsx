import React from "react";

export const PrimaryBtn = ({
  children,
  className,
  bg = "bg-primaryColor",
  w = "w-[123px]",
  h = "h-[42px]",
  text = "text-[#fff]",
  rounded = "rounded-[8px]",
  loadingtext = false,
  disabled = false,
}) => {
  const combinedClassName = `${bg} ${w} ${h} ${text} ${rounded} ${
    className || ""
  } ${loadingtext ? "loading" : ""}`;

  return (
    <button className={`${combinedClassName}`} disabled={disabled}>
      {loadingtext ? "Loading..." : children}
    </button>
  );
};

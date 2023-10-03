import React from "react";

export const PrimaryBtn = ({
  children,
  className,
  bg = "bg-primaryColor",
  w = "w-[123px]",
  h = "h-[42px]",
  text = "text-[#fff]",
  rounded = "rounded-[8px]",
  loadingText = "Please wait . . .",
  disabled = false,
  isLoading = false,
  onClick,
}) => {
  const combinedClassName = `${bg} ${w} ${h} ${text} ${rounded} ${
    className || ""
  }`;

  return (
    <button
      className={`${combinedClassName}`}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

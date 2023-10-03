import React from "react";

export const PrimaryBtn = ({
  children,
  className,
  bg = "bg-primaryColor",
  w="w-full",
  loadingtext = false,
  disabled = false,
}) => {
  const combinedClassName = `${bg} ${w} ${className || ""} ${
    loadingtext ? "loading" : ""
  }`;

  return (
    <button className={`${combinedClassName}`} disabled={disabled}>
      {loadingtext ? "Loading..." : children}
    </button>
  );
};

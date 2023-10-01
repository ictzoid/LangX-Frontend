import React from "react";

export const PrimaryBtn = ({
  children,
  w = "123px",
  h = "42px",
  bg = primaryColor,
  borderRadius,
  mt,
  mb,
  px,
  py,
  mr,
  ml,
  fw = "400",
  color = "#fff",
  text = "18px",
  hover = "#8D5E9E",
  loadingText = "Please wait...",
  border,
  rounded = "8px",
  disabled = false
}) => {
  const btnStyle = {
    width: w,
    height: h,
    background: bg,
    borderRadius: borderRadius,
    mt: mt,
    mb: mb,
    mr: mr,
    ml: ml,
    px: px,
    py: py,
    color: color,
    fontSize: text,
    hover: hover,
    fontWeight: fw,
    border: border,
    rounded: rounded,
disabled: disabled
  };
  return (
    <button style={btnStyle}>
      {children}
      {loadingText && <span>{loadingText}</span>}
    </button>
  );
};

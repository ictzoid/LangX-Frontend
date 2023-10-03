import React from "react";
import { useState } from "react";

export const PrimaryBtn = ({
  children,
  w = "123px",
  h = "42px",
  bg = "#713586",
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
  loadingtext = false,
  border,
  rounded = "8px",
  disabled = false,
  className,
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
    disabled: disabled,
    className: className,
  };
  return <button style={btnStyle}>{children}</button>;
};

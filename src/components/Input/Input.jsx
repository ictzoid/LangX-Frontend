import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function Input({
  id = "",
  label = "",
  type = "text",
  onChange = null,
  isDisabled = false,
  placeholder = `Enter ${label.toLowerCase()}`,
  rightIcon,
  ...rest
}) {
  const [inputType, setInputType] = useState(type);

  const handleClick = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg py-2 px-3 outline-none focus:border-blue-500 font-regular"
        onChange={onChange}
        disabled={isDisabled}
        {...rest}
      />

      {type === "password" ? (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleClick}
        >
          {inputType === "password" ? <IoMdEyeOff color="#713586" /> : <IoMdEye color="#713586" />}
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

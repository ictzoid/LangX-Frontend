import React from "react";

const Input = ({ placeholder, icon, className }) => {
  return (
    <div className="relative w-full">
      <input type="text" placeholder={placeholder} className={className} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {icon}
      </div>
    </div>
  );
};

export default Input;

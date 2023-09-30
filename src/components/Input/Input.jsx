import React from "react";

const Input = ({
  placeholder,
  icon,
  className,
  type,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {icon}
      </div>
    </div>
  );
};

export default Input;

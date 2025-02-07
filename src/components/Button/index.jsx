import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-buttonColor h-14 px-4 py-2 rounded-lg text-textColor font-semibold w-8/12 max-w-xs shadow-lg hover:bg-buttonColor/80 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

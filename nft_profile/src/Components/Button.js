import React from "react";

const Button = ({ name = "", onSubmit }) => {
  return (
    <button
      className="bg-bgButton 
      w-[180px] xl:w-[237px] h-[51px] cursor-pointer 
  border-none font-bold text-[18px] leading-3
  rounded-[5px] hover:bg-green-600
  transition-all duration-500"
      onClick={onSubmit}
    >
      {name}
    </button>
  );
};

export default Button;

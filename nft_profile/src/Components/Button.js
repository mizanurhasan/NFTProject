import React from "react";

const Button = ({ name = "", onSubmit }) => {
  return <button onClick={onSubmit}>{name}</button>;
};

export default Button;

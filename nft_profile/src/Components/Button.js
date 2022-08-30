import React from "react";

const Button = ({ name }) => {
  return <button className="bg-bgButton">{name}</button>;
};

export default Button;

// element.style {
//     z-index: 7;
//     top: 342px;
//     left: 811px;
//     width: 237px;
//     height: 51px;
//     padding: 0px;
//     cursor: pointer;
//     background: none rgb(255, 255, 255);
//     border: none;
//     text-align: center;
//     font-family: var(--font_default);
//     font-size: 18px;
//     font-weight: bold;
//     color: rgb(0, 0, 0);
//     letter-spacing: 2px;
//     line-height: 1;
//     border-radius: 5px;
//     transition: color 200ms ease 0s, background 200ms ease 0s;
//     box-shadow: none;

import axios from "axios";
import React, { useEffect } from "react";
import QRCode from "react-qr-code";
import logo from "../Assets/logo.png";

const Step2 = ({ setAddress, address }) => {
  console.log(address);
  useEffect(() => {
    const addWalletData = async () => {
      try {
        const res = await axios.post("/wallet", {
          address,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    addWalletData();
  });

  return (
    <div className="relative w-full h-screen container">
      <img src={logo} alt="" className="absolute pl-12 top-5" />

      <div
        className="absolute flex w-full 
            space-x-32 
            items-center justify-between top-[25%] px-20"
      >
        <div className="text-txtColor">
          <h1 className="text-[48px]  font-[700]">Step 2</h1>
          <h2 className="font-[700] text-[24px] mb-5 ">
            Scan QR code with mobile app to
          </h2>
        </div>
        <div>
          <QRCode value={address || ""} />
        </div>
      </div>
    </div>
  );
};

export default Step2;

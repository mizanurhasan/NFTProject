import axios from "axios";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import logo from "../Assets/logo.png";

const Step2 = ({ setAddress, address }) => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    const addWalletData = async () => {
      setLoading(true);
      try {
        const res = await axios.post("/wallet", {
          address,
        });
        console.log(res.data.tokens);
        if (res.data.tokens.length > 0) {
          setTokens(res.tokens.collectionToken);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    addWalletData();
  }, []);

  return (
    <div className="relative w-full h-screen container">
      <img src={logo} alt="" className="absolute pl-12 top-5" />

      <div
        className="absolute flex flex-col md:flex-row w-full 
            md:space-x-32 
            items-center justify-between top-[25%] px-20"
      >
        <div
          className="text-txtColor 
        flex items-start flex-col pb-5 "
        >
          <h1 className="text-[38px] xl:text-[48px]  font-[700]">Step 2</h1>
          <h2 className="font-[400] xl:font-[700] text-[20px] xl:text-[24px]  mb-5 ">
            Scan QR code with mobile app to
          </h2>
          <p
            className={`${
              loading
                ? "text-red-500 shadow-2xl font-[700]"
                : "text-green-700 shadow-2xl font-[700]"
            }`}
          >
            {loading ? (
              "loading ..."
            ) : (
              <span>
                {tokens.length > 0 ? "Found token" : "Not found any token"}
              </span>
            )}
          </p>
        </div>
        <div className="">
          <QRCode value={address || ""} />
        </div>
      </div>
    </div>
  );
};

export default Step2;

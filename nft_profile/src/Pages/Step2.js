import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import onActionWallet from "../Controller/onActionWallet";
import Button from "../Components/Button";

const Step2 = ({ setStep, setAddress, address }) => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    (async () => {
      await onActionWallet().addWalletData({
        address,
        setLoading,
        setTokens,
      });
    })();
  }, [address]);

  return (
    <div className="relative w-full h-screen container">
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
          <h2 className="font-[400] xl:font-[700] text-[20px] xl:text-[24px]  mb-5">
            Scan QR code with mobile app to
          </h2>
          <p
            className={`${
              loading
                ? "text-red-500 shadow-2xl font-[700]"
                : "text-green-700 shadow-2xl font-[700]"
            } pb-10`}
          >
            {loading ? (
              "Waiting ..."
            ) : (
              <span>
                {tokens.length > 0 ? "Found token" : "Not found any token"}
              </span>
            )}
          </p>
          <Button name={"Step 1"} onSubmit={() => setStep("Step1")} />
        </div>
        <div>
          <QRCode value={address || ""} />
        </div>
      </div>
    </div>
  );
};

export default Step2;

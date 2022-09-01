import React from "react";
import Button from "../Components/Button";
import onActionWallet from "../Controller/onActionWallet";

const Step1 = ({ setStep, setAddress, address }) => {
  return (
    <div className="relative w-full h-screen container">
      <div className="divTextContainer">
        <div className="text-txtColor items-end">
          <h1 className="text-[38px] xl:text-[48px]  font-[700]">Step 1</h1>
          <h2 className="font-[700] text-[18px]  xl:text-[24px] mb-5 ">
            Connect wallet & sign to scan for partnered collections
          </h2>
          <p className="font-[400] xl:font-[700] text-[20px] xl:text-[24px] text-justify transition-all duration-500">
            missing element Safe and gas-less: Signing allows Agendab to scan
            your wallet for partnered collections. It does not cost any gas and
            does not give permission to make any transactions on your behalf.
          </p>
        </div>
        <div>
          <Button
            name={"Connection Wallet"}
            onSubmit={async () =>
              await onActionWallet().onConnectWallet({ setStep, setAddress })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;

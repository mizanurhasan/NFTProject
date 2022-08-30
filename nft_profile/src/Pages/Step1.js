import React from "react";
import bgVideo from "../Assets/file.mp4";
import logo from "../Assets/logo.png";
import Button from "../Components/Button";
const Step1 = () => {
  return (
    <div className="w-full h-screen">
      <img src={logo} alt />
      <video
        src={bgVideo}
        loop
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
      <div>
        <div>
          <h1>Step 1</h1>
          <h2>Connect wallet & sign to scan for partnered collections</h2>
          <p>
            missing element Safe and gas-less: Signing allows Agendab to scan
            your wallet for partnered collections. It does not cost any gas and
            does not give permission to make any transactions on your behalf.
          </p>
        </div>
        <div>
          <Button name={"Connection Wallet"} />
        </div>
      </div>
    </div>
  );
};

export default Step1;

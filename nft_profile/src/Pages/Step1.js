import { ethers } from "ethers";
import React, { useState } from "react";
import QRCode from "react-qr-code";

import logo from "../Assets/logo.png";
import Button from "../Components/Button";
const Step1 = () => {
  const [walletAddress, setWalletAddress] = useState(false);
  async function manageLogin() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("dectected....");

      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // console.log(account[0]);
        setWalletAddress(account[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider.blockNumber());
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Meta Mask not dectected");
    }
  }
  async function ConnectionWallet() {
    console.log(window.ethereum);
    // if (typeof window.ethereum !== "undefined") {
    //   await manageLogin();
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   console.log(provider);
    // }
  }
  return (
    <div className="relative w-full h-screen container">
      <img src={logo} alt="" className="absolute pl-12 top-5" />

      <div
        className="absolute flex w-full 
      space-x-32 
      items-center justify-center top-[25%] px-20"
      >
        <div className="text-txtColor">
          <h1 className="text-[48px]  font-[700]">Step 1</h1>
          <h2 className="font-[700] text-[24px] mb-5 ">
            Connect wallet & sign to scan for partnered collections
          </h2>
          <p className="font-[700] text-[24px] text-justify">
            missing element Safe and gas-less: Signing allows Agendab to scan
            your wallet for partnered collections. It does not cost any gas and
            does not give permission to make any transactions on your behalf.
          </p>
        </div>
        <div>
          <Button name={"Request Account"} onSubmit={manageLogin} />
          <Button name={"Connection Wallet"} onSubmit={ConnectionWallet} />
        </div>
      </div>
      <QRCode value={walletAddress || ""} />
    </div>
  );
};

export default Step1;

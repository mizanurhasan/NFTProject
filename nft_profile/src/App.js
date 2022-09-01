import { useState } from "react";
import "./App.css";
import bgVideo from "./Assets/file.mp4";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import logo from "./Assets/logo.png";

const page = {
  Step1: (setStep, setAddress, address) => (
    <Step1 setStep={setStep} setAddress={setAddress} address={address} />
  ),
  Step2: (setStep, setAddress, address) => (
    <Step2 setStep={setStep} setAddress={setAddress} address={address} />
  ),
};
function App() {
  const [step, setStep] = useState("Step1");
  const [address, setAddress] = useState(false);

  return (
    <div>
      <div className="container">
        <img src={logo} alt="" className="absolute pl-12 top-5 z-10" />
      </div>
      <video
        src={bgVideo}
        loop
        autoPlay
        muted
        className="absolute w-full h-full object-cover"
      />

      {page[step](setStep, setAddress, address)}
    </div>
  );
}

export default App;

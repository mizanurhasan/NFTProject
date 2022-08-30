import "./App.css";
import bgVideo from "./Assets/file.mp4";
import Step1 from "./Pages/Step1";

function App() {
  return (
    <div className="">
      <video
        src={bgVideo}
        loop
        autoPlay
        muted
        className="absolute w-full h-full object-cover"
      />
      <Step1 />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GenerateImage from "./components/GenerateImage";
import Gallery from "./components/Images";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GenerateImage />
      <Gallery />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

function App() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

export default App;

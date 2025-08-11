import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Pages/Service";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis/types";

function App() {
  gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

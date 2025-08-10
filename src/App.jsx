import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Navigation from "./Components/Navigation";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

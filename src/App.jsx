import { useEffect } from "react";

import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Pages/Service";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis/types";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import ResponsiveNav from "./Components/ResponsiveNav";
import Hamburger from "./Components/Hamburger";
import { useMediaQuery } from "react-responsive";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";

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
      <ScrollToTop />
      <Navigation />
      <ResponsiveNav />
      <Hamburger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

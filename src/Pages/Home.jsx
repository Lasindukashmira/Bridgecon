import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import CoreServices from "../Components/CoreServices";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoreServices />
      {/* <div style={{ height: "100vh" }}></div> */}
    </>
  );
}

export default Home;

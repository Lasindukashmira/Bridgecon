import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import CoreServices from "../Components/CoreServices";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoreServices />
      <WhyChooseUsSection />
      <div style={{ height: "100vh", backgroundColor: "red" }}></div>
    </>
  );
}

export default Home;

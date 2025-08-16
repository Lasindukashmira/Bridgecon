import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import CoreServices from "../Components/CoreServices";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import { useMediaQuery } from "react-responsive";
import WhyChooseusMobile from "../Components/WhyChooseusMobile";

function Home() {
  const normalSection = useMediaQuery({ maxWidth: 850 });
  return (
    <>
      <Hero />
      <AboutSection />
      <CoreServices />
      {!normalSection ? <WhyChooseUsSection /> : <WhyChooseusMobile />}
    </>
  );
}

export default Home;

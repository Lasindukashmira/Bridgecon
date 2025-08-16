import React from "react";
import ServiceHero from "../Components/ServiceHero";
import MainServiceSection from "../Components/MainServiceSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import OurProcessSection from "../Components/OurProcessSection";

function Service() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".cards");

    //  cards.forEach((card, index) => {
    //   gsap.set(card, { zIndex: index * 2 });
    // });
  }, []);
  return (
    <>
      <ServiceHero />
      <MainServiceSection />
      <OurProcessSection />
      <div style={{ height: "100vh" }} />
    </>
  );
}

export default Service;

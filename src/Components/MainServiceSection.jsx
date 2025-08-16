import React from "react";
import MainServiceCard from "./MainServiceCard";
import services from "../staticData/services";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

function MainServiceSection() {
  useGSAP(() => {
    const serviceCard = gsap.utils.toArray(".mainServiceCard");

    serviceCard.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 70%",

          scrub: true,
          end: "top 40%",
        },
        xPercent: 50,
        yPercent: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
      });
    });
  }, []);
  return (
    <div className="mainservicesection">
      <h1 className="serviceSheading">
        Explore Our <span>Services</span>
      </h1>

      <div className="serviceScardcontainer">
        {services.map((item) => (
          <MainServiceCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainServiceSection;

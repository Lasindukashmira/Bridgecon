import React from "react";
import ServiceCard from "./ServiceCard";
import coreServicesdata from "../staticData/coreServicesdata";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

function CoreServices() {
  useGSAP(() => {
    const coreHeading = new SplitText(".coreSheading", {
      type: "words",
    });
    gsap.from(coreHeading.words.slice(0, 2), {
      scrollTrigger: {
        trigger: ".coreServices",
        start: "top 90%",
        toggleActions: "restart restart none none",
      },
      xPercent: -50,
      duration: 1,
    });

    gsap.from(coreHeading.words[2], {
      scrollTrigger: {
        trigger: ".coreServices",
        start: "top 90%",
        toggleActions: "restart restart none none",
      },
      xPercent: 50,
      duration: 1,
    });

    const serviceCard = gsap.utils.toArray(".serviceCard");

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
    <div className="coreServices">
      <h1 className="coreSheading">
        Our Core <span className="sanimation">Services</span>
      </h1>
      <div className="coreservicecontainer">
        {coreServicesdata.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CoreServices;

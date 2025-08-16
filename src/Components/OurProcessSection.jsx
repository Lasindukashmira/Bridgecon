import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import itServiceProcess from "../staticData/itServiceProcess";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function OurProcessSection() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".ourCard");

    cards.forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
        },
      });
      tl.from(card, {
        x: -100,
        ease: "power1.Out",
        opacity: 0,
      }).from(
        card.querySelector(".step"),
        {
          scale: 0,
          opacity: 0,
        },
        "<50%"
      );
    });
  }, []);
  return (
    <div className="OurProcessSection">
      <h1 className="ourPrHeading">
        Our <span>Process</span>
      </h1>
      <div className="ourPrinner">
        {itServiceProcess.map((item) => (
          <OurCard key={item.step} item={item} />
        ))}
      </div>
    </div>
  );
}

const OurCard = ({ item }) => (
  <div className="ourCard">
    <div className="step">
      <p>{item.step}</p>
    </div>
    <FontAwesomeIcon icon={item.icon} className="ourIcon" />
    <h1 className="ourCheading">{item.title}</h1>
    <p className="ourCpara">{item.description}</p>
  </div>
);
export default OurProcessSection;

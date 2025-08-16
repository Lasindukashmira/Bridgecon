import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import whyChooseUs from "../staticData/whyChooseus";

function WhyChooseusMobile() {
  return (
    <div className="MobileWhychooseUsSection">
      <h1 className="mwhychHeading">
        Why Choose <span>US?</span>
      </h1>
      <div className="mwhychinner">
        {whyChooseUs.map((item, index) => (
          <WhychooseUsMobileCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const WhychooseUsMobileCard = ({ item }) => (
  <div className="mwhychCard">
    <div className="miconwrapper">
      <FontAwesomeIcon icon={item.icon} />
    </div>
    <div className="mwhcontent">
      <h1 className="mwhychheading">{item.title}</h1>
      <p className="mwhychPara">{item.description}</p>
    </div>
  </div>
);

export default WhyChooseusMobile;

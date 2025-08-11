import React from "react";
import MainServiceCard from "./MainServiceCard";
import services from "../staticData/services";

function MainServiceSection() {
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

import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ContactHero() {
  return (
    <section className="contactBanner">
      <div className="circle1"></div>
      <div className="circle2"></div>

      <div className="contentContaciner">
        <div className="mainContent">
          <h1>Reach Out to Bridgecon</h1>
          <p>
            We are here to Navigate Your IT challenges. Get in touch with our
            expert
          </p>
        </div>
        <div className="bannercontactContainer">
          <div className="bcontact">
            <FontAwesomeIcon icon={faPhone} className="picons" />
            <p>+94753167593</p>
          </div>
          <div className="bcontact">
            <FontAwesomeIcon icon={faEnvelope} className="picons" />
            <p>TricoSolutions@Outlook.com</p>
          </div>
          <div className="bcontact">
            <FontAwesomeIcon icon={faLocation} className="picons" />
            <p>Hokandara,Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactBody from "../Components/ContactBody";
import ContactHero from "../Components/ContactHero";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <section className="socials">
        <h1>Connect with Us</h1>
        <div className="icontainer">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} className="sicons" />
          </div>
          <div>
            <FontAwesomeIcon icon={faXTwitter} className="sicons" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} className="sicons" />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebookF} className="sicons" />
          </div>
        </div>
      </section>
    </>
  );
}

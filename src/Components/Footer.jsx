import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faMapLocation,
  faMobile,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMarker } from "@fortawesome/free-solid-svg-icons/faMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="fottercontent">
        <div className="footerleft">
          <div style={{ width: "80px" }}>
            <img src="/newlogo2.png" alt="" />
          </div>
          <h1 style={{ fontFamily: "Archive", marginBottom: "10px" }}>
            BridgeCon
          </h1>
          <h3 style={{ color: "#a0a0a0ff" }}>
            Bridging Technology and Business success
          </h3>
          <div className="fscontainer">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
        <div className="footermiddle">
          <p>Home</p>
          <p>Services</p>
          <p>About us</p>
          <p>Contact Us</p>
        </div>
        <div className="footerright">
          <div className="footerRow">
            <FontAwesomeIcon icon={faMapLocation} />
            <p>119/20, Prajamandala street, Second lane, Hokandara</p>
          </div>
          <div className="footerRow">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Info@bridgecontech.com</p>
          </div>
          <div className="footerRow">
            <FontAwesomeIcon icon={faMobile} />
            <p>+94 71 468 6965</p>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "11px" }}>
        © 2025 Bridgecon. | Image Credit:{" "}
        <a
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
          href="https://storyset.com"
        >
          Storyset
        </a>{" "}
      </p>
    </div>
  );
}

export default Footer;

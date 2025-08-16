import {
  faClock,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ContactBody() {
  return (
    <section className="contactMainBody">
      <div className="cleft">
        <form action="">
          <h1>
            Send Us a <span>Message</span>
          </h1>
          <div>
            <p>Name</p>
            <input type="text" name="name" placeholder="Input Your Firstname" />
          </div>
          <div>
            <p>Email</p>
            <input type="text" name="email" placeholder="Your@email.com" />
          </div>
          <div>
            <p>Subject</p>
            <input
              type="text"
              name="subject"
              placeholder="Regarding Your Services"
            />
          </div>
          <div>
            <p>Message</p>
            <textarea
              name=""
              id="msg"
              rows={10}
              placeholder="Type your message here"
            ></textarea>
          </div>

          <input type="submit" value="Submit Inquiry" />
        </form>
      </div>
      <div className="cright">
        <h1>
          Our <span>Contact</span> Details
        </h1>
        <div className="cunit">
          <div className="curow">
            <FontAwesomeIcon icon={faPhone} className="picons" />
            <p>Phone</p>
          </div>
          <p>+94753167593</p>
        </div>
        <div className="cunit">
          <div className="curow">
            <FontAwesomeIcon icon={faEnvelope} className="picons" />
            <p>Email</p>
          </div>
          <p>Tricoresolutions@outlook.com</p>
        </div>
        <div className="cunit">
          <div className="curow">
            <FontAwesomeIcon icon={faLocation} className="picons" />
            <p>Address</p>
          </div>
          <p>119/20 Prajamandala Mawatha, 2nd Street, Hokandara</p>
        </div>
        <div className="cunit">
          <div className="curow">
            <FontAwesomeIcon icon={faClock} className="picons" />
            <p>Woking Hours</p>
          </div>
          <p>27/7</p>
        </div>

        <div className="map">
          <h1>Find Us On Map</h1>
          <div className="maparea"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactBody;

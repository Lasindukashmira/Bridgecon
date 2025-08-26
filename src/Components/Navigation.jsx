import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  useGSAP(() => {
    const nav = gsap.timeline({
      scrollTrigger: {
        trigger: ".whoweare",
        start: "top 90%",
      },
    });

    nav.to("nav", {
      backdropFilter: "blur(5px)",
      backgroundColor: "",
      duration: 1,
    });
  }, []);
  return (
    <nav>
      <div className="left">
        <div className="logoContainer">
          <img src="/logoblack.png" alt="" />
        </div>
        <h1 className="logoName">BridgeCon</h1>
      </div>
      <div className="middle">
        <p className="links">
          <Link className="link" to="/">
            Home
          </Link>
        </p>
        <p className="links">
          {" "}
          <Link className="link" to="/service">
            Services
          </Link>
        </p>
        <p className="links">
          <Link className="link" to="/about">
            About us
          </Link>
        </p>
        <p className="links">
          {" "}
          <Link className="link" to="/contact">
            Contact us
          </Link>
        </p>
      </div>
      <div className="right">
        <button className="getStart">Get Start</button>
      </div>
    </nav>
  );
}

export default Navigation;

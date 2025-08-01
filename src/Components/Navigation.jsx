import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

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
        <p className="links">Home</p>
        <p className="links">Services</p>
        <p className="links">About us</p>
        <p className="links">Contact us</p>
      </div>
      <div className="right">
        <button className="getStart">Get Start</button>
      </div>
    </nav>
  );
}

export default Navigation;

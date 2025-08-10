import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

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
        <p className="links" onClick={() => navigate("/")}>Home</p>
        <p className="links">Services</p>
        <p className="links" onClick={() => navigate("/aboutUs")}>About us</p>
        <p className="links">Contact us</p>
      </div>
      <div className="right">
        <button className="getStart">Get Start</button>
      </div>
    </nav>
  );
}

export default Navigation;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const time = useRef();
  const isMobileDevice = useMediaQuery({ maxWidth: 850 });

  useGSAP(() => {
    gsap.set(".ResponsiveNav", { xPercent: 100 });
    time.current = gsap
      .timeline({ paused: true })
      .to(".ResponsiveNav", {
        xPercent: 0,

        duration: 1,
        ease: "power1.inOut",
      })
      .to(".ResponsiveNav", { clipPath: "circle(129.6% at 91% 8%)" }, "<50%")
      .from(".rlink", { xPercent: 20, opacity: 0, stagger: 0.08 }, "<75%");
  }, []);

  useEffect(() => {
    if (!isMobileDevice) {
      gsap.set(".ResponsiveNav", { xPercent: 100, clipPath: "none" });
      setIsOpen(false);
      if (time.current) time.current.pause(0);
    }
  }, [isMobileDevice]);

  const toggleMenu = () => {
    if (isOpen && isMobileDevice) {
      time.current.reverse();
    } else {
      time.current.play();
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className="hamcontainer" onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default Hamburger;

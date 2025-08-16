import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import services from "../staticData/services";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

function ServiceHero() {
  const paragraph = useRef();
  useGSAP(() => {
    const heading = new SplitText(".sheroheading", {
      type: "words",
      mask: "words",
    });

    const paragraphS = new SplitText(paragraph.current, {
      type: "lines",
      mask: "lines",
    });

    const fromUp = [...heading.words.slice(0, 2), ...heading.words.slice(3, 5)];
    const fromDown = [heading.words[2], heading.words[5]];

    const loadtl = gsap.timeline();
    loadtl
      .from(".sheroimg", {
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power1.out",
      })
      .from(fromUp, { yPercent: -100, duration: 0.5, ease: "power1.out" }, 0.5)
      .from(fromDown, { yPercent: 100, duration: 0.5, ease: "power1.out" }, 0.5)
      .from(paragraphS.lines, {
        yPercent: 100,
        duration: 0.5,
        ease: "power1.out",
      })
      .from(".exploreServicesbtn", {
        opacity: 0,
        scale: 10,
        duration: 0.5,
        ease: "power",
      });
  }, []);
  return (
    <div className="serviceHero">
      <div className="sherocontent">
        <div className="shleft">
          <img src="src\assets\firstheros.png" alt="" className="sheroimg" />
        </div>
        <div className="shright">
          <h1 className="sheroheading">
            Bridgecon’s Professional<span> IT </span> & Digital
            <span> Services</span>
          </h1>
          <p className="sherodescription" ref={paragraph}>
            At Bridgecon, we deliver comprehensive digital and IT solutions
            tailored to meet the unique needs of businesses across industries.
            From secure cloud computing to custom software and reliable support,
            we bridge the gap between your goals and technology.
          </p>
          <button className="exploreServicesbtn">Explore Services</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faClock,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const brand = useRef();
  const slogan = useRef();
  const sPara = useRef();
  useGSAP(() => {
    const loadtl = gsap.timeline();
    const loadimgtl = gsap.timeline();
    const scroltl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Hero",
        start: "top 10%",

        scrub: 2,
        pin: true,
      },
    });

    const brandcars = new SplitText(brand.current, {
      mask: "chars",
      type: "chars",
    });

    const sloganWords = new SplitText(slogan.current, {
      type: "words",
      mask: "words",
    });
    const sparalines = new SplitText(sPara.current, {
      type: "lines",
      mask: "lines",
    });
    loadtl.fromTo(
      ".welcome",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, duration: 1, xPercent: 0 }
    );
    loadtl.from(brandcars.chars, {
      yPercent: 100,
      stagger: 0.06,
      opacity: 0,
    });
    loadimgtl.fromTo(
      ".firsthero",
      { opacity: 0.5, skewX: -50 },
      { opacity: 1, skewX: 0 }
    );

    scroltl
      .fromTo(
        ".will-fade",
        { opacity: 1 },
        { opacity: 0, duration: 1, stagger: 0.5 }
      )
      .fromTo(
        ".firsthero",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power1" },
        2
      )
      .fromTo(
        ".bigCircle",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power1.in" },
        2
      )
      .fromTo(
        sloganWords.words,
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        sparalines.lines,
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0, duration: 1, stagger: 0.08 }
      )
      .fromTo(
        ".pointrow",
        { xPercent: 50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
          stagger: 0.06,
        }
      )
      .fromTo(".tag", { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, []);
  return (
    <div className="Hero">
      <div className="startContent">
        <h2 className="welcome will-fade">Welcome to</h2>
        <h1 className="brandname will-fade" ref={brand}>
          BridgeCon
        </h1>
      </div>
      <div className="secondContent">
        <div className="sleft">
          <div className="tag will-fade2">
            <FontAwesomeIcon icon={faCircle} className="circle" />
            <p>Innovative IT Solutions</p>
          </div>

          <h2 className="slogan will-fade2" ref={slogan}>
            Bridging <span>Technology</span> & <span> Business</span> Success
          </h2>
          <p className="sPara will-fade2" ref={sPara}>
            We deliver end-to-end IT services that empower businesses to grow,
            operate efficiently, and stay competitive through smart technology.
          </p>

          <div className="pointcontainer">
            <div className="pointrow will-fade2">
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <p>24/7 Service</p>
            </div>
            <div className="pointrow will-fade2">
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <p>IT Consulting</p>
            </div>
            <div className="pointrow will-fade2">
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <p>Web Design and Custom Software Development</p>
            </div>
          </div>
        </div>
        <div className="sright">
          <img
            src="src/assets/firsthero.png"
            alt=""
            className="firsthero will-fade2"
          />
        </div>
      </div>
      <div className="bigCircle"></div>
      {/* <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob"
      >
        <path
          fill="#EAAC25"
          d="M34.1,-54.6C46.6,-51.9,60.8,-47.6,66.4,-38.2C72.1,-28.8,69.2,-14.4,67.8,-0.8C66.4,12.8,66.4,25.6,59.7,33C52.9,40.5,39.3,42.6,28.3,52.3C17.2,61.9,8.6,79.3,-1.3,81.6C-11.2,83.9,-22.5,71.1,-36.9,63.4C-51.3,55.6,-68.9,52.8,-74.3,43.1C-79.6,33.3,-72.7,16.7,-65.8,4C-59,-8.7,-52.2,-17.5,-47.9,-29C-43.6,-40.5,-41.7,-54.8,-34.1,-60.3C-26.6,-65.9,-13.3,-62.8,-1.2,-60.7C10.8,-58.5,21.6,-57.4,34.1,-54.6Z"
          transform="translate(100 100)"
        />
      </svg> */}
    </div>
  );
}

export default Hero;

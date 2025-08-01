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
    </div>
  );
}

export default Hero;

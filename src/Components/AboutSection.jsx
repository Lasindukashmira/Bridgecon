import {
  faCheck,
  faGlobe,
  faLightbulb,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

function AboutSection() {
  useGSAP(() => {
    const wheading = new SplitText(".whoHeading", {
      type: "words",
      mask: "words",
    });
    const paragraph = new SplitText(".wpara", { type: "lines", mask: "lines" });

    const whosectiontl = gsap.timeline({
      scrollTrigger: {
        trigger: ".whoweare",
        start: "top 50%",
        end: "top top",

        // end: "bootom bottom",
        scrub: 2,
      },
    });

    whosectiontl
      .fromTo(
        wheading.words,
        {
          yPercent: 100,
        },
        { yPercent: 0, duration: 1, stagger: 0.06 },
        0
      )
      .fromTo(
        paragraph.lines,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.06 },
        0
      )
      .fromTo(
        ".pointrow2",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1, stagger: 0.06 },
        0
      )
      .fromTo(
        ".wpic",
        { yPercent: -20, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 },
        0
      )
      .fromTo(
        ".decoration",
        { yPercent: 20, opacity: 0, scale: 0.5 },
        { yPercent: 0, duration: 1, opacity: 1, scale: 1, stagger: 0.06 },
        0
      );
  }, []);

  return (
    <div className="whoweare">
      <div className="wleft">
        <img src="src\assets\blob1.png" className="decoration"></img>
        <img src="src\assets\firsthero1.png" alt="" className="wpic" />
      </div>
      <div className="wright">
        <h1 className="whoHeading">
          Who <span> We</span> Are ?
        </h1>
        <p className="wpara">
          Bridgecon is a forward-thinking IT services provider committed to
          delivering innovative technology solutions that drive business growth
          and operational efficiency. Backed by a team of seasoned
          professionals, we focus on understanding your unique challenges and
          crafting tailored strategies that produce real, measurable results.
          Our deep passion for technology, combined with a client-first
          approach, makes Bridgecon your trusted partner in digital
          transformation.
        </p>
        <div className="pointcontainer">
          <div className="pointrow2 ">
            <div className="point">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <p>Global presence with localized support and insights.</p>
          </div>
          <div className="pointrow2 ">
            <div className="point">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <p>Innovative solutions tailored to complex business needs.</p>
          </div>
          <div className="pointrow2 ">
            <div className="point">
              <FontAwesomeIcon icon={faShield} />
            </div>
            <p>Unwavering commitment to security and relisbility.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

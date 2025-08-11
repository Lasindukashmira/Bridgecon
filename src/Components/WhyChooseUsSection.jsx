import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import whyChooseUs from "../staticData/whyChooseus";
import { ScrollTrigger, SplitText } from "gsap/all";

function WhyChooseUsSection() {
  useGSAP(() => {
    const heading = SplitText.create(".whychminner > h1", {
      type: "chars",
      mask: "chars",
    });
    const scrolltl = gsap.timeline({
      scrollTrigger: {
        trigger: ".whychooseussection",
        start: "top top",
        end: "+=" + window.innerWidth * 5,

        scrub: true,
        pin: true,
        // snap: 1 / 5,
      },
    });

    scrolltl.to(".slider", {
      x: -(window.innerWidth * 5),
      ease: "none",
    });

    gsap.from(heading.chars, {
      yPercent: 100,

      stagger: 0.04,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".whychooseussection",

        start: "top 40%",
        end: "40% 40%",
        scrub: true,
      },
    });
    gsap.to(".box", {
      delay: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".whychooseussection",

        start: "top 25%",
        end: "25% 25%",
        scrub: true,
      },
    });

    gsap.to(".whychminner > h1", {
      xPercent: -100,

      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".whychmain",
        containerAnimation: scrolltl,
        start: "2% left",
        markers: true,
        scrub: true,
      },
    });
    gsap.to(".box", {
      xPercent: -100,

      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".whychmain",
        containerAnimation: scrolltl,
        start: "2% left",

        scrub: true,
      },
    });

    gsap.fromTo(
      ".iconwrapper",
      { rotate: -20 },
      { rotate: 20, duration: 0.5, repeat: -1, yoyo: true }
    );

    const sections = gsap.utils.toArray(".whpsections");

    sections.forEach((section) => {
      const sectionheading = SplitText.create(
        section.querySelector(".headwrapper > h1"),
        { type: "words", mask: "words" }
      );
      const sectionPara = SplitText.create(
        section.querySelector(".whychright > p"),
        { type: "lines", mask: "lines" }
      );

      const contenttl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "left 30%",
          end: "2% 10%",
          containerAnimation: scrolltl,

          scrub: true,
        },
      });

      contenttl
        .from(sectionheading.words, { y: 100, stagger: 0.09 })
        .from(sectionPara.lines, { y: 100, stagger: 0.09 }, "<")
        .from(section.querySelector(".iconwrapper"), {
          opacity: 0,
          scale: 0.1,
        });

      gsap.from(section.querySelector(".whchimg"), {
        scale: 0.5,
        opacity: 0,
        rotate: -10,

        scrollTrigger: {
          trigger: section,
          start: "left center",
          end: "30% 20%",
          containerAnimation: scrolltl,

          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className="whychooseussection">
      <div className="slider">
        <section className="whychmain">
          <div className="whychminner">
            <h1>Why Choose</h1>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="box"
            >
              <h1>Bridgecon</h1>
            </div>
          </div>
        </section>
        {whyChooseUs.map((item) => {
          return <Whsection item={item} />;
        })}
      </div>
    </div>
  );
}

const Whsection = ({ item }) => (
  <section className="whpsections">
    <div className="whychleft">
      <img src={item.image} alt="" className="whchimg" />
    </div>
    <div className="whychright">
      <div className="headwrapper">
        <div className="iconwrapper">
          <FontAwesomeIcon icon={item.icon} className="whchicon" />
        </div>
        <h1>{item.title}</h1>
      </div>

      <p>{item.description}</p>
    </div>
  </section>
);

export default WhyChooseUsSection;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faHandshake,
  faShieldHalved,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  const titleRef = useRef();
  const leadRef = useRef();

  useGSAP(() => {
    // Hero intro animations
    const tl = gsap.timeline();
    const splitTitle = new SplitText(titleRef.current, {
      type: "words",
      mask: "words",
    });
    const splitLead = new SplitText(leadRef.current, {
      type: "lines",
      mask: "lines",
    });

    tl.from(".aboutTag", { opacity: 0, yPercent: -50, duration: 0.6 })
      .from(splitTitle.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(splitLead.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
      })
      .from(
        ".aboutHeroImage",
        { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" },
        "<"
      )
      .from(".aboutCircle", { scale: 0.6, opacity: 0, duration: 0.8 }, "<");

    // Scroll sections
    gsap.from(".storyMedia", {
      scrollTrigger: { trigger: ".aboutStory", start: "top 70%" },
      yPercent: -10,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from([".storyHeading", ".storyText"], {
      scrollTrigger: { trigger: ".aboutStory", start: "top 70%" },
      yPercent: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
    });

    gsap.from(".mvCard", {
      scrollTrigger: { trigger: ".missionVision", start: "top 80%" },
      yPercent: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
    });

    gsap.from(".valueCard", {
      scrollTrigger: { trigger: ".ourValues", start: "top 80%" },
      yPercent: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });

    gsap.from(".stat", {
      scrollTrigger: { trigger: ".aboutStats", start: "top 80%" },
      yPercent: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="AboutUsPage">
      {/* Hero */}
      <section className="aboutHero">
        <div className="aLeft">
          <div className="aboutTag">About Bridgecon</div>
          <h1 className="aboutTitle" ref={titleRef}>
            Bridging Innovation and Excellence
          </h1>
          <p className="aboutLead" ref={leadRef}>
            At Bridgecon, we believe technology is more than just tools and
            systems - it’s the bridge that connects businesses to their greatest
            potential. Our mission is to empower organizations across the globe
            with cutting-edge IT solutions that drive innovation, enhance
            operational efficiency, and enable sustainable growth.<br />

            With a balance of expert guidance and unwavering support, we transform
            complex technology into meaningful business outcomes - helping you
            move from vision to reality, faster and smarter.
          </p>
        </div>
        <div className="aRight">
          <img
            src="src/assets/firsthero1.png"
            alt="BridgeCon team"
            className="aboutHeroImage"
          />
        </div>
        <div className="aboutCircle"></div>
      </section>

      {/* Who we are / Story - reuse class name to keep nav behavior */}
      <section className="whoweare aboutStory">
        <div className="wleft">
          <img src="src/assets/blob1.png" className="decoration storyMedia" />
          <img src="src/assets/firsthero.png" alt="story" className="wpic storyMedia" />
        </div>
        <div className="wright">
          <h2 className="whoHeading storyHeading">Who We Are</h2>
          <p className="wpara storyText">
            Bridgecon is a forward-thinking IT services and consulting partner
            committed to making technology work for you, not the other way
            around. We blend deep technical expertise with strategic business
            insight to craft solutions that are secure, scalable, and human-centered.
          </p>
          <div className="pointcontainer">
            <div className="pointrow2">
              <div className="point">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <p>Outcome-driven delivery with rapid iteration for maximum agility.</p>
            </div>
            <div className="pointrow2">
              <div className="point">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <p>Security-first mindset integrated into every layer of our solutions.</p>
            </div>
            <div className="pointrow2">
              <div className="point">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <p>Collaborative approach backed by transparent, open communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="missionVision">
        <h2 className="sectionHeading">
          Our <span>Mission</span> & <span>Vision</span>
        </h2>
        <div className="mvGrid">
          <div className="mvCard">
            <div className="mvIcon">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h3 className="mvTitle">Mission</h3>
            <p className="mvText">
              To empower businesses with reliable, modern technology that
              drives measurable impact, delivers long-term value, and creates
              a competitive edge.
            </p>
          </div>
          <div className="mvCard">
            <div className="mvIcon">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <h3 className="mvTitle">Vision</h3>
            <p className="mvText">
              To be the trusted bridge between complex technology and simple,
              delightful experiences for every organization we serve.
            </p>
          </div>
          <div className="mvCard">
            <div className="mvIcon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className="mvTitle">Promise</h3>
            <p className="mvText">
              We commit to partnership, integrity, and relentless improvement
              at every step of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ourValues">
        <h2 className="sectionHeading">
          Our <span>Core</span> Values
        </h2>
        <div className="valuesGrid">
          {["Innovation", "Reliability", "Empathy", "Excellence"].map(
            (value) => (
              <div className="valueCard" key={value}>
                <h4 className="valueTitle">{value}</h4>
                <p className="valueText">
                  {value === "Innovation" &&
                    "We challenge assumptions, think beyond the obvious, and experiment boldly to create future-ready solutions."}
                  {value === "Reliability" &&
                    "We deliver consistently, meet commitments, and stand firmly behind the work we produce."}
                  {value === "Empathy" &&
                    "We listen first, understand your challenges, and design solutions that put people at the center."}
                  {value === "Excellence" &&
                    "We sweat the details, refine relentlessly, and aim for outcomes that exceed expectations."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="aboutStats">
        <div className="stats">
          <div className="stat">
            <h3 className="statNumber">50+ </h3>
            <p className="statLabel">Projects Delivered</p>
          </div>
          <div className="stat">
            <h3 className="statNumber">20+</h3>
            <p className="statLabel">Happy Clients</p>
          </div>
          <div className="stat">
            <h3 className="statNumber">5+</h3>
            <p className="statLabel">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

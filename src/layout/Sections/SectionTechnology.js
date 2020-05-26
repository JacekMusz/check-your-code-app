import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
//COMPONENTS
import SectionTechnologyFooter from "./SectionTechnologyFooter.js";

const SectionTechnology = () => {
  //-----REACT INTERSECTION OBSERVER-----
  const [sectionTechnology, inView] = useInView({
    threshold: 0,
    rootMargin: "-200px",
  });
  const [
    stopObserveSectionTechnology,
    setStopObserveSectionTechnology,
  ] = useState(0);

  //-----REFS FOR ANIMATION-----
  const sectionBackgroundOne = useRef(null);
  const sectionBackgroundTwo = useRef(null);
  const logoBackgroundOne = useRef(null);
  const logoBackgroundTwo = useRef(null);
  const article = useRef(null);
  const logo = useRef(null);

  const myDuration = 1;

  useEffect(() => {
    if (inView && !stopObserveSectionTechnology) {
      // In order to stop listeining after first animation
      //
      //----ANIMATION ARTICLE AND ITS BACKGORUNDS-----
      const tl = gsap.timeline({ defaults: { duration: myDuration } });
      tl.to(sectionBackgroundTwo.current, { opacity: 1, y: "1vh", x: "4vw" })
        .to(
          sectionBackgroundOne.current,
          { opacity: 1, y: "4vh", x: "7vw" },
          `-=${myDuration * 0.8}`
        )
        .to(
          article.current,
          { opacity: 1, y: "8vh", x: "10vw" },
          `-=${myDuration * 0.8}`
        )
        .to(
          [...article.current.children],
          { opacity: 1, y: "-20" },
          `-=${myDuration * 0.5}`
        )
        .to(
          logoBackgroundOne.current,
          { opacity: 1, x: 0, y: 0 },
          `-=${myDuration * 0.4}`
        )
        .to(
          logoBackgroundTwo.current,
          { opacity: 1, x: 0, y: 0 },
          `-=${myDuration * 0.6}`
        )
        .to(
          logo.current,
          { duration: 1.5, opacity: 1, x: "-20px", y: 0 },
          `-=${myDuration * 0.6}`
        )
        .add("hideBackgrounds")
        .to(
          [logoBackgroundOne.current, logoBackgroundTwo.current],
          { duration: myDuration * 0.7, opacity: 0, x: "-15px", y: "5px" },
          "hideBackgrounds"
        )
        .to(
          [sectionBackgroundTwo.current, sectionBackgroundOne.current],
          { y: "8vh", x: "10vw", opacity: 0, duration: myDuration * 0.7 },
          "hideBackgrounds"
        )
        .eventCallback("onComplete", () => setStopObserveSectionTechnology(1));
    }
  });

  return (
    <div
      ref={sectionTechnology}
      className="section-technology"
      id="section-technology"
    >
      <div
        ref={sectionBackgroundOne}
        className="section-technology__background-one"
      ></div>
      <div
        ref={sectionBackgroundTwo}
        className="section-technology__background-two"
      ></div>
      <div ref={article} className="article-technology">
        <>
          <h2 className="article-technology__title">
            Do you know how it works ?
          </h2>
          <div className="article-technology__paragraph-one-and-logo-wrapper">
            <div className="article-technology__paragraph-one">
              'Check yout code App' is non-profit App. It uses DeepCode's public
              API and is an interface which can edit and send your code to
              automated code review. DeepCode's algorithms detect syntax
              mistakes as well as your code's intent.
            </div>
            <div
              className="article-technology__logo-background-one"
              ref={logoBackgroundOne}
            ></div>
            <div
              className="article-technology__logo-background-two"
              ref={logoBackgroundTwo}
            ></div>
            <div className="article-technology__logo" ref={logo}></div>
          </div>
          <div className="article-technology__paragraph-two">
            {" "}
            Moreover DeepCode's algorithms can find critical vulnerabilities
            that other automated code reviews can't. Such as: cross-site
            scripting, path traversal or SQL injection. <br />
            Now you can write a better code using the knowladge of the global
            comunnity.
          </div>
        </>
        <SectionTechnologyFooter />
      </div>
    </div>
  );
};

export default SectionTechnology;

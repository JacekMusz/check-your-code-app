import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
//COMPONENTS
import SectionTechnologyFooter from "./SectionTechnologyFooter.js";

const SectionTechnology = () => {
  //-----REACT INTERSECTION OBSERVER-----
  const [sectionTechnology, inView, entry] = useInView({
    threshold: 0
  });
  const [
    stopObserveSectionTechnology,
    setStopObserveSectionTechnology
  ] = useState(0);

  //-----REFS FOR ANIMATION-----
  const sectionBackgroundOne = useRef(null);
  const sectionBackgroundTwo = useRef(null);
  const logoBackgroundOne = useRef(null);
  const logoBackgroundTwo = useRef(null);
  const article = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    if (inView && !stopObserveSectionTechnology) {
      // In order to stop listeining after first animation
      //
      //----ANIMATION ARTICLE AND ITS BACKGORUNDS-----
      const tl = gsap.timeline({ defaults: { duration: 0.8 } });
      tl.to(sectionBackgroundTwo.current, { opacity: 1, y: "2vh", x: "2vw" })
        .to(
          sectionBackgroundOne.current,
          { opacity: 1, y: "5vh", x: "6vw" },
          "-=0.4"
        )
        .to(article.current, { opacity: 1, y: "8vh", x: "10vw" }, "-=0.4")
        .to([...article.current.children], { opacity: 1, y: "-20" }, "+=0.4")
        .to(logoBackgroundOne.current, { opacity: 1, x: 0, y: 0 }, "-=0.01")
        .to(logoBackgroundTwo.current, { opacity: 1, x: 0, y: 0 }, "-=0.5")
        .to(logo.current, { duration: 1.2, opacity: 1, x: 0, y: 0 }, "-=0.3")
        .eventCallback("onComplete", setStopObserveSectionTechnology(1));
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
          <div className="article-technology__text-and-logo-wrapper">
            <div className="article-technology__text">
              'Check yout code App' uses DeepCode's public API and its interface
              and tool to edit and send your code to automated code review.
              DeepCode's algorithms detect syntax mistakes as well as your
              code's intent. DeepCode's algorithms can finds critical
              vulnerabilities that other automated code reviews don't. Such as:
              cross-site scripting, path traversal or SQL injection.
              <br />
              Now you can write a better code using the knowladge of the global
              comunnity.
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
        </>
        <SectionTechnologyFooter />
      </div>
    </div>
  );
};

export default SectionTechnology;

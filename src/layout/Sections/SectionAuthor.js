import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const SectionAuthor = () => {
  const [actionTrigger, inView] = useInView({
    threshold: 0,
    rootMargin: "-200px",
  });

  const [stopAnimate, setStopAnimate] = useState(0);
  //-----REFS FOR ANIMATION-----
  const firstParagraph = useRef(null);
  const secondParagraph = useRef(null);
  const thirdParagraph = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2 } });
    if (inView & !stopAnimate) {
      // In order to stop listeining after first animation
      //
      //----ANIMATION ARTICLE AND ITS BACKGORUNDS-----
      tl.to(
        firstParagraph.current,
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
        },
        "+=0.5"
      )
        .to(
          secondParagraph.current,
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          thirdParagraph.current,
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          [
            firstParagraph.current,
            secondParagraph.current,
            thirdParagraph.current,
          ],
          { scale: 1.1, boxShadow: "-6px 9px 12px #c03da3", duration: 0.8 },
          "-=0.6"
        )
        .to(
          [
            firstParagraph.current,
            secondParagraph.current,
            thirdParagraph.current,
          ],
          {
            scale: 1,
            boxShadow: "-2px 3px 3px #c03da3",
            duration: 0.8,
          },
          "-=0.3"
        )
        .eventCallback("onComplete", () => setStopAnimate(1));
    }
  });

  return (
    <div className="section-author" id="section-author">
      <div className="author__container">
        <h2 className="author__title">About the author</h2>
        <div className="author__portrait-and-job-info">
          <div ref={actionTrigger} className="author__portrait"></div>
          <div className="author__author-info">
            <p
              ref={firstParagraph}
              className="author-info__introduction styl2 "
            >
              {" "}
              Hello world ! <br /> My name is Jacek Muszyński.
            </p>
            <p ref={secondParagraph} className="author-info__job-info">
              {" "}
              I'm a junior front-end Developer since October 2019 when I got my
              first commercial job in Warsaw.
              <br />
              Currently I'm responsible for building kind of an interface which
              will be the web tool to menage and create dialogs for voicebots.
            </p>
            <p ref={thirdParagraph} className="author-info__about-app">
              This app is non-profit project made for improve my programming
              skills :)
            </p>
          </div>
        </div>
      </div>
      <NavLink className="section-author__button" to="/editor">
        Check my code now!
      </NavLink>
    </div>
  );
};

export default SectionAuthor;

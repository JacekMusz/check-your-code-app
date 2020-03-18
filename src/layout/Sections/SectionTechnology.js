import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowCircleDown } from "react-icons/fa";

const SectionTechnology = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0
  });

  const [linstenerInView, setListenerInView] = useState(0);

  useEffect(() => {
    if (inView) {
      setListenerInView(1);
    }
  });
  return (
    <div className="section-technology" id="section-technology">
      {/* <div>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div> */}
      <h2 className="section-technology__title">Do you know how it works ?</h2>
      {/* <FaArrowCircleDown className="section-technology__title-icon" /> */}
      <div className="section-technology__articles">
        <p
          className={
            linstenerInView
              ? "section-technology__p-1--show"
              : "section-technology__p-1--hidden"
          }
        >
          Arificial Inteligence can make automated Code Review based on best
          pracitses from around the world.
        </p>
        <div ref={ref} className="section-technology__img"></div>
        <p
          className={
            linstenerInView
              ? "section-technology__p-2--show"
              : "section-technology__p-2--hidden"
          }
        >
          DeepCode's algorithms detect syntax mistakes as well as your code's
          intent.
        </p>
        <p
          className={
            linstenerInView
              ? "section-technology__p-3--show"
              : "section-technology__p-3--hidden"
          }
        >
          DeepCode's algorithms can finds critical vulnerabilities that other
          automated code reviews don't: <li> - cross-site scripting</li>
          <li>- path traversal</li>
          <li>- SQL injection</li>
        </p>
        <p
          className={
            linstenerInView
              ? "section-technology__p-4--show"
              : "section-technology__p-4--hidden"
          }
        >
          Now you can write a better code using the knowladge of the global
          comunnity.{" "}
        </p>
      </div>
      <div className="section-technology__deepCode"></div>
    </div>
  );
};

export default SectionTechnology;

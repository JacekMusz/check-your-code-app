import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowCircleDown } from "react-icons/fa";
import SeeMore from "./SeeMore.js";

const SectionTechnology = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0
  });
  const paragraphsContent = [
    "'Check yout code App' uses DeepCode's public API and its interface and tool to edit and send your code to automated code review.",
    "Arificial Inteligence can make automated code review based on bestpracitses from around the world. DeepCode's algorithms detect syntax mistakes as well as your code's intent.",
    "DeepCode's algorithms can finds critical vulnerabilities that other automated code reviews don't. Such as: cross-site scripting, path traversal or SQL injection.",
    "Now you can write a better code using the knowladge of the global comunnity. "
  ];
  const [linstenerInView, setListenerInView] = useState(0);
  useEffect(() => {
    if (inView) {
      setListenerInView(1);
    }
  });

  return (
    <div className="section-technology" id="section-technology">
      <h2 className="section-technology__title">Do you know how it works ?</h2>
      <div className="section-technology__articles">
        {paragraphsContent.map((item, index) => {
          return (
            <p
              key={index}
              className={
                linstenerInView
                  ? `section-technology__p-${index}--show`
                  : `section-technology__p-${index}--hidden`
              }
            >
              {item}
            </p>
          );
        })}
        <div ref={ref} className="section-technology__img"></div>
      </div>
      <SeeMore />
      <div className="section-technology__deepCode"></div>
    </div>
  );
};

export default SectionTechnology;

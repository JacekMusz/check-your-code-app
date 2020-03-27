import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowCircleDown } from "react-icons/fa";
import SeeMore from "./SeeMore.js";
import gsap from "gsap";

const SectionTechnology = () => {
  const [article, inView, entry] = useInView({
    threshold: 0
  });
  const backgroundOne = useRef();
  const backgroundTwo = useRef();
  const paragraphsContent = [
    "'Check yout code App' uses DeepCode's public API and its interface and tool to edit and send your code to automated code review.",
    "Arificial Inteligence can make automated code review based on bestpracitses from around the world. DeepCode's algorithms detect syntax mistakes as well as your code's intent.",
    "DeepCode's algorithms can finds critical vulnerabilities that other automated code reviews don't. Such as: cross-site scripting, path traversal or SQL injection.",
    "Now you can write a better code using the knowladge of the global comunnity. "
  ];
  const [linstenerInView, setListenerInView] = useState(0);

  useEffect(() => {
    gsap.set(backgroundOne, { autoAlpha: 0 });
    if (inView) {
      setListenerInView(1);
    }
  });

  return (
    <div className="section-technology">
      <div
        ref={backgroundOne}
        className="section-technology__background-one"
      ></div>
      <div
        ref={backgroundTwo}
        className="section-technology__background-two"
      ></div>
      <div
        ref={article}
        className="section-technology__article"
        id="section-technology"
      >
        <h2 className="section-technology__title">
          Do you know how it works ?
        </h2>
        <div className="section-technology__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="section-technology__img"></div>
        </div>
        <SeeMore />
        <div className="section-technology__deepCode"></div>
      </div>
    </div>
  );
};

export default SectionTechnology;

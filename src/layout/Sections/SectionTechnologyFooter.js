import React, { useState, useRef } from "react";
import gsap from "gsap";
import classNames from "classnames";
import logoCss from "../../photos/technology-icons/icons8-css3-100.png";
import logoHtml from "../../photos/technology-icons/icons8-html-5-100.png";
import logoJS from "../../photos/technology-icons/icons8-javascript-100.png";
import logoReact from "../../photos/technology-icons/icons8-react-100.png";
import logoRedux from "../../photos/technology-icons/icons8-redux-100.png";
import logoSass from "../../photos/technology-icons/icons8-sass-100.png";

const SectionTechnologyFooter = () => {
  const [buttonValue, setButtonValue] = useState(false);

  //-----ANIMATIONS-----
  const logo1 = useRef(null);
  const logo2 = useRef(null);
  const logo3 = useRef(null);
  const logo4 = useRef(null);
  const logo5 = useRef(null);
  const logo6 = useRef(null);
  const logosRefsArray = [logo1, logo2, logo3, logo4, logo5, logo6];

  const logoAnimations = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.9 } });
    tl.to([logo3.current, logo4.current], { opacity: 1 }, "+=0.5");
    tl.to([logo2.current, logo5.current], { opacity: 1 }, "-=0.5");
    tl.to([logo1.current, logo6.current], { opacity: 1 }, "-=0.5");
  };

  //-----CLASSES-----
  const showOrHideModal = classNames({
    "modal-app-technologies modal-app-technologies--show": buttonValue,
    "modal-app-technologies": !buttonValue,
  });

  //-----BUTTON ACITONS-----
  const handleSectionTechnologyFooterButton = () => {
    setButtonValue(!buttonValue);
    logoAnimations();
  };

  //-----CREATE JSX ELEMENTS-----
  const mainTechnologies = [
    { name: "HTML 5", logo: logoHtml },
    { name: "CSS 3", logo: logoCss },
    { name: "Sass", logo: logoSass },
    { name: `JavaScript ES6`, logo: logoJS },
    { name: "React", logo: logoReact },
    { name: "Redux", logo: logoRedux },
  ];

  const createMainTechnologyTemplate = () =>
    mainTechnologies.map((item, index) => {
      return (
        <div key={index} className="main-technology">
          <div
            ref={logosRefsArray[index]}
            className="main-technology__logo"
            style={{
              backgroundImage: `url(${item.logo})`,
            }}
          >
            <div className="main-technology__name">{item.name}</div>
          </div>
        </div>
      );
    });

  const otherTechnologies = [
    "Axiaos - to comunicate whith deepCode API",
    "Monaco-ediotr - to edit your code on browser",
    "Gsap - to make awesome animations on the website",
  ];

  const createOtherTechnologies = () => {
    return otherTechnologies.map((item, index) => {
      return (
        <li key={index} className="list__item">
          {item}
        </li>
      );
    });
  };

  return (
    <div className="section-technology-footer__wrapper">
      <h3 className="section-technology-footer__title">
        Click See More to get more information about this App !{" "}
      </h3>
      <button
        className="section-technology-footer__button"
        onClick={() => handleSectionTechnologyFooterButton()}
      >
        {buttonValue ? "Hide me" : "See more"}
      </button>
      <div className={showOrHideModal}>
        <h2 className="modal-app-technologies__title">
          Major technologies which were used to create this app:
        </h2>
        <div className="modal-app-technologies__container">
          <div className="modal-app-technologies__main-technologies">
            {createMainTechnologyTemplate()}
          </div>
          <div className="modal-app-technologies__others-technologies">
            <h2 className="others-technologies__title">This App also uses:</h2>
            <ul className="others-technologies__list">
              {createOtherTechnologies()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTechnologyFooter;

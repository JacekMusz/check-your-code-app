import React, { useState, useEffect } from "react";

const SeeMore = () => {
  const [buttonValue, setButtonValue] = useState(false);
  const handleShowAndHideInformation = buttonValue => {
    if (buttonValue) {
      return "SeeMore__section--show";
    } else {
      return "SeeMore__section--hide";
    }
  };
  return (
    <div className="SeeMore">
      <h3 className="SeeMore__title">
        Click <span>See More</span> to get more information about this App !{" "}
      </h3>
      <button
        className="SeeMore__button"
        onClick={() => setButtonValue(!buttonValue)}
      >
        See More !
      </button>
      <div className={handleShowAndHideInformation(buttonValue)}></div>
      <span>{buttonValue.toString()}</span>
    </div>
  );
};

export default SeeMore;

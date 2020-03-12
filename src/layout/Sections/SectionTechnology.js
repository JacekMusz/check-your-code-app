import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const SectionTechnology = () => {
  return (
    <div className="section-technology" id="section-technology">
      <h2 className="section-technology__header">Do you know how it works ?</h2>
      <FaArrowCircleDown className="section-technology__header-icon" />
      <div className="section-technology__article">3x3</div>
      <div className="section-technology__deepCode"></div>
    </div>
  );
};

export default SectionTechnology;

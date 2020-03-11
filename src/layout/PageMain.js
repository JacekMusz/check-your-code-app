import React from "react";
import SectionStart from "./Sections/SectionStart";
import SectionProject from "./Sections/SectionProject";
import SectionTechnology from "./Sections/SectionTechnology";
import SectionAuthor from "./Sections/SectionAuthor";

const PageMain = () => {
  return (
    <div className="page-main">
      <SectionStart />
      <SectionProject />
      <SectionTechnology />
      <SectionAuthor />
    </div>
  );
};

export default PageMain;

import React from "react";
import { NavLink } from "react-router-dom";

const SectionAuthor = () => {
  return (
    <div className="section-author" id="section-author">
      <div className="author__container">
        <h2 className="author__title">About the author</h2>
        <div className="author__portrait-and-job-info">
          <div className="author__portrait"></div>
          <div className="author__author-info">
            <p className="author-info__introduction">
              Hello world ! <br /> My name is Jacek Muszyński.
            </p>
            <p className="author-info__job-info">
              {" "}
              I'm a junior front-end Developer since October 2019 when I got my
              first commercial job in Warsaw.
              <br />
              Currently I'm responsible for building kind of an interface which
              will be the web tool to menage and create dialogs for voicebots.
            </p>
            <p className="author-info__about-app">
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

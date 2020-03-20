import React from "react";

const SectionProject = () => {
  return (
    <div className="section-project" id="section-project">
      <h2 className="section-project__title">
        Improve your code skills with artificial inteligence
      </h2>
      <div className="articles">
        <div className="articles__article article">
          <div className="article__text">
            Would you ever considered that artificial inteligence could help you
            make better code ? Now it's possible with{" "}
            <a href="www.deepcode.com">Deep Code</a>.
          </div>
          <div className="article__img"></div>
        </div>
        <div className="articles__article article">
          <div className="article__img"></div>
          <div className="article__text">
            Make smile every senior developer in your team. Don't waste their
            time for your code review. Make code review on your own :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProject;

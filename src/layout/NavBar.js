import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const NavBar = props => {
  const history = useHistory();
  const [isWindowTopPosition, setIsWindowTopPosition] = useState(true);

  const handleReturnToMainPage = () => {
    history.push("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsWindowTopPosition(false);
      } else {
        setIsWindowTopPosition(true);
      }
    });
  });
  const classForNavBar = classNames({
    "--top": isWindowTopPosition,
    "--scroll": !isWindowTopPosition
  });
  return (
    <div className={`nav-bar nav-bar${classForNavBar}`}>
      <div className="nav-bar__content-wrapper">
        <p
          className={`nav-bar__bookmark-title nav-bar__bookmark-title${classForNavBar}`}
        >
          {"Check your code <3 />"}
        </p>
        <div className="nav-links">
          <Link
            className="link"
            to="section-start"
            smooth={true}
            onClick={handleReturnToMainPage}
          >
            Start
          </Link>
          <Link
            className="link"
            to="section-project"
            smooth={true}
            onClick={handleReturnToMainPage}
          >
            Project
          </Link>
          <Link
            className="link"
            to="section-technology"
            smooth={true}
            onClick={handleReturnToMainPage}
          >
            Technology
          </Link>
          <Link
            className="link"
            to="section-author"
            smooth={true}
            onClick={handleReturnToMainPage}
          >
            Author
          </Link>
          <NavLink className="link" to="/editor">
            Editor
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const NavBar = () => {
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
    "--top": isWindowTopPosition && history.location.pathname !== "/editor",
    "--scroll": !isWindowTopPosition || history.location.pathname === "/editor",
  });
  const navBarLinks = [
    { path: "section-start", name: "Start", offset: 0 },
    { path: "section-project", name: "Project", offset: -100 },
    { path: "section-technology", name: "Technology", offset: -100 },
    { path: "section-author", name: "Author", offset: 70 },
  ];
  return (
    <div className={`nav-bar nav-bar${classForNavBar}`}>
      <div className="nav-bar__content-wrapper">
        <p
          className={`nav-bar__bookmark-title nav-bar__bookmark-title${classForNavBar}`}
        >
          {"Check your code <3 />"}
        </p>
        <div className="nav-links">
          {navBarLinks.map((item, index) => {
            return (
              <Link
                className="link"
                to={item.path}
                smooth={true}
                onClick={handleReturnToMainPage}
                key={index}
                offset={item.offset}
              >
                {item.name}
              </Link>
            );
          })}
          <NavLink className="link" to="/editor">
            Editor
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

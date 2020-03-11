import React from "react";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

const NavBar = props => {
  const history = useHistory();

  const handleReturnToMainPage = () => {
    history.push("/");
  };
  return (
    <div className={`nav-bar nav-bar${props.scrollClass}`}>
      <p
        className={`nav-bar__bookmark-title nav-bar__bookmark-title${props.scrollClass}`}
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
          O projekcie
        </Link>
        <Link
          className="link"
          to="section-technology"
          smooth={true}
          onClick={handleReturnToMainPage}
        >
          Technologia
        </Link>
        <Link
          className="link"
          to="section-author"
          smooth={true}
          onClick={handleReturnToMainPage}
        >
          O autorze
        </Link>
        <NavLink className="link" to="/editor">
          Edytor
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import "../styles/NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink className="nav-logo-link " to="/Kalorije">
            Kalorije.site
          </NavLink>
        </div>

        <ul className={click ? "nav-menu active  " : "nav-menu "}>
          <li className="nav-item">
            <NavLink
              to="/Kalorije"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              Kalorije
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Aktivnosti"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              Aktivnosti
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Bmr"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              Bmr
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Bmi"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              Bmi
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars "}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

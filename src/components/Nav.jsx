import React, { useState } from "react";
import logo from "../assets/gxlogo.png";
import "./Nav.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
const Nav = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={"nav" + (expand === true ? " expand" : "")}>
      <div className="nav__logo">
        <img src={logo} alt="" />
        <h3>Holy Vietnamese Martyrs Catholic Church</h3>
      </div>
      <div className="nav__list--container">
        <ul className="nav__list">
          <li className="nav__link">
            <a href="">About</a>
          </li>
          <li className="nav__link">
            <a href="">Events</a>
          </li>
          <li className="nav__link">
            <a href="">Contact</a>
          </li>
          <li className="nav__link">
            <a href="">Donations</a>
          </li>
          <button
            className="nav__handler"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DensityMediumIcon />
          </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Nav;

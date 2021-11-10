import React from "react";
import "./navbar.scss";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/bancochile.png" alt="banco" />
          </a>
        </div>
        <div className="right">
          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

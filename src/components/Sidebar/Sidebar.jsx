import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

export const Sidebar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={"sidemenu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">
            <img src="assets/indicator.png" alt="indicator" /> Indicadores
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/grafico">
            <img src="assets/graphic.png" alt="indicator" />
            Gráfico
          </Link>
        </li>
      </ul>
    </div>
  );
};

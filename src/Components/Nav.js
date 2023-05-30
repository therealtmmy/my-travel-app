import React from "react";
import "./Nav.css";
import { FaGlobeAmericas } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="Nav">
      <p className="Nav-Text">
        <FaGlobeAmericas fontSize={20} /> my travel journal.
      </p>
    </div>
  );
};

export default Nav;

import React from "react";
import "./Nav.css";
import Data from "./Data";
import { FaGlobeAmericas } from "react-icons/fa";

const Nav = (props) => {
  return (
    <div className="Nav">
      <p className="Nav-Text">
        <FaGlobeAmericas fontSize={20} /> my travel journal.
      </p>
    </div>
  );
};

export default Nav;

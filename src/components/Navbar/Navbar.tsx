import React from "react";
// import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <a href="/" className="logo-link">
          Growwgram
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

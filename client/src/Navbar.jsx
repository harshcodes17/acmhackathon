import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Kshetra Vridhi</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
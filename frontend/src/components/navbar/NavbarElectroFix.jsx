import React from "react";
import { Link } from "react-router-dom";
import "./NavbarElectroFix.css";

const NavbarElectroFix = () => {
  return (
    <nav className="navbar-electro">
      <h2>⚡ ElectroFix</h2>
      <div className="nav-links">
        <Link to="/electrofix">Home</Link>
        <Link to="/electro-services">Services</Link>
        <Link to="/electro-about">About</Link>
        <Link to="/electro-contact">Contact</Link>
        <Link to="/cart">🛒 Cart</Link>
         <Link to="/">← Back to Main</Link>

      </div>
    </nav>
  );
};

export default NavbarElectroFix;

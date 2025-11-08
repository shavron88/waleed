import React from "react";
import { Link } from "react-router-dom";
import "./NavbarSupply.css";

const NavbarSupply = () => {
  return (
    <nav className="navbar-supply">
      <h2>🚛 Supply Chain</h2>
      <div className="nav-links">
        
        <Link to="/supply-home">Home</Link>
        <Link to="/supply-services">Services</Link>
        <Link to="/supply-contact">Contact</Link>
        <Link to="/">← Back to Main</Link>
      </div>
    </nav>
  );
};

export default NavbarSupply;

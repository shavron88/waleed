import React from "react";
import { Link } from "react-router-dom";
import "./NavbarRealEstate.css";

const NavbarRealEstate = () => {
  return (
    <nav className="navbar-realestate">
      <h2 className="logo">🏡 Real Estate</h2>
      <div className="nav-links">
        <Link to="/PropertyHome">Home</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/nearby">Nearby</Link>
        <Link to="/request-property">Request Property</Link>
        <Link to="/">← Back to Main</Link>
      </div>
    </nav>
  );
};

export default NavbarRealEstate;

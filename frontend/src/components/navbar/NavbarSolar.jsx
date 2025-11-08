import React from "react";
import { Link } from "react-router-dom";
import "./NavbarSolar.css";

const NavbarSolar = () => {
  return (
    <nav className="navbar-solar">
      <h2>☀️ Solar Energy</h2>
      <div className="nav-links">
        <Link to="/solar-home">Home</Link>
        <Link to="/solar-booking">Booking</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">← Back to Main</Link>
      </div>
    </nav>
  );
};

export default NavbarSolar;

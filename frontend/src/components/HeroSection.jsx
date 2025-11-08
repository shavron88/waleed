import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToProperties = () => {
    const section = document.getElementById("properties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Waleed Traders</h1>
        <p className="hero-subtitle">Your Trusted Real Estate Partner in Karachi</p>
        <p className="hero-description">
          Find your dream property — Houses, Plots, Apartments & Commercial Spaces
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={scrollToProperties}>
            🏠 View Properties
          </button>
          <button className="secondary-btn" onClick={() => navigate("/request-property")}>
            📄 Request Property
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <div>
              <h3>Find Nearby</h3>
              <p>Properties near you</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">👨‍💼</span>
            <div>
              <h3>Expert Agents</h3>
              <p>Professional guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

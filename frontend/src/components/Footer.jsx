import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-container">
        {/* --- Logo and About --- */}
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="/icons/home.svg"
              alt="Home Icon"
              className="footer-logo-icon"
            />
            <span>Wali Traders</span>
          </div>
          <p className="footer-description">
            Your trusted real estate partner in Karachi. We help you find your
            dream property with professional guidance and exceptional service.
          </p>

          {/* --- Social Icons --- */}
          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nearby">Nearby Properties</Link></li>
            <li><Link to="/agents">Our Agents</Link></li>
            <li><Link to="/request-property">Request Property</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* --- Property Types --- */}
        <div className="footer-section">
          <h3>Property Types</h3>
          <ul className="footer-links">
            <li><a href="/#properties">Houses</a></li>
            <li><a href="/#properties">Plots</a></li>
            <li><a href="/#properties">Apartments</a></li>
            <li><a href="/#properties">Commercial</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <img src="/icons/phone.svg" alt="Phone" className="contact-icon" />
              <span>+92-300-1234567</span>
            </div>
            <div className="contact-item">
              <img src="/icons/mail.svg" alt="Email" className="contact-icon" />
              <span>info@walitraders.com</span>
            </div>
            <div className="contact-item">
              <img src="/icons/map-pin.svg" alt="Location" className="contact-icon" />
              <span>DHA Phase 5, Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="footer-bottom">
        <p>&copy; 2025 Wali Traders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

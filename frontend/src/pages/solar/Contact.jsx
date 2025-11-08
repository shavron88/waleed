import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHashtag, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our Solar Energy Experts</p>
        </div>
      </section>

      {/* Popup Message */}
      {submitted && (
        <div className="popup">
          <p>✅ Form Submitted Successfully!</p>
        </div>
      )}

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Office Information */}
          <div className="office-info">
            <h3>Pakistan Office</h3>

            <div className="info-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <p>123 Solar Street, Lahore, Pakistan</p>
            </div>

            <div className="info-item">
              <span className="icon"><FaPhone /></span>
              <p>+92 321 0000000</p>
            </div>

            <div className="info-item">
              <span className="icon"><FaEnvelope /></span>
              <p>support@alfajarsolar.com</p>
            </div>

            <div className="info-item">
              <span className="icon"><FaHashtag /></span>
              <p>#AlFajarSolar</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Business Hours</label>
                <select name="businessHours">
                  <option>Morning 9:00-12:00</option>
                  <option>Afternoon 12:00-18:00</option>
                  <option>Evening 18:00-21:00</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                rows="4"
              ></textarea>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Pakistan Office"
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.3246225027!2d74.2295!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483f6b5a1e9%3A0xb42adfe6d71e0a1c!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693400212345!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Footer */}
      <footer className="social-footer">
        <a href="#" className="social-circle facebook"><FaFacebook /></a>
        <a href="#" className="social-circle twitter"><FaTwitter /></a>
        <a href="#" className="social-circle linkedin"><FaLinkedin /></a>
      </footer>
    </div>
  );
};

export default Contact;

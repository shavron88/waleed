import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    { icon: "🎯", title: "Our Mission", description: "To provide exceptional real estate services and help our clients find their perfect property in Karachi." },
    { icon: "🏅", title: "Excellence", description: "We maintain the highest standards of professionalism and integrity in every transaction." },
    { icon: "👥", title: "Client Focus", description: "Your needs and satisfaction are at the heart of everything we do." },
    { icon: "❤️", title: "Passion", description: "We are passionate about real estate and committed to your success." },
    { icon: "🛡️", title: "Trust", description: "Building long-term relationships based on transparency and reliability." },
  ];

  const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const partners = [
    { name: "PTV", logo: "https://upload.wikimedia.org/wikipedia/en/1/13/PTV_Logo.png" },
    { name: "FTTL", logo: "https://www.fauji.org.pk/assets/uploads/2022/07/fauji-trans.png" },
    { name: "FGEI", logo: "https://fgei-cg.gov.pk/images/logo.png" },
    { name: "FOTCO", logo: "https://fotco.pk/wp-content/uploads/2021/09/logo.png" },
    { name: "Ontex", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Ontex_logo.svg" },
    { name: "National", logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/National_Foods_Limited_logo.png" },
    { name: "Landmark", logo: "https://landmark.pk/assets/images/logo.png" },
    { name: "KIA", logo: "Kia-logo.png" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="page-title">🏠 About Waleed Traders</h1>
          <p className="page-subtitle">Your Trusted Real Estate Partner Since 2010</p>
        </div>
      </div>

      <div className="about-content">
        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>Founded in 2010, Waleed Traders has been at the forefront of Karachi's real estate market...</p>
                <p>We specialize in residential, commercial, and land properties throughout Karachi’s prime locations including DHA, Clifton, Bahria Town, and Gulistan-e-Jauhar.</p>
                <p>With a team of experienced professionals and a portfolio of successful transactions, we continue to help families and businesses find their perfect properties.</p>
              </div>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" alt="Waleed Traders Office" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 className="section-heading">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <h2 className="section-heading">Our Partners</h2>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <img src={partner.logo} alt={partner.name} />
                  <p>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Find Your Dream Property?</h2>
              <p>Let our expert team help you find the perfect property in Karachi.</p>
              <div className="cta-buttons">
                <button onClick={() => navigate("/")} className="cta-btn primary">
                  Browse Properties
                </button>
                <button onClick={() => navigate("/agents")} className="cta-btn secondary">
                  Contact Our Agents
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;


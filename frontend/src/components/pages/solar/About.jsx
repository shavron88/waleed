import React from "react";
import { FaSolarPanel, FaLightbulb, FaGlobeAsia } from "react-icons/fa";
import "./About.css";

const ServiceCard = ({ icon, title, description, points }) => (
  <div className="card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    {points ? (
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Al-Fajar Solar</h1>
          <p>Years of Expertise in Renewable Energy</p>
        </div>
      </section>

      {/* Company History */}
      <section className="history">
        <h2>Company History</h2>
        <div className="timeline">
          {["2003", "2005", "2010", "2015", "2020"].map((year) => (
            <div className="event" key={year}>
              <span>{year}</span>
            </div>
          ))}
        </div>
        <div className="history-text">
          <p>
            Founded in 2003, Al-Fajar Solar has been at the forefront of
            delivering innovative solar solutions for homes and businesses. Over
            the years, we expanded from small residential projects to nationwide
            solar energy consultancy and large-scale installations.
          </p>
          <p>
            Our mission is to empower communities with clean, reliable, and
            affordable renewable energy solutions, contributing towards a
            sustainable future.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <ServiceCard
          icon={<FaSolarPanel size={40} color="#ffb703" />}
          title="Complete Solar Installation, Maintenance & Repair"
          points={[
            "Consultancy Services & Proposals",
            "Affordable Installations",
            "Maintenance & Repairs",
          ]}
        />

        <ServiceCard
          icon={<FaLightbulb size={40} color="#ffb703" />}
          title="Consultancy Services"
          description="We provide expert consultancy services for planning, designing, and implementing solar solutions tailored to your needs."
        />

        <ServiceCard
          icon={<FaGlobeAsia size={40} color="#ffb703" />}
          title="Mission & Vision"
          description="Our mission is to make renewable energy accessible and affordable for everyone. We envision a greener planet powered by sustainable energy sources."
        />
      </section>
    </div>
  );
};

export default About;

import React from "react";
import "./HomePage.css";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* ===== Business Card Section ===== */}
      <section className="business-card">
        <div className="card-content">
          <img
            src="/icons/logo.png"
            alt="Waleed Traders Logo"
            className="card-logo"
          />

          <h1 className="card-title">Waleed Traders</h1>
          <p className="card-subtitle">
            Empowering your world — Real Estate, Solar Energy, Electronics, and
            Supply Solutions.
          </p>

          <Link to="/solar-home" className="option-btn solar">
  ☀️ Solar
</Link>

            <Link to="/PropertyHome" className="option-btn real-estate">
              🏡 Real Estate
            </Link>

            <Link to="/PropertyHome" className="option-btn real-estate">
              🏡 Real Estate
            </Link>
          <button onClick={() => navigate("/supply")} className="supply-btn">
            🚛 Supply Chain
          </button>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="home-intro">
        <h2>Welcome to Waleed Traders</h2>
        <p>
          A multi-industry business group offering quality real estate services,
          renewable solar energy systems, reliable electronic appliances, and
          on-demand supply solutions.
        </p>
      </section>
    </div>
  );
};

export default HomePage;


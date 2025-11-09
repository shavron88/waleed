import React from "react";
import "./ElectroHome.css";
import FloatingRepairButton from "../../FloatingRepairButton";


export default function ElectroHome() {
  return (
    <div className="electro-home">
     

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>ElectroFix</span></h1>
          <p>Your one-stop shop for electronics & mobile repairs</p>
          <button className="cta">Shop Now</button>
        </div>
      </section>

      <section className="categories">
        <h2>Top Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/icons/laptp.png" alt="Laptps" />
            <h3>Laptops</h3>
          </div>
          <div className="category-card">
            <img src="/icons/mobile.png" alt="Mobiles" />
            <h3>Mobiles</h3>
          </div>
          <div className="category-card">
            <img src="/icons/assecories.png" alt="Accessories" />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      <FloatingRepairButton />
      
    </div>
  );
}

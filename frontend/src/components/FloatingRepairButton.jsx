import React from "react";
import "./FloatingRepairButton.css";

const FloatingRepairButton = () => {
  return (
    <div className="floating-repair-btn">
      <img src="/icons/repair.png" alt="Repair Icon" className="repair-icon" />
      <div className="repair-popup">
        <h4>Need Mobile Repair?</h4>
        <p>Tap below to book a technician instantly!</p>
        <button className="repair-btn">Book Now</button>
      </div>
    </div>
  );
};

export default FloatingRepairButton;

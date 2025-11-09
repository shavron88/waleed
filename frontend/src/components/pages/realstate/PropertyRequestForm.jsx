import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import "./PropertyRequestForm.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const API = `${BACKEND_URL}/api`;

const PropertyRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property_type: "",
    budget_min: "",
    budget_max: "",
    preferred_area: "",
    bedrooms: "",
    size_preference: "",
    additional_requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formData,
        budget_min: parseFloat(formData.budget_min),
        budget_max: parseFloat(formData.budget_max),
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
      };

      await axios.post(`${API}/property-requests`, submitData);
      toast.success("Request submitted successfully! We will contact you soon.");
      setSubmitted(true);
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="request-page">
        <div className="success-container">
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h1>Request Submitted Successfully!</h1>
            <p>
              Thank you for your interest. Our team will review your
              requirements and contact you soon with suitable property options.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="success-btn"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="request-page">
      <div className="request-hero">
        <div className="request-hero-content">
          <h1 className="page-title">
            🏡 Request Your Dream Property
          </h1>
          <p className="page-subtitle">
            Tell us what you're looking for and we'll find the perfect match
          </p>
        </div>
      </div>

      <div className="form-container">
        <div className="request-form-card">
          <form onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="form-section">
              <h2 className="section-title">Personal Information</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92-300-1234567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Property Requirements */}
            <div className="form-section">
              <h2 className="section-title">Property Requirements</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="property_type">Property Type *</label>
                  <select
                    id="property_type"
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="house">House</option>
                    <option value="plot">Plot</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_area">Preferred Area *</label>
                  <input
                    id="preferred_area"
                    name="preferred_area"
                    value={formData.preferred_area}
                    onChange={handleChange}
                    required
                    placeholder="e.g., DHA, Clifton, Bahria Town"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget_min">Minimum Budget (PKR) *</label>
                  <input
                    id="budget_min"
                    name="budget_min"
                    type="number"
                    value={formData.budget_min}
                    onChange={handleChange}
                    required
                    placeholder="5000000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget_max">Maximum Budget (PKR) *</label>
                  <input
                    id="budget_max"
                    name="budget_max"
                    type="number"
                    value={formData.budget_max}
                    onChange={handleChange}
                    required
                    placeholder="10000000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bedrooms">Number of Bedrooms</label>
                  <input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="size_preference">Size Preference *</label>
                  <input
                    id="size_preference"
                    name="size_preference"
                    value={formData.size_preference}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 5 Marla, 10 Marla, 1 Kanal"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additional_requirements">
                  Additional Requirements
                </label>
                <textarea
                  id="additional_requirements"
                  name="additional_requirements"
                  value={formData.additional_requirements}
                  onChange={handleChange}
                  placeholder="Any specific features or requirements you're looking for..."
                  rows="5"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyRequestForm;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, ArrowLeft, History } from "lucide-react";
import "./PropertyDetails.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [agent, setAgent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const fetchPropertyDetails = async () => {
    try {
      const propResponse = await axios.get(`${API}/properties/${id}`);
      setProperty(propResponse.data);
      setSelectedImage(0);

      const agentResponse = await axios.get(`${API}/agents/${propResponse.data.agent_id}`);
      setAgent(agentResponse.data);

      setLoading(false);
    } catch (error) {
      setError("Failed to load property details.");
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `Rs ${(price / 10000000).toFixed(2)} Crore`;
    } else if (price >= 100000) {
      return `Rs ${(price / 100000).toFixed(2)} Lacs`;
    }
    return `Rs ${price.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading property details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button className="full-width-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="error-container">
        <p>Property not found</p>
        <button className="full-width-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <div className="details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft /> Back
        </button>

        <div className="image-gallery">
          <div className="main-image">
            <img src={property.images[selectedImage]} alt={property.title} />
          </div>
          <div className="thumbnail-gallery">
            {property.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`View ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="details-grid">
          <div className="property-info-section">
            <div className="property-header">
              <h1 className="property-title">{property.title}</h1>
              <div className="property-price">{formatPrice(property.price)}</div>
            </div>

            <div className="property-location">
              <MapPin className="icon" />
              <span>{property.location}</span>
            </div>

            <div className="property-specs-detailed">
              <div className="spec-card">
                <Maximize className="spec-icon" />
                <div>
                  <div className="spec-label">Size</div>
                  <div className="spec-value">{property.size}</div>
                </div>
              </div>
              {property.bedrooms && (
                <div className="spec-card">
                  <Bed className="spec-icon" />
                  <div>
                    <div className="spec-label">Bedrooms</div>
                    <div className="spec-value">{property.bedrooms}</div>
                  </div>
                </div>
              )}
              {property.bathrooms && (
                <div className="spec-card">
                  <Bath className="spec-icon" />
                  <div>
                    <div className="spec-label">Bathrooms</div>
                    <div className="spec-value">{property.bathrooms}</div>
                  </div>
                </div>
              )}
              <div className="spec-card">
                <div className="type-icon">
                  {property.property_type.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="spec-label">Type</div>
                  <div className="spec-value">{property.property_type}</div>
                </div>
              </div>
            </div>

            <div className="property-description-section">
              <h2>Description</h2>
              <p>{property.description}</p>
            </div>

            <div className="property-features-section">
              <h2>Features</h2>
              <div className="features-grid">
                {property.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="property-history-section">
              <h2>
                <History className="section-icon" /> Property History
              </h2>
              <div className="history-timeline">
                {property.history.map((item, index) => (
                  <div key={index} className="history-item">
                    <div className="history-marker"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="map-section">
              <h2>Location on Map</h2>
              <div className="map-placeholder">
                <MapPin className="map-icon" />
                <p>Latitude: {property.latitude}</p>
                <p>Longitude: {property.longitude}</p>
                <p className="map-note">
                  Google Maps integration available with API key
                </p>
              </div>
            </div>
          </div>

          {agent && (
            <div className="agent-card-sidebar">
              <h3>Contact Agent</h3>
              <div className="agent-info">
                <img src={agent.photo} alt={agent.name} className="agent-photo" />
                <div className="agent-details">
                  <h4>{agent.name}</h4>
                  <p className="agent-specialization">{agent.specialization}</p>
                  <div className="agent-stats">
                    <span className="stat-badge">⭐ {agent.rating}</span>
                    <span className="stat-badge">
                      {agent.properties_sold} Sales
                    </span>
                  </div>
                </div>
              </div>
              <div className="agent-contact">
                <a href={`tel:${agent.phone}`} className="contact-btn">
                  <Phone className="contact-icon" />
                  {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="contact-btn">
                  <Mail className="contact-icon" />
                  {agent.email}
                </a>
              </div>
              <button
                onClick={() => navigate("/agents")}
                className="full-width-btn"
              >
                View All Agents
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;


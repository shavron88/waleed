import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `Rs ${(price / 10000000).toFixed(2)} Crore`;
    } else if (price >= 100000) {
      return `Rs ${(price / 100000).toFixed(2)} Lacs`;
    }
    return `Rs ${price.toLocaleString()}`;
  };

  return (
    <div className="property-card" data-testid={`property-card-${property.id}`}>
      <div
        className="property-image-container"
        onClick={() => navigate(`/property/${property.id}`)}
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="property-image"
        />
        <div className="property-type-badge">{property.property_type}</div>
      </div>

      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>

        <div className="property-location">
          <span className="icon">📍</span>
          <span>
            {property.area}, {property.city}
          </span>
        </div>

        <div className="property-specs">
          <div className="spec-item">
            <span className="spec-icon">📏</span>
            <span>{property.size}</span>
          </div>
          {property.bedrooms && (
            <div className="spec-item">
              <span className="spec-icon">🛏️</span>
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="spec-item">
              <span className="spec-icon">🛁</span>
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
        </div>

        <div className="property-footer">
          <div className="property-price">{formatPrice(property.price)}</div>
          <button
            onClick={() => navigate(`/property/${property.id}`)}
            className="view-details-btn"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;


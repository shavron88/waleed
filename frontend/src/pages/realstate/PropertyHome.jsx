import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";

import HeroSection from "../../components/HeroSection";
import "./PropertyHome.css";

const PropertyHome = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);

  // Load sample property data on first render
  useEffect(() => {
    const propertyData = [
      {
        id: 1,
        title: "Luxury Villa in DHA Phase 6",
        price: 55000000,
        area: "DHA Phase 6",
        city: "Karachi",
        size: "500 sq yards",
        bedrooms: 5,
        bathrooms: 6,
        property_type: "house",
        images: ["/images/villa.jpg"],
      },
      {
        id: 2,
        title: "Residential Plot in Bahria Town",
        price: 12000000,
        area: "Bahria Town",
        city: "Karachi",
        size: "250 sq yards",
        property_type: "plot",
        images: ["/images/plot.jpg"],
      },
      {
        id: 3,
        title: "Modern Apartment in Clifton",
        price: 25000000,
        area: "Clifton Block 4",
        city: "Karachi",
        size: "3 Bed Apartment",
        bedrooms: 3,
        bathrooms: 3,
        property_type: "apartment",
        images: ["/images/apartment.jpg"],
      },
      {
        id: 4,
        title: "Commercial Office in PECHS",
        price: 35000000,
        area: "PECHS Block 2",
        city: "Karachi",
        size: "1000 sq ft",
        property_type: "commercial",
        images: ["/images/office.jpg"],
      },
    ];

    setProperties(propertyData);
    setFilteredProperties(propertyData);
    setLoading(false);
  }, []);

  // Filter by type (house, plot, etc.)
  const handleFilter = (type) => {
    setSelectedType(type);
    if (type === "all") {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter((p) => p.property_type === type)
      );
    }
  };

  return (
    <div className="property-home">
      <HeroSection title="Find Your Dream Property" subtitle="Explore top houses, plots, apartments & commercial spaces across Pakistan." />

      <div className="container">
        {/* Filter Section */}
        <div className="filter-section">
          <h2 className="section-title">Explore Properties</h2>
          <div className="filter-buttons">
            {["all", "house", "plot", "apartment", "commercial"].map((type) => (
              <button
                key={type}
                onClick={() => handleFilter(type)}
                className={selectedType === type ? "active" : ""}
              >
                {type === "all"
                  ? "All Properties"
                  : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards */}
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading properties...</p>
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No properties found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyHome;

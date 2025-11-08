import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../../components/PropertyCard";
import "./NearbyProperties.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const NearbyProperties = () => {
  const [properties, setProperties] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${API}/properties`);
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      alert("Failed to load properties");
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          alert("Location detected successfully!");
        },
        () => {
          alert("Unable to get your location");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  // Calculate distance (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Sort by distance if location detected
  const sortedProperties = userLocation
    ? [...properties].sort((a, b) => {
        const distA = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          a.latitude,
          a.longitude
        );
        const distB = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          b.latitude,
          b.longitude
        );
        return distA - distB;
      })
    : properties;

  return (
    <div className="nearby-page">
      <div className="nearby-hero">
        <div className="nearby-hero-content">
          <h1 className="page-title" data-testid="nearby-title">
            <span className="title-icon">📍</span>
            Properties Near You
          </h1>
          <p className="page-subtitle">
            Find your dream property in your neighborhood
          </p>

          {!userLocation ? (
            <button
              data-testid="enable-location-btn"
              onClick={getLocation}
              className="location-btn"
            >
              <span className="btn-icon">🧭</span> Enable Location
            </button>
          ) : (
            <div className="location-badge" data-testid="location-enabled">
              <span className="location-icon">✅</span> Location Enabled
            </div>
          )}
        </div>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading-state" data-testid="loading-state">
            <div className="spinner"></div>
            <p>Loading nearby properties...</p>
          </div>
        ) : (
          <>
            <div className="properties-count" data-testid="properties-count">
              Showing {sortedProperties.length} properties
              {userLocation && " sorted by distance"}
            </div>
            <div className="properties-grid" data-testid="properties-grid">
              {sortedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NearbyProperties;

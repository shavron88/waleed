import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import "./AgentsPage.css";

const API = "https://your-backend-url.com/api"; // ✅ Replace with your actual backend endpoint

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await axios.get(`${API}/agents`);
      setAgents(response.data || []);
    } catch (error) {
      console.error("Error fetching agents:", error);
      toast.error("Failed to load agents");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="agents-page">
      {/* Hero Section */}
      <div className="agents-hero">
        <div className="agents-hero-content">
          <h1 className="page-title">Our Expert Agents</h1>
          <p className="page-subtitle">
            Meet our professional real estate consultants
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading agents...</p>
          </div>
        ) : agents.length === 0 ? (
          <p className="no-agents-text">No agents available right now.</p>
        ) : (
          <div className="agents-grid">
            {agents.map((agent) => (
              <div className="agent-card" key={agent.id || agent._id}>
                {/* Header */}
                <div className="agent-card-header">
                  <img
                    src={agent.photo || "/default-agent.jpg"}
                    alt={agent.name || "Agent"}
                    className="agent-photo"
                    onError={(e) =>
                      (e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png")
                    }
                  />
                  <div className="agent-rating">
                    <span className="star-icon">⭐</span>
                    <span>{agent.rating || "4.5"}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="agent-card-body">
                  <h3 className="agent-name">{agent.name || "Unnamed Agent"}</h3>
                  <p className="agent-specialization">
                    {agent.specialization || "Real Estate Expert"}
                  </p>

                  {/* About Section */}
                  <p className="agent-about">
                    {agent.about ||
                      "Experienced professional dedicated to helping clients find their dream homes with trust and transparency."}
                  </p>

                  {/* Stats */}
                  <div className="agent-stats">
                    <div className="stat-item">
                      <span className="stat-icon">🏆</span>
                      <div>
                        <div className="stat-value">
                          {agent.properties_sold || 0}
                        </div>
                        <div className="stat-label">Properties Sold</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <div className="experience-badge">
                        {agent.experience || "2 yrs"}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="agent-contact-section">
                    {agent.phone && (
                      <a href={`tel:${agent.phone}`} className="contact-link">
                        <span className="contact-icon">📞</span>
                        <span>{agent.phone}</span>
                      </a>
                    )}
                    {agent.email && (
                      <a href={`mailto:${agent.email}`} className="contact-link">
                        <span className="contact-icon">✉️</span>
                        <span>{agent.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;

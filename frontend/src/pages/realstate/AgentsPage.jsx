import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import "./AgentsPage.css";


const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await axios.get(`${API}/agents`);
      setAgents(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load agents");
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

      <div className="container">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading agents...</p>
          </div>
        ) : (
          <div className="agents-grid">
            {agents.map((agent) => (
              <div className="agent-card" key={agent.id}>
                {/* Header */}
                <div className="agent-card-header">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="agent-photo"
                  />
                  <div className="agent-rating">
                    <span className="star-icon">⭐</span>
                    <span>{agent.rating}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="agent-card-body">
                  <h3 className="agent-name">{agent.name}</h3>
                  <p className="agent-specialization">
                    {agent.specialization}
                  </p>

                  {/* Stats */}
                  <div className="agent-stats">
                    <div className="stat-item">
                      <span className="stat-icon">🏆</span>
                      <div>
                        <div className="stat-value">
                          {agent.properties_sold}
                        </div>
                        <div className="stat-label">Properties Sold</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <div className="experience-badge">
                        {agent.experience}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="agent-contact-section">
                    <a href={`tel:${agent.phone}`} className="contact-link">
                      <span className="contact-icon">📞</span>
                      <span>{agent.phone}</span>
                    </a>
                    <a href={`mailto:${agent.email}`} className="contact-link">
                      <span className="contact-icon">✉️</span>
                      <span>{agent.email}</span>
                    </a>
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

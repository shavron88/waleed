import React from "react";
import "./TestimonialsPage.css";
import { Link } from "react-router-dom";


const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    feedback:
      "The solar installation was smooth and professional. My electricity bill has reduced significantly. Highly recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    feedback:
      "Excellent service! The team explained everything clearly and completed the work on time.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Bilal Hussain",
    feedback:
      "Very satisfied with the solar system installation. Great quality panels and professional support.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Hina Malik",
    feedback:
      "Affordable and reliable solar solution. The after-sales service is also very good.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Usman Raza",
    feedback:
      "The installation team was very professional and cooperative. Everything was done neatly.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Ayesha Khan",
    feedback:
      "I’m impressed with their customer service. They guided me at every step of the project.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 7,
    name: "Fahad Siddiqui",
    feedback:
      "Great investment! My monthly electricity bill has dropped drastically. Worth every penny.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 8,
    name: "Nimra Aslam",
    feedback:
      "The solar panels are working perfectly. They delivered what they promised.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 9,
    name: "Imran Qureshi",
    feedback:
      "Professional staff, high quality products, and quick installation. 100% satisfied!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

function StarRating({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <p className="testimonials-subtitle">
        Hear from our satisfied customers who trusted us for their solar energy
        solutions.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <h3>{t.name}</h3>
            <StarRating rating={t.rating} />
            <p className="feedback">"{t.feedback}"</p>
          </div>
        ))}
      </div>
      <div className="cta-section">
        <h2>Want to be our next happy client?</h2>
        <Link to="/contact" className="cta-btn">Contact Us</Link>

      </div>
    </div>
  );
}



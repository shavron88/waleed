import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PropertyDetails from './pages/realstate/PropertyDetails';
import NearbyProperties from './pages/realstate/NearbyProperties';
import AgentsPage from './pages/realstate/AgentsPage';
import PropertyRequestForm from './pages/realstate/PropertyRequestForm';
import AboutPage from './pages/realstate/AboutPage';

// 🧭 Navbars for each section
import NavbarRealEstate from './components/navbar/NavbarRealEstate';
import NavbarSolar from './components/navbar/NavbarSolar';
import NavbarSupply from './components/navbar/NavbarSupply';

// 🌍 Common components
import Footer from './components/Footer';
import './App.css';

// 🏡 Real Estate pages
import PropertyHome from './pages/realstate/PropertyHome.jsx';

// ☀️ Solar pages
import SolarBookingPage from './pages/solar/SolarBookingPage';
import SolarHome from './pages/solar/SolarHome';
import TestimonialsPage from './pages/solar/TestimonialsPage';
import Contact from './pages/solar/Contact';

// ✅ Simple notification system
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `custom-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

window.showToast = showToast;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 🏠 Homepage — no navbar */}
          <Route path="/" element={<HomePage />} />

          {/* 🏡 Real Estate Section */}
          <Route path="/PropertyHome" element={<><NavbarRealEstate /><PropertyHome /></>} />
          <Route path="/agents" element={<><NavbarRealEstate /><AgentsPage /></>} />
          <Route path="/nearby" element={<><NavbarRealEstate /><NearbyProperties /></>} />
          <Route path="/request-property" element={<><NavbarRealEstate /><PropertyRequestForm /></>} />

          {/* ☀️ Solar Section */}
          <Route path="/solar-home" element={<><NavbarSolar /><SolarHome /></>} />
          <Route path="/solar-booking" element={<><NavbarSolar /><SolarBookingPage /></>} />
          <Route path="/testimonials" element={<><NavbarSolar /><TestimonialsPage /></>} />
          <Route path="/contact" element={<><NavbarSolar /><Contact /></>} />

          {/* 🚛 Supply Chain Section */}
          <Route path="/supply-home" element={<><NavbarSupply />{/* Add Supply components here later */}</>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

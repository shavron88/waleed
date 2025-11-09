import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🏠 Main homepage
import HomePage from "./components/pages/HomePage";

// 🏡 Real Estate Pages
import PropertyHome from "./components/pages/realstate/PropertyHome";
import PropertyDetails from "./components/pages/realstate/PropertyDetails";
import NearbyProperties from "./components/pages/realstate/NearbyProperties";
import AgentsPage from "./components/pages/realstate/AgentsPage";
import PropertyRequestForm from "./components/pages/realstate/PropertyRequestForm";
import AboutPage from "./components/pages/realstate/AboutPage";

// ☀️ Solar Pages
import SolarBookingPage from "./components/pages/solar/SolarBookingPage";
import SolarHome from "./components/pages/solar/SolarHome";
import TestimonialsPage from "./components/pages/solar/TestimonialsPage";
import Contact from "./components/pages/solar/Contact";

// ⚡ ElectroFix
import ElectroHome from "./components/pages/ElectroFix/ElectroHome";
import NavbarElectroFix from "./components/navbar/NavbarElectroFix";
import FloatingRepairButton from "./components/FloatingRepairButton";



// 🚛 Supply Chain (placeholder for now)
// import SupplyHome from "./components/pages/supply/SupplyHome"; // add later

// 🧭 Navbars
import NavbarRealEstate from "./components/navbar/NavbarRealEstate";
import NavbarSolar from "./components/navbar/NavbarSolar";
import NavbarSupply from "./components/navbar/NavbarSupply";

// 🌍 Common
import Footer from "./components/Footer";
import "./App.css";

// ✅ Simple notification system
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `custom-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
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
          <Route
            path="/PropertyHome"
            element={
              <>
                <NavbarRealEstate />
                <PropertyHome />
              </>
            }
          />
          <Route
            path="/agents"
            element={
              <>
                <NavbarRealEstate />
                <AgentsPage />
              </>
            }
          />
          <Route
            path="/nearby"
            element={
              <>
                <NavbarRealEstate />
                <NearbyProperties />
              </>
            }
          />
          <Route
            path="/request-property"
            element={
              <>
                <NavbarRealEstate />
                <PropertyRequestForm />
              </>
            }
          />
          <Route
            path="/about-realestate"
            element={
              <>
                <NavbarRealEstate />
                <AboutPage />
              </>
            }
          />

          {/* ☀️ Solar Section */}
          <Route
            path="/solar-home"
            element={
              <>
                <NavbarSolar />
                <SolarHome />
              </>
            }
          />
          <Route
            path="/solar-booking"
            element={
              <>
                <NavbarSolar />
                <SolarBookingPage />
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
                <NavbarSolar />
                <TestimonialsPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <NavbarSolar />
                <Contact />
              </>
            }
          />

          {/* ⚡ ElectroFix Section */}<Route
  
  path="/electrofix"
  element={
    <>
      <NavbarElectroFix />
      <ElectroHome />
      <Footer />
    </>
  }
/>



          {/* 🚛 Supply Section (to be added) */}
          <Route
            path="/supply-home"
            element={
              <>
                <NavbarSupply />
                {/* Add Supply components here later */}
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

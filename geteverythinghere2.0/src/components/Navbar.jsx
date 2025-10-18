import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#about";
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#services";
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Opens WhatsApp on mobile
      window.location.href =
        "https://wa.me/233547149360?text=Hello!%20I%20would%20like%20to%20inquire.";
    } else {
      // Opens Gmail on desktop
      window.location.href = "mailto:sbrayka19@gmail.com";
    }
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        <Link to="/">GetEverythingHere</Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#services" onClick={handleServicesClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li>
            <a href="mailto:sbrayka19@gmail.com" onClick={handleContactClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">GetEverythingHere</Link>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <a href="#about-us" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="mailto:sbrayka19@gmail.com"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(
                    navigator.userAgent
                  );
                  if (isMobile) {
                    window.location.href =
                      "https://wa.me/233547149360?text=Hello!%20I%20would%20like%20to%20inquire.";
                    e.preventDefault();
                  }
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

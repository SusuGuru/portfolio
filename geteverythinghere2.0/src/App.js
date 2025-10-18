import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import LandingPage from "./pages/LandingPage";
import StorePage from "./pages/StorePage";
import ProductDetailsPage from "./pages/ProductDetail";

// Styles
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global Navbar on all pages */}
        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:productName" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

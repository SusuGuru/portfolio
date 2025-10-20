import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../data/products";
import "../styles.css";

export default function ProductDetail() {
  const { productName } = useParams();

  // Find product by URL param
  const product = allProducts.find(
    (p) =>
      p.name.replace(/\s+/g, "-").toLowerCase() === productName.toLowerCase()
  );

  // Prepare images safely (always run hook first)
  const images =
    product && product.images && product.images.length > 0
      ? product.images
      : product
      ? [product.img]
      : [];

  const [mainImage, setMainImage] = useState(images[0] || "");

  // Handle missing product
  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  return (
    <div className="product-detail">
      {/* LEFT SIDE - IMAGES */}
      <div className="image-section">
        <img src={mainImage} alt={product.name} className="main-image" />
        <div className="thumbnail-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              className={`thumbnail ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="details-section">
        <Link to="/store" className="back-link">
          ← Back to Store
        </Link>
        <h2>{product.name}</h2>
        <h3 className="price">GHS {product.price}</h3>
        <p className="stock-status">✅ In Stock</p>

        <h4>Specifications</h4>
        <ul>
          {(product.specifications || []).map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>

        <h4>Color Options</h4>
        <div className="color-options">
          {(product.colors || []).map((color, index) => (
            <span
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        <h4>Storage</h4>
        <div className="storage-options">
          {["128GB", "256GB", "512GB", "1TB"].map((size, index) => (
            <button key={index} className="storage-btn">
              {size}
            </button>
          ))}
        </div>

        <h4>Condition</h4>
        <p>
          <strong>Condition:</strong> Brand New
        </p>
        <p>
          <strong>eSIM:</strong> Unlocked
        </p>

        <Link to="/contact" className="order-btn">
          Contact to Order
        </Link>
      </div>
    </div>
  );
}

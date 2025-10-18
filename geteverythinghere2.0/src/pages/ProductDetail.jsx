import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../data/products";
import "../styles.css";

export default function ProductDetailsPage() {
  const { productName } = useParams();

  // Find the product from URL
  const product = allProducts.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return (
      <div className="p-8 text-white text-center text-lg">
        Product not found!
      </div>
    );
  }

  // Handle images
  const images = product.images || [product.img];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-h-screen font-display text-gray-200 bg-gradient-to-br from-[#0f172a] to-[#007bff] flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-transparent border-b border-white/10 flex justify-between items-center p-4">
        <Link to="/store" className="text-white font-bold text-lg">
          ← Back to Store
        </Link>
        <h2 className="text-white font-bold text-lg">{product.name}</h2>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Images */}
          <div>
            {/* Main Image */}
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20">
              <div
                className="w-full h-full bg-center bg-cover transition-all duration-300"
                style={{ backgroundImage: `url('${mainImage}')` }}
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md overflow-hidden cursor-pointer ring-2 transition-all duration-300 ${
                      mainImage === img ? "ring-primary border-2 border-slate-900" : "ring-transparent"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <div
                      className="w-full h-full bg-center bg-cover"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col gap-6 bg-slate-900/50 backdrop-blur-md rounded-lg p-8 ring-1 ring-white/10 shadow-2xl">

            {/* Name, Price, Availability */}
            <div>
              <h1 className="text-4xl font-bold text-white">{product.name}</h1>
              <span className="text-2xl font-bold text-primary mt-2 block">
                {product.price}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    product.available ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="text-sm font-medium text-gray-300">{product.status}</span>
              </div>
            </div>

            {/* Specifications */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Specifications</h3>
              <ul className="mt-3 list-disc list-inside space-y-2 text-gray-300">
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Color Options */}
            {product.colors.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">Color Options</h3>
                <div className="mt-3 flex items-center gap-3">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-600 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Storage Options */}
            {product.storageOptions.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">Storage</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white">
                  {product.storageOptions.map((storage, i) => (
                    <div
                      key={i}
                      className="cursor-pointer text-center p-3 rounded-lg border border-slate-600 hover:bg-white/10"
                    >
                      {storage}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Button */}
            <div className="mt-6">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 shadow-lg transition-all duration-300">
                Contact to Order
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

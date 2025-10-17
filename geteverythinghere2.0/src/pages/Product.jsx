import React, { useState } from "react";
import "../styles.css"; // if you want to keep additional custom styles

export default function ProductDetailsPage() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDSk70GWEkA1cK1oNrNTenKE5NaSo2Er_5muqbSsxrfmoUw0bk94tR50JqTO6nUX8S85jAJuJO7a2dMmaVCxYMV48YFHp4EsIa9aELMAXyl5USFvNabF-Uk33QxYE8rsDCG5kkB5T84HpPJra7BuhuhO4nVTDQpT-Y7-2bcqLdW10BZh2tHXhg79DyN1buluX5dwTQGUMIp3aJkFKXTTAyA7b_u7lttsBzQo3VDq_XJ2g1FXSlvpiFKcIa3I8Xs00i-evjUdNCmvpZi",
    "https://via.placeholder.com/300x400",
    "https://via.placeholder.com/300x400",
    "https://via.placeholder.com/300x400",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#007bff] font-display text-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="text-primary size-7">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Gadget Pro Ghana</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Products
              </a>
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
                <svg
                  fill="currentColor"
                  height="20px"
                  width="20px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20">
              <div
                style={{ backgroundImage: `url('${mainImage}')` }}
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-300"
              ></div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer ring-2 transition-all duration-300 ${
                    mainImage === image
                      ? "ring-primary border-2 border-slate-900"
                      : "ring-transparent hover:ring-primary"
                  }`}
                >
                  <div
                    style={{ backgroundImage: `url('${image}')` }}
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6 bg-slate-900/50 backdrop-blur-md rounded-lg p-8 ring-1 ring-white/10 shadow-2xl">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                TechMaster X500
              </h1>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-primary">GHS 2,500</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block size-3 bg-green-500 rounded-full"></span>
                <p className="text-sm font-medium text-gray-300">In Stock</p>
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Specifications</h3>
              <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
                <li>6.7-inch Super Retina XDR display</li>
                <li>A16 Bionic chip with 5-core GPU</li>
                <li>48MP Main camera with advanced sensor</li>
                <li>Cinematic mode in 4K Dolby Vision</li>
                <li>Up to 29 hours of video playback</li>
              </ul>
            </div>

            {/* Colors */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Color Options</h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="size-8 rounded-full border-2 border-slate-600 bg-gray-800 ring-2 ring-offset-2 ring-offset-slate-900 ring-primary"></span>
                <span className="size-8 rounded-full border-2 border-slate-600 bg-purple-600"></span>
                <span className="size-8 rounded-full border-2 border-slate-600 bg-yellow-400"></span>
                <span className="size-8 rounded-full border-2 border-slate-600 bg-slate-200"></span>
              </div>
            </div>

            {/* Storage */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Storage</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white">
                <div className="cursor-pointer text-center p-3 rounded-lg border border-slate-600 bg-primary/20 text-primary font-semibold">
                  128GB
                </div>
                <div className="cursor-pointer text-center p-3 rounded-lg border border-slate-600 hover:bg-white/10">
                  256GB
                </div>
                <div className="cursor-pointer text-center p-3 rounded-lg border border-slate-600 hover:bg-white/10">
                  512GB
                </div>
                <div className="cursor-pointer text-center p-3 rounded-lg border border-slate-600 hover:bg-white/10">
                  1TB
                </div>
              </div>
            </div>

            {/* Condition */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Condition</h3>
              <div className="mt-3 space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold text-gray-200">Condition:</span>{" "}
                  Brand New
                </p>
                <p>
                  <span className="font-semibold text-gray-200">eSIM:</span>{" "}
                  Unlocked
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
                Contact to Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

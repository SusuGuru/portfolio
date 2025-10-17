import React, { useState } from "react";
import "../styles.css";

const allProducts = [
  {
    name: "iPhone 14 Pro Max",
    price: "GHC 13,000",
    status: "Available",
    category: "iPhones",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNLZJug1ucwo0fIJFx6W1oYpWFsJhrt0BPLzlnMUH2yFhR3TXkXWApDQki3HRqol2ogXY_-5ih4uxgDLp6nvVIV2b0ifS0sQ21iTMP3Nz6QpzSpqyB6aP0NjniXXuKQjELfeHSy2WWlB5BI9mLJgtvtWM2Akg-sfA_8zgsnalzX9jkZO06nF431yqZHF00Tu0b2UaAGh1vDadof_001NAw-YzgsJqPechhLVTvUKdi4390AxeoiPSSkuQ5eJb6OoVomcfMkM4VMiXT",
    available: true,
  },
  {
    name: "MacBook Pro 16-inch",
    price: "GHC 30,000",
    status: "Available",
    category: "Laptops",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnEuBF6DfIuGOcuDL9LTlxeXfFDHeWgKzxDJFLvq05iZfLxaAp5sXV3-3BnK1-YDzwK6M6QewWm7GWtZ8-LMy96JrZ2HxI4ttwpYYWFUavTun-cc0VqBAigxwANm6-qXS5kbcIdsLMSHHmaQOrAvL-MHWEBYxX_FDxUauoSsURHYl8mvvUD3H240r-vyVr2TL10ReJZW-qRZworXuPu672Lil7QTvPyN7r-6ku8tzcxbaWnATgqtCY46YWxEHoLA86fBOSA4Q-ftGM",
    available: true,
  },
  {
    name: "AirPods Pro",
    price: "GHC 2,500",
    status: "Available",
    category: "Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaS23kBbyTOIWpOnIxfz3CE0WAFKVG17Fop5U5OjICz1SGxkpjLepeU_LtJG14tmhMnFh6O0TJA5pahmLnK-q9Pe6zqRbrj_lm9-tvPpKHODuA5_zR0WDGsL8CqdMfsoLnNuv4HWUzg30VBVvXqPmnQwvT3ptwCJp3S3RwDoFxvkYckP0lAfc2CZ8Glo2hPmisN6FfFQ-gE6jGOzEdldVg0WveWjuyjvU_fS-xRXgC9cwF7yCkQlr8U7-ScehhygQ_Jk1bhn6IvEc8",
    available: true,
  },
  {
    name: "PlayStation 5",
    price: "GHC 5,800",
    status: "Out of Stock",
    category: "Consoles",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GeMXExS-ZBgoSra7qnpXByOH2MMgk0V_2T2VbSBh0NUdtMgsFV_Vmqkw9CQfIJ6VBhw4ElS3tjse7dXrBcJXDdjru2w1BZKo34DYTn1BTlxLEc6L--AVScRXiNm2GOM4KACAHgJlzA9nUIzTHzCfEwIWMW-YJzH72sgGznBs4IN4n203kNj_Yin0GDa5VP49OjBPLJneiMJobnARC2tFPyy3SYXrsucTe29um5mFI8HyHZvFRZbr61Q84Jv2XTEeey-UxIV8mHQu",
    available: false,
  },
  {
    name: "Samsung QLED TV",
    price: "GHC 17,500",
    status: "Available",
    category: "TVs",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU-mjn1Q8OjfPvR4IMyExM60Izz7GcYMPZQI-x6uCIvOxt4FlHH0SFA6IWKsK_F3r0RKlOG-bKauCaKi3uXSaWXMYcgq8IxPSkCwsxtW-oFYD71x7buB4RUqJhSSSdy6wSa6XVZf3A6SSjGooZGp6iZ_xd8vw2sBN5_7AdxfwRqW5uopp5HwF9kSK-II0C-NYq99Pu-un-S_3X9zR9GF8FaqHeV3YWwQm5_n8Bxkigfckrej5CkF-poFaRsIq-hrKaWOICfYKDjJTC",
    available: true,
  },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "iPhones", "Laptops", "Accessories", "Consoles", "TVs"];
  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="store-page">
      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.map((p, i) => (
          <div key={i} className="product-card">
            <div className="image-container">
              <img src={p.img} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <div className="status">
              <span className={`dot ${p.available ? "green" : "red"}`}></span>
              <span className={p.available ? "green-text" : "grey-text"}>
                {p.status}
              </span>
            </div>
            <p className={`price ${p.available ? "price-green" : "price-grey"}`}>
              {p.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

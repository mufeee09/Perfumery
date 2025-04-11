import React, { useState } from "react";
import ProductCard from "./ProductCard";
import '../styles/Product.css';

import img1 from "../images/641460.jpg";
import img2 from "../images/OIP.jpeg"

const products = [
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    price: "₹129.99",
    discount: "₹300.00",
    Quantity: "50ml",
    image: img1,
    whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Midnight%20Rose%20perfume",
    instagram: "https://instagram.com/rolscheventon.official"
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    price: "₹89.99",
    discount: "₹190.00",
    Quantity: "120ml",
    image: img2,
    whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Ocean%20Breeze%20perfume",
    instagram: "https://instagram.com/rolscheventon.official"
  },
  {
    name: "Golden Amber",
    description: "Warm amber mixed with exotic spices",
    price: "₹149.99",
    discount: "₹360.00",
    Quantity: "80ml",
    image: "Logo/641460.jpg",
    whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Golden%20Amber%20perfume",
    instagram: "https://instagram.com/rolscheventon.official"
  },
  {
    name: "Pure Jasmine",
    description: "Delicate jasmine with subtle woody notes",
    price: "₹109.99",
    discount: "₹400.00",
    Quantity: "100ml",
    image: "Logo/photo-1594035910387-fea47794261f.jpeg",
    whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Pure%20Jasmine%20perfume",
    instagram: "https://instagram.com/rolscheventon.official"
  }
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" className="products">
      <h2>Our Collection</h2>
      <div className="field">
      <input
        type="text"
        placeholder="Search Products..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;

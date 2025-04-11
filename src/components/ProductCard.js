import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price-info">
          <span className="price">{product.price}</span>
          <span className="discount">{product.discount}</span>
        </div>
        <span className="quantity">{product.Quantity}</span>
        <div className="order-buttons">
          <a href={product.whatsapp} target="_blank" className="order-btn whatsapp" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Order via WhatsApp
          </a>
          <a href={product.instagram} target="_blank" className="order-btn instagram" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Order via Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// import React from "react";
// import "../styles/ProductCard.css";

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} className="product-image" />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <div className="price-info">
//           <span className="price">{product.price}</span>
//           <span className="discount">{product.discount}</span>
//         </div>
//         <span className="quantity">{product.Quantity}</span>
//         <div className="order-buttons">
//           <a href={product.whatsapp} target="_blank" className="order-btn whatsapp" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp"></i> Order via WhatsApp
//           </a>
//           <a href={product.instagram} target="_blank" className="order-btn instagram" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i> Order via Instagram
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

// import React from "react";
// import "../styles/ProductCard.css";

// function ProductCard({ product }) {

//   const handlePayment = async () => {
//     const res = await fetch("/api/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: product.price }),
//     });

//     const data = await res.json();

//     if (!data || !data.id) {
//       alert("Failed to create payment order");
//       return;
//     }

//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//       amount: data.amount,
//       currency: data.currency,
//       order_id: data.id,
//       name: "Rolsch Eventon",
//       description: product.name,
//       image: product.image,
//       handler: async (response) => {
//         const verifyRes = await fetch("/api/verify-payment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(response),
//         });

//         const verifyData = await verifyRes.json();
//         if (verifyData.success) {
//           alert("✅ Payment successful!");
//         } else {
//           alert("❌ Payment verification failed!");
//         }
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} className="product-image" />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <div className="price-info">
//           <span className="price">₹{product.price}</span>
//         </div>
//         <button className="order-btn paynow" onClick={handlePayment}>
//           💳 Pay Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React, { useState } from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePayment = async () => {
    try {
      // Use discount price if available
      const amountToPay = (product.discountPrice || product.price) * 100; // Razorpay expects paise

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountToPay }),
      });

      const data = await res.json();

      if (!data || !data.id) {
        alert("Failed to create payment order");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Rolsch Eventon",
        description: product.name,
        image: product.image,
        handler: async (response) => {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("✅ Payment successful!");
          } else {
            alert("❌ Payment verification failed!");
          }
        },
        theme: { color: "#667eea" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong during payment!");
    }
  };

  return (
    <div 
      className="modern-product-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`modern-product-card ${isHovered ? 'card-hovered' : ''}`}>
        <div className="modern-image-container">
          <img 
            src={product.image || "/placeholder.png"} 
            alt={product.name} 
            className="modern-product-image"
          />
          <div className="modern-image-overlay"></div>
        </div>
        
        <div className="modern-product-content">
          <div className="modern-product-header">
            <h3 className="modern-product-title">{product.name}</h3>
            {/* <div className="modern-badge">New</div> */}
          </div>
          
          <p className="modern-product-description">{product.description}</p>
          
          <div className="modern-product-footer">
            <div className="modern-price-section">
              <span className="modern-price-label">Price</span>
              {product.discountPrice ? (
                <span className="modern-price-amount">
                  <span style={{ textDecoration: "line-through", color: "#999", marginRight: "0.5rem" }}>
                    ₹{product.price}
                  </span>
                  ₹{product.discountPrice}
                </span>
              ) : (
                <span className="modern-price-amount">₹{product.price}</span>
              )}
            </div>
            
            <button 
              className="modern-pay-button"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

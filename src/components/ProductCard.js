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

import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: product.price }),
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
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price-info">
          <span className="price">₹{product.price}</span>
        </div>
        <button className="order-btn paynow" onClick={handlePayment}>
          💳 Pay Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

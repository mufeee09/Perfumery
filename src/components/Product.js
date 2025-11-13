// import React, { useState } from "react";
// import "../styles/Product.css";
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: "129",
//     image: img1,
//     volume: ["30ml", " 50ml"],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     price: "89",
//     image: img2,
//     volume: "", // Missing
//   },
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: "129",
//     image: img1,
//     volume: "30ml",
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     price: "89",
//     image: img2,
//     volume: "50ml",
//   },
// ];

// function ProductCard({ product, handlePayNow }) {
//   // Always render a span for volume (even if empty)
//   const volumeDisplay = (
//     <span className="product-volume">{product.volume || ""}</span>
//   );

//   return (
//     <div className="product-card">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="product-image"
//       />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         {volumeDisplay}
//         <div className="price-info">
//           <span className="price">₹{product.price}</span>
//         </div>
//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow(product)}
//         >
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handlePayNow = async (product) => {
//     const amountInPaise = parseFloat(product.price) * 100;
//     const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

//     if (!window.Razorpay) {
//       alert(
//         "Razorpay script not loaded. Please ensure it's included in index.html."
//       );
//       return;
//     }

//     if (!keyId) {
//       alert(
//         "Razorpay Key ID is missing. Check your .env file and ensure it is prefixed with REACT_APP_"
//       );
//       return;
//     }

//     try {
//       const options = {
//         key: keyId,
//         amount: amountInPaise,
//         currency: "INR",
//         name: "Rolsch Eventon",
//         description: `Purchase of ${product.name}`,
//         image: "/favicon.ico",
//         handler: function (response) {
//           alert(
//             `Payment initiated successfully! Payment ID: ${response.razorpay_payment_id}`
//           );
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#F37254" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Error opening Razorpay checkout:", error);
//       alert("An error occurred while initiating payment.");
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section id="products" className="products">
//       <h2>Our Collection</h2>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="Search Products..."
//           className="search-box"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="product-grid">
//         {filteredProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             product={product}
//             handlePayNow={handlePayNow}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;



import React, { useState } from "react";
import "../styles/Product.css";
import img1 from "../images/641460.jpg";
import img2 from "../images/OIP.jpeg";

const products = [
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    image: img1,
    volumeOptions: [
      { label: "30ml", price: "129" },
      { label: "50ml", price: "199" },
    ],
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    image: img2,
    volumeOptions: [
      { label: "30ml", price: "89" },
      { label: "50ml", price: "149" },
    ],
  },
  {
    name: "Amber Noir",
    description: "Warm amber essence with woody undertones",
    image: img1,
    volumeOptions: [{ label: "30ml", price: "119" }],
  },
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    image: img1,
    volumeOptions: [
      { label: "30ml", price: "129" },
      { label: "50ml", price: "199" },
    ],
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    image: img2,
    volumeOptions: [
      { label: "30ml", price: "89" },
      { label: "50ml", price: "149" },
    ],
  },
  {
    name: "Amber Noir",
    description: "Warm amber essence with woody undertones",
    image: img1,
    volumeOptions: [{ label: "30ml", price: "119" }],
  },
];

function ProductCard({ product, handlePayNow }) {
  const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        {/* Volume selector */}
        <div className="volume-options">
          {product.volumeOptions.map((vol, idx) => (
            <button
              key={idx}
              className={`volume-btn ${
                selectedVolume.label === vol.label ? "active" : ""
              }`}
              onClick={() => setSelectedVolume(vol)}
            >
              {vol.label}
            </button>
          ))}
        </div>

        <div className="price-info">
          <span className="price">₹{selectedVolume.price}</span>
        </div>

        <button
          className="order-btn paynow"
          onClick={() => handlePayNow({ ...product, ...selectedVolume })}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const handlePayNow = async (product) => {
    const amountInPaise = parseFloat(product.price) * 100;
    const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

    if (!window.Razorpay) {
      alert("Razorpay script not loaded.");
      return;
    }

    const options = {
      key: keyId,
      amount: amountInPaise,
      currency: "INR",
      name: "Rolsch Eventon",
      description: `Purchase of ${product.name} (${product.label})`,
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#F37254" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
        ))}
      </div>
    </section>
  );
}

export default Products;

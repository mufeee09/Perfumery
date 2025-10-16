// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import '../styles/Product.css';

// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg"

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: "₹129.99",
//     discount: "₹300.00",
//     Quantity: "50ml",
//     image: img1,
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Midnight%20Rose%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     price: "₹89.99",
//     discount: "₹190.00",
//     Quantity: "120ml",
//     image: img2,
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Ocean%20Breeze%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Golden Amber",
//     description: "Warm amber mixed with exotic spices",
//     price: "₹149.99",
//     discount: "₹360.00",
//     Quantity: "80ml",
//     image: "Logo/641460.jpg",
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Golden%20Amber%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Pure Jasmine",
//     description: "Delicate jasmine with subtle woody notes",
//     price: "₹109.99",
//     discount: "₹400.00",
//     Quantity: "100ml",
//     image: "Logo/photo-1594035910387-fea47794261f.jpeg",
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Pure%20Jasmine%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   }
// ];

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section id="products" className="products">
//       <h2>Our Collection</h2>
//       <div className="field">
//       <input
//         type="text"
//         placeholder="Search Products..."
//         className="search-box"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       </div>
//       <div className="product-grid">
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import '../styles/Product.css';


// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import '../styles/Product.css';
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: 129, // number in ₹
//     image: img1,
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     price: 89,
//     image: img2,
//   },
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: 129,
//     image: img1,
//   },
//   // {
//   //   name: "Ocean Breeze",
//   //   description: "Fresh marine notes with citrus undertones",
//   //   price: 89,
//   //   image: img2,
//   // },
//   // {
//   //   name: "Ocean Breeze",
//   //   description: "Fresh marine notes with citrus undertones",
//   //   price: 89,
//   //   image: img2,
//   // },
//   // {
//   //   name: "Midnight Rose",
//   //   description: "A seductive blend of dark rose and vanilla",
//   //   price: 129,
//   //   image: img1,
//   // },
//   // {
//   //   name: "Ocean Breeze",
//   //   description: "Fresh marine notes with citrus undertones",
//   //   price: 89,
//   //   image: img2,
//   // }
// ];

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = products.filter(product =>
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
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


import React, { useState } from "react";
import ProductCard from "./ProductCard";
import '../styles/Product.css';

// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg"

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     price: "₹129.99",
//     discount: "₹300.00",
//     Quantity: "50ml",
//     image: img1,
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Midnight%20Rose%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     price: "₹89.99",
//     discount: "₹190.00",
//     Quantity: "120ml",
//     image: img2,
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Ocean%20Breeze%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Golden Amber",
//     description: "Warm amber mixed with exotic spices",
//     price: "₹149.99",
//     discount: "₹360.00",
//     Quantity: "80ml",
//     image: "Logo/641460.jpg",
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Golden%20Amber%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   },
//   {
//     name: "Pure Jasmine",
//     description: "Delicate jasmine with subtle woody notes",
//     price: "₹109.99",
//     discount: "₹400.00",
//     Quantity: "100ml",
//     image: "Logo/photo-1594035910387-fea47794261f.jpeg",
//     whatsapp: "https://wa.me/916360751727?text=I'm%20interested%20in%20buying%20Pure%20Jasmine%20perfume",
//     instagram: "https://instagram.com/rolscheventon.official"
//   }
// ];

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section id="products" className="products">
//       <h2>Our Collection</h2>
//       <div className="field">
//       <input
//         type="text"
//         placeholder="Search Products..."
//         className="search-box"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       </div>
//       <div className="product-grid">
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import '../styles/Product.css';
import img1 from "../images/641460.jpg";
import img2 from "../images/OIP.jpeg";

const products = [
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    price: "129", // remove ₹ and make it number (Razorpay expects amount in paise)
    image: img1,
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    price: "89",
    image: img2,
  },
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    price: "129", // remove ₹ and make it number (Razorpay expects amount in paise)
    image: img1,
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    price: "89",
    image: img2,
  }
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const handlePayNow = async (product) => {
    const amount = product.price * 100; // Razorpay uses paise

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount,
      currency: "INR",
      name: "Rolsch Eventon",
      description: `Purchase of ${product.name}`,
      image: "/favicon.ico",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const filteredProducts = products.filter(product =>
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
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button className="pay-btn" onClick={() => handlePayNow(product)}>
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

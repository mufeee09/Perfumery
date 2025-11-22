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


// Before Lazy Loading
// import React, { useState } from "react";
// import "../styles/Product.css";
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     image: img1,
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     image: img2,
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     image: img1,
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     image: img1,
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     image: img2,
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     image: img1,
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
// ];

// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} className="product-image" />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>

//         {/* Volume selector */}
//         <div className="volume-options">
//           {product.volumeOptions.map((vol, idx) => (
//             <button
//               key={idx}
//               className={`volume-btn ${
//                 selectedVolume.label === vol.label ? "active" : ""
//               }`}
//               onClick={() => setSelectedVolume(vol)}
//             >
//               {vol.label}
//             </button>
//           ))}
//         </div>

//         <div className="price-info">
//           <span className="price">₹{selectedVolume.price}</span>
//         </div>

//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow({ ...product, ...selectedVolume })}
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
//       alert("Razorpay script not loaded.");
//       return;
//     }

//     const options = {
//       key: keyId,
//       amount: amountInPaise,
//       currency: "INR",
//       name: "Rolsch Eventon",
//       description: `Purchase of ${product.name} (${product.label})`,
//       handler: function (response) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//           <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// // After lazy load
// import React, { useState, useEffect } from "react";
// import "../styles/Product.css";
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";

// // === PRELOAD FUNCTION (NEW) ===
// const preloadImage = (src) => {
//   const img = new Image();
//   img.src = src;
// };

// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     image: img1,
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     image: img2,
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     image: img1,
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     image: img1,
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     image: img2,
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     image: img1,
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
// ];

// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       {/* === UPDATED: LAZY LOADING + CACHE PRELOADED === */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="product-image"
//         loading="lazy"
//       />

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>

//         <div className="volume-options">
//           {product.volumeOptions.map((vol, idx) => (
//             <button
//               key={idx}
//               className={`volume-btn ${
//                 selectedVolume.label === vol.label ? "active" : ""
//               }`}
//               onClick={() => setSelectedVolume(vol)}
//             >
//               {vol.label}
//             </button>
//           ))}
//         </div>

//         <div className="price-info">
//           <span className="price">₹{selectedVolume.price}</span>
//         </div>

//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow({ ...product, ...selectedVolume })}
//         >
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // === NEW: PRELOAD IMAGES BEFORE USER REACHES PRODUCT SECTION ===
//   useEffect(() => {
//     products.forEach((p) => preloadImage(p.image));
//   }, []);

//   const handlePayNow = async (product) => {
//     const amountInPaise = parseFloat(product.price) * 100;
//     const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

//     if (!window.Razorpay) {
//       alert("Razorpay script not loaded.");
//       return;
//     }

//     const options = {
//       key: keyId,
//       amount: amountInPaise,
//       currency: "INR",
//       name: "Rolsch Eventon",
//       description: `Purchase of ${product.name} (${product.label})`,
//       handler: function (response) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//           <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "../styles/Product.css";
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";
// import img3 from "../images/pexels-valeriya-965993.jpg"; // Imported a new image for the slide show
// import img4 from "../images/pexels-valeriya-2.jpg"; // Imported a new image for the slide show

// // === PRELOAD FUNCTION (UPDATED) ===
// const preloadImage = (src) => {
//   const img = new Image();
//   img.src = src;
// };

// // === UPDATED PRODUCT DATA STRUCTURE ===
// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     // Changed 'image' to 'images' array
//     images: [img1, img3, img4], 
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img2, img4, img1],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     images: [img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
//   // Duplicates updated for consistency
//   {
//     name: "Midnight Rose (v2)",
//     description: "A seductive blend of dark rose and vanilla",
//     images: [img4, img2],
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze (v2)",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img1, img4],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir (v2)",
//     description: "Warm amber essence with woody undertones",
//     images: [img2, img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
// ];

// // === NEW: Image Slider Component ===
// function ImageSlider({ images, altText, slideInterval = 3500 }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const totalSlides = images.length;
//   const isMultipleImages = totalSlides > 1;

//   const resetTimeout = useCallback(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }, []);

//   const goToNextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
//   }, [totalSlides]);

//   // Automatic slide effect
//   useEffect(() => {
//     if (!isMultipleImages) return;

//     resetTimeout();
//     timeoutRef.current = setTimeout(goToNextSlide, slideInterval);

//     return () => resetTimeout();
//   }, [currentIndex, goToNextSlide, resetTimeout, slideInterval, isMultipleImages]);

//   // Manual navigation
//   const goToSlide = (index) => {
//     resetTimeout();
//     setCurrentIndex(index);
//   };

//   // Preload next image (optional)
//   useEffect(() => {
//     if (isMultipleImages) {
//         // Preload the very next image in the sequence
//         const nextIndex = (currentIndex + 1) % totalSlides;
//         preloadImage(images[nextIndex]);
//     }
//   }, [currentIndex, images, totalSlides, isMultipleImages]);


//   return (
//     <div className="image-slider-container" ref={sliderRef}>
//       <div 
//         className="image-slider-track"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`${altText} - Photo ${index + 1}`}
//             className="product-image"
//             loading="lazy"
//           />
//         ))}
//       </div>

//       {/* Navigation Dots (Only if multiple images exist) */}
//       {isMultipleImages && (
//         <div className="slider-dots">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// // === END Image Slider Component ===


// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       {/* === REPLACED: ImageSlider component used here === */}
//       <ImageSlider 
//         images={product.images} 
//         altText={product.name} 
//         slideInterval={4000} // Set auto-slide interval to 4 seconds
//       />
//       {/* ============================================== */}

//       <div className="product-info">
//         {/* ... (rest of the product info remains the same) ... */}
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>

//         <div className="volume-options">
//           {product.volumeOptions.map((vol, idx) => (
//             <button
//               key={idx}
//               className={`volume-btn ${
//                 selectedVolume.label === vol.label ? "active" : ""
//               }`}
//               onClick={() => setSelectedVolume(vol)}
//             >
//               {vol.label}
//             </button>
//           ))}
//         </div>

//         <div className="price-info">
//           <span className="price">₹{selectedVolume.price}</span>
//         </div>

//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow({ ...product, ...selectedVolume })}
//         >
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // === UPDATED: PRELOAD ALL UNIQUE IMAGES in the new 'images' arrays ===
//   useEffect(() => {
//     const uniqueImages = new Set();
//     products.forEach(p => p.images.forEach(img => uniqueImages.add(img)));
//     uniqueImages.forEach(preloadImage);
//   }, []);

//   const handlePayNow = async (product) => {
//     const amountInPaise = parseFloat(product.price) * 100;
//     const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

//     if (!window.Razorpay) {
//       alert("Razorpay script not loaded.");
//       return;
//     }

//     const options = {
//       key: keyId,
//       amount: amountInPaise,
//       currency: "INR",
//       name: "Rolsch Eventon",
//       description: `Purchase of ${product.name} (${product.label})`,
//       handler: function (response) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//           <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "../styles/Product.css";
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";
// import img3 from "../images/pexels-valeriya-965993.jpg"; // Imported a new image for the slide show
// import img4 from "../images/pexels-valeriya-2.jpg"; // Imported a new image for the slide show

// // === PRELOAD FUNCTION (UPDATED) ===
// const preloadImage = (src) => {
//   const img = new Image();
//   img.src = src;
// };

// // === UPDATED PRODUCT DATA STRUCTURE (UNCHANGED) ===
// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     // Changed 'image' to 'images' array
//     images: [img1, img3, img4], 
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img2, img4, img1],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     images: [img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
//   // Duplicates updated for consistency
//   {
//     name: "Midnight Rose (v2)",
//     description: "A seductive blend of dark rose and vanilla",
//     images: [img4, img2],
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze (v2)",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img1, img4],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir (v2)",
//     description: "Warm amber essence with woody undertones",
//     images: [img2, img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
// ];

// // === NEW: Image Slider Component (UPDATED FOR INFINITE LOOP) ===
// function ImageSlider({ images, altText, slideInterval = 3500 }) {
//   // Start at index 1 to show the first real image (index 0 is the clone of the last image)
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(true);
  
//   const timeoutRef = useRef(null);

//   const totalRealSlides = images.length;
//   const isMultipleImages = totalRealSlides > 1;

//   // The actual slides array including the clones
//   const slides = isMultipleImages 
//     ? [images[totalRealSlides - 1], ...images, images[0]] 
//     : images;

//   const totalSlidesWithClones = slides.length;

//   const resetTimeout = useCallback(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }, []);

//   const goToNextSlide = useCallback(() => {
//     // If we're at the cloned first slide, do nothing until transition end handles the jump
//     if (currentIndex === totalSlidesWithClones - 1) return;
    
//     // Set transition back on before moving to next slide
//     setIsTransitioning(true); 
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   }, [currentIndex, totalSlidesWithClones]);

//   // Automatic slide effect
//   useEffect(() => {
//     if (!isMultipleImages) return;

//     resetTimeout();
//     // Only set timeout if we are not on the last cloned slide
//     if (currentIndex < totalSlidesWithClones - 1) {
//       timeoutRef.current = setTimeout(goToNextSlide, slideInterval);
//     }

//     return () => resetTimeout();
//   }, [currentIndex, goToNextSlide, resetTimeout, slideInterval, isMultipleImages, totalSlidesWithClones]);


//   // Handler for when CSS transition finishes
//   const handleTransitionEnd = useCallback(() => {
//     if (!isMultipleImages) return;

//     if (currentIndex === totalSlidesWithClones - 1) {
//       // If we land on the cloned first slide, jump instantly to the real first slide (index 1)
//       setIsTransitioning(false); 
//       setCurrentIndex(1);
//     } else if (currentIndex === 0) {
//       // If we land on the cloned last slide (via manual prev navigation), jump instantly to the real last slide
//       setIsTransitioning(false);
//       setCurrentIndex(totalRealSlides);
//     }
//   }, [currentIndex, totalRealSlides, totalSlidesWithClones, isMultipleImages]);


//   // Manual navigation function
//   const goToSlide = (slideIndex) => {
//     resetTimeout();
//     setIsTransitioning(true); // Ensure transition is on for manual movement
//     // Slide index refers to the real image index (0 to totalRealSlides-1).
//     // The current index in the slides array is 1 (real first) to totalRealSlides (real last).
//     setCurrentIndex(slideIndex + 1);
//   };
  
//   // Preload next image
//   useEffect(() => {
//     if (isMultipleImages && currentIndex < totalSlidesWithClones - 1) {
//         // Preload the very next image in the sequence
//         preloadImage(slides[currentIndex + 1]);
//     }
//   }, [currentIndex, slides, totalSlidesWithClones, isMultipleImages]);


//   return (
//     <div className="image-slider-container" >
//       <div 
//         className="image-slider-track"
//         // Apply transform based on the current index
//         style={{ 
//           transform: `translateX(-${currentIndex * 100}%)`,
//           // Conditionally apply the transition for the "instant jump"
//           transition: isTransitioning ? `transform ${slideInterval * 0.25}ms ease-in-out` : 'none'
//         }}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {slides.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             // Use the real index for alt text (handles clones)
//             alt={`${altText} - Photo ${isMultipleImages ? ((index - 1 + totalRealSlides) % totalRealSlides) + 1 : index + 1}`}
//             className="product-image"
//             loading="lazy"
//           />
//         ))}
//       </div>

//       {/* Navigation Dots (Only map over real images) */}
//       {isMultipleImages && (
//         <div className="slider-dots">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               // The dot is active if the current index is the real image index + 1
//               className={`dot ${index + 1 === currentIndex || (currentIndex === totalSlidesWithClones - 1 && index === 0) ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// // === END Image Slider Component ===


// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       {/* === REPLACED: ImageSlider component used here === */}
//       <ImageSlider 
//         images={product.images} 
//         altText={product.name} 
//         slideInterval={4000} // Set auto-slide interval to 4 seconds
//       />
//       {/* ============================================== */}

//       <div className="product-info">
//         {/* ... (rest of the product info remains the same) ... */}
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>

//         <div className="volume-options">
//           {product.volumeOptions.map((vol, idx) => (
//             <button
//               key={idx}
//               className={`volume-btn ${
//                 selectedVolume.label === vol.label ? "active" : ""
//               }`}
//               onClick={() => setSelectedVolume(vol)}
//             >
//               {vol.label}
//             </button>
//           ))}
//         </div>

//         <div className="price-info">
//           <span className="price">₹{selectedVolume.price}</span>
//         </div>

//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow({ ...product, ...selectedVolume })}
//         >
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // === UPDATED: PRELOAD ALL UNIQUE IMAGES in the new 'images' arrays (UNCHANGED) ===
//   useEffect(() => {
//     const uniqueImages = new Set();
//     products.forEach(p => p.images.forEach(img => uniqueImages.add(img)));
//     uniqueImages.forEach(preloadImage);
//   }, []);

//   const handlePayNow = async (product) => {
//     const amountInPaise = parseFloat(product.price) * 100;
//     const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

//     if (!window.Razorpay) {
//       alert("Razorpay script not loaded.");
//       return;
//     }

//     const options = {
//       key: keyId,
//       amount: amountInPaise,
//       currency: "INR",
//       name: "Rolsch Eventon",
//       description: `Purchase of ${product.name} (${product.label})`,
//       handler: function (response) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//           <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;


// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "../styles/Product.css";
// // Assuming these paths are correct in your project structure
// import img1 from "../images/641460.jpg";
// import img2 from "../images/OIP.jpeg";
// import img3 from "../images/pexels-valeriya-965993.jpg";
// import img4 from "../images/pexels-valeriya-2.jpg";

// // === PRELOAD FUNCTION (KEPT FOR FALLBACK) ===
// const preloadImage = (src) => {
//   const img = new Image();
//   img.src = src;
// };

// // === PRODUCT DATA STRUCTURE (UNCHANGED) ===
// const products = [
//   {
//     name: "Midnight Rose",
//     description: "A seductive blend of dark rose and vanilla",
//     images: [img1, img3, img4], 
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img2, img4, img1],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir",
//     description: "Warm amber essence with woody undertones",
//     images: [img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
//   {
//     name: "Midnight Rose (v2)",
//     description: "A seductive blend of dark rose and vanilla",
//     images: [img4, img2],
//     volumeOptions: [
//       { label: "30ml", price: "129" },
//       { label: "50ml", price: "199" },
//     ],
//   },
//   {
//     name: "Ocean Breeze (v2)",
//     description: "Fresh marine notes with citrus undertones",
//     images: [img1, img4],
//     volumeOptions: [
//       { label: "30ml", price: "89" },
//       { label: "50ml", price: "149" },
//     ],
//   },
//   {
//     name: "Amber Noir (v2)",
//     description: "Warm amber essence with woody undertones",
//     images: [img2, img3, img1],
//     volumeOptions: [{ label: "30ml", price: "119" }],
//   },
// ];

// // ---
// // === Image Slider Component (UPDATED FOR INFINITE LOOP) ===
// function ImageSlider({ images, altText, slideInterval = 3500 }) {
//   // Start at index 1 to show the first real image (index 0 is the clone of the last image)
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(true);
  
//   const timeoutRef = useRef(null);

//   const totalRealSlides = images.length;
//   const isMultipleImages = totalRealSlides > 1;

//   // The actual slides array including the clones for infinite effect
//   const slides = isMultipleImages 
//     ? [images[totalRealSlides - 1], ...images, images[0]] 
//     : images;

//   const totalSlidesWithClones = slides.length;

//   const resetTimeout = useCallback(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }, []);

//   const goToNextSlide = useCallback(() => {
//     // Prevent setting a new timeout if we are already at the last cloned slide
//     if (currentIndex === totalSlidesWithClones - 1) return;
    
//     // Set transition back on before moving to next slide
//     setIsTransitioning(true); 
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   }, [currentIndex, totalSlidesWithClones]);

//   // Automatic slide effect
//   useEffect(() => {
//     if (!isMultipleImages) return;

//     resetTimeout();
//     // Only set timeout if we are not on the last cloned slide
//     if (currentIndex < totalSlidesWithClones - 1) {
//       timeoutRef.current = setTimeout(goToNextSlide, slideInterval);
//     }

//     return () => resetTimeout();
//   }, [currentIndex, goToNextSlide, resetTimeout, slideInterval, isMultipleImages, totalSlidesWithClones]);


//   // Handler for when CSS transition finishes
//   const handleTransitionEnd = useCallback(() => {
//     if (!isMultipleImages) return;

//     if (currentIndex === totalSlidesWithClones - 1) {
//       // If we land on the cloned first slide, jump instantly to the real first slide (index 1)
//       setIsTransitioning(false); 
//       setCurrentIndex(1);
//     } else if (currentIndex === 0) {
//       // This handles manual navigation backwards, jumping from the cloned last slide to the real last slide
//       setIsTransitioning(false);
//       setCurrentIndex(totalRealSlides);
//     }
//   }, [currentIndex, totalRealSlides, totalSlidesWithClones, isMultipleImages]);


//   // Manual navigation function
//   const goToSlide = (slideIndex) => {
//     resetTimeout();
//     setIsTransitioning(true); // Ensure transition is on for manual movement
//     // Slide index refers to the real image index (0 to totalRealSlides-1).
//     // The current index in the slides array is 1 (real first) to totalRealSlides (real last).
//     setCurrentIndex(slideIndex + 1);
//   };
  
//   // Preload next image in the sequence for smoother loading
//   useEffect(() => {
//     if (isMultipleImages && currentIndex < totalSlidesWithClones - 1) {
//         // Preload the very next image in the sequence
//         preloadImage(slides[currentIndex + 1]);
//     }
//   }, [currentIndex, slides, totalSlidesWithClones, isMultipleImages]);


//   return (
//     <div className="image-slider-container" >
//       <div 
//         className="image-slider-track"
//         // Apply transform based on the current index
//         style={{ 
//           transform: `translateX(-${currentIndex * 100}%)`,
//           // Conditionally apply the transition for the "instant jump"
//           transition: isTransitioning ? `transform ${slideInterval * 0.25}ms ease-in-out` : 'none'
//         }}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {slides.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             // Use the real index for alt text (handles clones)
//             alt={`${altText} - Photo ${isMultipleImages ? ((index - 1 + totalRealSlides) % totalRealSlides) + 1 : index + 1}`}
//             className="product-image"
//             // Since we are caching everything, loading="lazy" might not be strictly necessary 
//             // but is good practice as a fallback.
//             loading="lazy" 
//           />
//         ))}
//       </div>

//       {/* Navigation Dots (Only map over real images) */}
//       {isMultipleImages && (
//         <div className="slider-dots">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               // The dot is active if the current index is the real image index + 1, 
//               // or if we're on the last cloned slide (index 0) and the real index is 1 (first image)
//               className={`dot ${index + 1 === currentIndex || (currentIndex === totalSlidesWithClones - 1 && index === 0) ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// // === END Image Slider Component ===
// // ---

// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       <ImageSlider 
//         images={product.images} 
//         altText={product.name} 
//         slideInterval={4000} // Set auto-slide interval to 4 seconds
//       />

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>

//         <div className="volume-options">
//           {product.volumeOptions.map((vol, idx) => (
//             <button
//               key={idx}
//               className={`volume-btn ${
//                 selectedVolume.label === vol.label ? "active" : ""
//               }`}
//               onClick={() => setSelectedVolume(vol)}
//             >
//               {vol.label}
//             </button>
//           ))}
//         </div>

//         <div className="price-info">
//           <span className="price">₹{selectedVolume.price}</span>
//         </div>

//         <button
//           className="order-btn paynow"
//           onClick={() => handlePayNow({ ...product, ...selectedVolume })}
//         >
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// // ---
// function Products() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // === UPDATED: CACHE ALL UNIQUE IMAGES (NEW LOGIC) ===
//   useEffect(() => {
//     // 1. Get all unique image URLs
//     const uniqueImages = new Set();
//     products.forEach(p => p.images.forEach(img => uniqueImages.add(img)));
    
//     // 2. Convert Set of image paths to an Array of Request objects for the Cache API
//     const imageRequests = Array.from(uniqueImages).map(url => new Request(url));

//     const cacheAndPreloadImages = async () => {
//         // Step 1: Attempt to cache images using the Cache API
//         if ('caches' in window) {
//             try {
//                 // Open a cache named 'product-images-cache'
//                 const cache = await caches.open('product-images-cache');
                
//                 // Add all the image requests to the cache. This downloads and stores them.
//                 await cache.addAll(imageRequests);
//                 console.log("✅ Product images successfully cached for local/offline use.");
                
//             } catch (error) {
//                 console.error("❌ Failed to cache product images. Storage might be full or an image path is invalid.", error);
                
//                 // Fallback to simple preloading if caching fails
//                 Array.from(uniqueImages).forEach(preloadImage);
//             }
//         } else {
//             console.warn("⚠️ Cache API not supported. Falling back to simple preloading.");
//             // Step 2 (Fallback): Simple preloading if Cache API isn't available
//             Array.from(uniqueImages).forEach(preloadImage);
//         }
//     };

//     cacheAndPreloadImages();
    
//   }, []); // Run only once on component mount

//   const handlePayNow = async (product) => {
//     const amountInPaise = parseFloat(product.price) * 100;
//     const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

//     if (!window.Razorpay) {
//       alert("Razorpay script not loaded.");
//       return;
//     }

//     const options = {
//       key: keyId,
//       amount: amountInPaise,
//       currency: "INR",
//       name: "Rolsch Eventon",
//       description: `Purchase of ${product.name} (${product.label})`,
//       handler: function (response) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//           <ProductCard key={index} product={product} handlePayNow={handlePayNow} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;



import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/Product.css";
import img1 from "../images/641460.webp";
import img2 from "../images/OIP.webp";
import img3 from "../images/pexels-valeriya-965993.webp";
import img4 from "../images/pexels-valeriya-2.webp";

// === PRODUCT DATA STRUCTURE ===
const products = [
  {
    name: "Midnight Rose",
    description: "A seductive blend of dark rose and vanilla",
    images: [img1, img3, img4], 
    volumeOptions: [
      { label: "30ml", price: "129" },
      { label: "50ml", price: "199" },
    ],
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes with citrus undertones",
    images: [img2, img4, img1],
    volumeOptions: [
      { label: "30ml", price: "89" },
      { label: "50ml", price: "149" },
    ],
  },
  {
    name: "Amber Noir",
    description: "Warm amber essence with woody undertones",
    images: [img3, img1],
    volumeOptions: [{ label: "30ml", price: "119" }],
  },
  {
    name: "Midnight Rose (v2)",
    description: "A seductive blend of dark rose and vanilla",
    images: [img4, img2],
    volumeOptions: [
      { label: "30ml", price: "129" },
      { label: "50ml", price: "199" },
    ],
  },
  {
    name: "Ocean Breeze (v2)",
    description: "Fresh marine notes with citrus undertones",
    images: [img1, img4],
    volumeOptions: [
      { label: "30ml", price: "89" },
      { label: "50ml", price: "149" },
    ],
  },
  {
    name: "Amber Noir (v2)",
    description: "Warm amber essence with woody undertones",
    images: [img2, img3, img1],
    volumeOptions: [{ label: "30ml", price: "119" }],
  },
];

// === SMOOTH Image Slider Component ===
function ImageSlider({ images, altText, slideInterval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const timeoutRef = useRef(null);
  const transitioningRef = useRef(false);

  const totalRealSlides = images.length;
  const isMultipleImages = totalRealSlides > 1;

  const slides = isMultipleImages 
    ? [images[totalRealSlides - 1], ...images, images[0]] 
    : images;

  const totalSlidesWithClones = slides.length;

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const goToNextSlide = useCallback(() => {
    if (transitioningRef.current) return;
    
    transitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  // Automatic slide effect
  useEffect(() => {
    if (!isMultipleImages) return;

    resetTimeout();
    timeoutRef.current = setTimeout(goToNextSlide, slideInterval);

    return () => resetTimeout();
  }, [currentIndex, goToNextSlide, resetTimeout, slideInterval, isMultipleImages]);

  // Handler for when CSS transition finishes
  const handleTransitionEnd = useCallback(() => {
    if (!isMultipleImages) return;

    transitioningRef.current = false;

    if (currentIndex === totalSlidesWithClones - 1) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(1);
      }, 50);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(totalRealSlides);
      }, 50);
    }
  }, [currentIndex, totalRealSlides, totalSlidesWithClones, isMultipleImages]);

  // Manual navigation function
  const goToSlide = (slideIndex) => {
    if (transitioningRef.current) return;
    
    resetTimeout();
    transitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex + 1);
  };

  return (
    <div className="image-slider-container">
      <div 
        className="image-slider-track"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 800ms cubic-bezier(0.45, 0, 0.55, 1)' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${altText} - Photo ${isMultipleImages ? ((index - 1 + totalRealSlides) % totalRealSlides) + 1 : index + 1}`}
            className="product-image"
          />
        ))}
      </div>

      {isMultipleImages && (
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index + 1 === currentIndex || (currentIndex === totalSlidesWithClones - 1 && index === 0) || (currentIndex === 0 && index === totalRealSlides - 1) ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, handlePayNow }) {
  const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

  return (
    <div className="product-card">
      <ImageSlider 
        images={product.images} 
        altText={product.name} 
        slideInterval={4000}
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

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
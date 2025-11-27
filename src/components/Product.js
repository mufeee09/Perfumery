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
// import img1 from "../images/641460.webp";
// import img2 from "../images/OIP.webp";
// import img3 from "../images/pexels-valeriya-965993-transformed.webp";
// import img4 from "../images/pexels-valeriya-2-transformed.webp";

// // === PRODUCT DATA STRUCTURE ===
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
//   // {
//   //   name: "Amber Noir",
//   //   description: "Warm amber essence with woody undertones",
//   //   images: [img3, img1],
//   //   volumeOptions: [{ label: "30ml", price: "119" }],
//   // },
//   // {
//   //   name: "Midnight Rose (v2)",
//   //   description: "A seductive blend of dark rose and vanilla",
//   //   images: [img4, img2],
//   //   volumeOptions: [
//   //     { label: "30ml", price: "129" },
//   //     { label: "50ml", price: "199" },
//   //   ],
//   // },
//   // {
//   //   name: "Ocean Breeze (v2)",
//   //   description: "Fresh marine notes with citrus undertones",
//   //   images: [img1, img4],
//   //   volumeOptions: [
//   //     { label: "30ml", price: "89" },
//   //     { label: "50ml", price: "149" },
//   //   ],
//   // },
//   // {
//   //   name: "Amber Noir (v2)",
//   //   description: "Warm amber essence with woody undertones",
//   //   images: [img2, img3, img1],
//   //   volumeOptions: [{ label: "30ml", price: "119" }],
//   // },
// ];

// // === SMOOTH Image Slider Component ===
// function ImageSlider({ images, altText, slideInterval = 4000 }) {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
  
//   const timeoutRef = useRef(null);
//   const transitioningRef = useRef(false);

//   const totalRealSlides = images.length;
//   const isMultipleImages = totalRealSlides > 1;

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
//     if (transitioningRef.current) return;
    
//     transitioningRef.current = true;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   }, []);

//   // Automatic slide effect
//   useEffect(() => {
//     if (!isMultipleImages) return;

//     resetTimeout();
//     timeoutRef.current = setTimeout(goToNextSlide, slideInterval);

//     return () => resetTimeout();
//   }, [currentIndex, goToNextSlide, resetTimeout, slideInterval, isMultipleImages]);

//   // Handler for when CSS transition finishes
//   const handleTransitionEnd = useCallback(() => {
//     if (!isMultipleImages) return;

//     transitioningRef.current = false;

//     if (currentIndex === totalSlidesWithClones - 1) {
//       setIsTransitioning(false);
//       setTimeout(() => {
//         setCurrentIndex(1);
//       }, 50);
//     } else if (currentIndex === 0) {
//       setIsTransitioning(false);
//       setTimeout(() => {
//         setCurrentIndex(totalRealSlides);
//       }, 50);
//     }
//   }, [currentIndex, totalRealSlides, totalSlidesWithClones, isMultipleImages]);

//   // Manual navigation function
//   const goToSlide = (slideIndex) => {
//     if (transitioningRef.current) return;
    
//     resetTimeout();
//     transitioningRef.current = true;
//     setIsTransitioning(true);
//     setCurrentIndex(slideIndex + 1);
//   };

//   return (
//     <div className="image-slider-container">
//       <div 
//         className="image-slider-track"
//         style={{ 
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: isTransitioning ? 'transform 800ms cubic-bezier(0.45, 0, 0.55, 1)' : 'none'
//         }}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {slides.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`${altText} - Photo ${isMultipleImages ? ((index - 1 + totalRealSlides) % totalRealSlides) + 1 : index + 1}`}
//             className="product-image"
//           />
//         ))}
//       </div>

//       {isMultipleImages && (
//         <div className="slider-dots">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${index + 1 === currentIndex || (currentIndex === totalSlidesWithClones - 1 && index === 0) || (currentIndex === 0 && index === totalRealSlides - 1) ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCard({ product, handlePayNow }) {
//   const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);

//   return (
//     <div className="product-card">
//       <ImageSlider 
//         images={product.images} 
//         altText={product.name} 
//         slideInterval={4000}
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
import img3 from "../images/pexels-valeriya-965993-transformed.webp";
import img4 from "../images/pexels-valeriya-2-transformed.webp";

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
  // {
  //   name: "Amber Noir",
  //   description: "Warm amber essence with woody undertones",
  //   images: [img3, img1],
  //   volumeOptions: [{ label: "30ml", price: "119" }],
  // },
  // {
  //   name: "Midnight Rose (v2)",
  //   description: "A seductive blend of dark rose and vanilla",
  //   images: [img4, img2],
  //   volumeOptions: [
  //     { label: "30ml", price: "129" },
  //     { label: "50ml", price: "199" },
  //   ],
  // },
  // {
  //   name: "Ocean Breeze (v2)",
  //   description: "Fresh marine notes with citrus undertones",
  //   images: [img1, img4],
  //   volumeOptions: [
  //     { label: "30ml", price: "89" },
  //     { label: "50ml", price: "149" },
  //   ],
  // },
  // {
  //   name: "Amber Noir (v2)",
  //   description: "Warm amber essence with woody undertones",
  //   images: [img2, img3, img1],
  //   volumeOptions: [{ label: "30ml", price: "119" }],
  // },
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
      <div className="about-hero">
              <div className="about-label">Our Collection</div>
      </div>
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

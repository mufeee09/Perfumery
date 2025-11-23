// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Product";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// import SocialIcons from "./components/SocialIcons";
// // import "./styles.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Products />
//       <About />
//       <Contact />
//       <ContactForm />
//       <SocialIcons />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { Analytics } from "@vercel/analytics/react"; 
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Product";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// import SocialIcons from "./components/SocialIcons";

// function App() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Products />
//       <About />
//       <Contact />
//       <ContactForm />
//       <SocialIcons />
//       <Footer />

//       <Analytics />
//     </>
//   );
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import { Analytics } from "@vercel/analytics/react";
// import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// import Products from "./components/Product";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// import DomeGallery from "./components/Gallery";
// // import SocialIcons from "./components/SocialIcons";
// import './styles/Loader.css'; // Import Loader CSS

// // Component for the Loading Screen
// const Loader = () => (
//   <div className="loader-container">
//     <div className="essence-spinner"> {/* The large rotating container */}
//       {/* Central glow is now handled by ::before on .essence-spinner */}

//       {/* Outer, main track */}
//       <div className="unfurling-line"></div>

//       {/* Inner, counter-rotating track */}
//       <div className="inner-line-track"></div>

//       {/* Fast-moving gold dot */}
//       <div className="essence-particle"></div>

//     </div>
//     <div className="loading-text"><strong>ATRAB AROMATICS</strong></div>
//   </div>
// );

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Navbar />
//           <About />
//           {/* <Hero /> */}
//           <Products />
//           <div style={{ width: '100vw', height: '68vh' }}>
//             <DomeGallery />
//           </div>
//           <Contact />
//           <ContactForm />
//           {/* <SocialIcons /> */}
//           <Footer />
//         </>
//       )}

//       <Analytics />
//     </>
//   );
// }

// export default App;


// our story
// images
// our collection

// import React, { useEffect, useState } from "react";
// import { Analytics } from "@vercel/analytics/react";
// import Navbar from "./components/Navbar";
// import Products from "./components/Product";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// import DomeGallery from "./components/Gallery";
// import './styles/Loader.css';

// // Import all product images
// import img1 from "./images/641460.webp";
// import img2 from "./images/OIP.webp";
// import img3 from "./images/pexels-valeriya-965993.webp";
// import img4 from "./images/pexels-valeriya-2.webp";

// // Component for the Loading Screen
// const Loader = ({ progress }) => (
//   <div className="loader-container">
//     <div className="essence-spinner">
//       <div className="unfurling-line"></div>
//       <div className="inner-line-track"></div>
//       <div className="essence-particle"></div>
//     </div>
//     <div className="loading-text"><strong>ATRAB AROMATICS</strong></div>
//     <div className="loading-progress"></div>
//   </div>
// );

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // All product images that need to be preloaded
//     const productImages = [img1, img2, img3, img4];
    
//     let loadedCount = 0;
//     const totalImages = productImages.length;
//     const minimumLoadTime = 5000; // 5 seconds minimum
//     const startTime = Date.now();

//     // Function to preload a single image
//     const preloadImage = (src) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => {
//           loadedCount++;
//           const progress = Math.round((loadedCount / totalImages) * 100);
//           setLoadingProgress(progress);
//           resolve();
//         };
//         img.onerror = () => {
//           loadedCount++;
//           const progress = Math.round((loadedCount / totalImages) * 100);
//           setLoadingProgress(progress);
//           reject();
//         };
//         img.src = src;
//       });
//     };

//     // Preload all images with minimum 5 second display
//     const loadAllImages = async () => {
//       try {
//         // Load all images
//         await Promise.all(productImages.map(src => preloadImage(src)));
        
//         // Calculate remaining time to reach 5 seconds
//         const elapsedTime = Date.now() - startTime;
//         const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
//         // Wait for remaining time before hiding loader
//         setTimeout(() => {
//           setIsLoading(false);
//         }, remainingTime);
//       } catch (error) {
//         console.error("Error loading images:", error);
        
//         // Even on error, wait for minimum time
//         const elapsedTime = Date.now() - startTime;
//         const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
//         setTimeout(() => {
//           setIsLoading(false);
//         }, remainingTime);
//       }
//     };

//     loadAllImages();

//     return () => {
//       if (script.parentNode) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader progress={loadingProgress} />
//       ) : (
//         <>
//           <Navbar />
//           <About />
//           <Products />
//           <div style={{ width: '100vw', height: '68vh' }}>
//             <DomeGallery />
//           </div>
//           <Contact />
//           <ContactForm />
//           <Footer />
//         </>
//       )}

//       <Analytics />
//     </>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import BounceCards from "./components/BounceCards";
// import DomeGallery from "./components/Gallery";
import './styles/Loader.css';

// Import all product images
import img1 from "./images/641460.webp";
import img2 from "./images/OIP.webp";
import img3 from "./images/pexels-valeriya-965993-transformed.webp";
import img4 from "./images/pexels-valeriya-2-transformed.webp";

// Import all gallery images
import galleryImg1 from "./images/641460.webp";
import galleryImg2 from "./images/OIP.webp";
import galleryImg3 from "./images/pexels-valeriya-965993-transformed.webp";
import galleryImg4 from "./images/pexels-valeriya-2-transformed.webp";
import galleryImg5 from "./images/pexels-valeriya-3-transformed.webp";
import galleryImg6 from "./images/pexels-xanainai-4-transformed.webp";
import galleryImg7 from "./images/pexels-karola-g-5-transformed.webp";

// Component for the Loading Screen
const Loader = ({ progress }) => (
  <div className="loader-container">
    <div className="essence-spinner">
      <div className="unfurling-line"></div>
      <div className="inner-line-track"></div>
      <div className="essence-particle"></div>
    </div>
    <div className="loading-text"><strong>ATRAB AROMATICS</strong></div>
    <div className="loading-progress"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // All product images that need to be preloaded
    const productImages = [img1, img2, img3, img4];
    
    // All gallery images that need to be preloaded
    const galleryImages = [
      galleryImg1,
      galleryImg2,
      galleryImg3,
      galleryImg4,
      galleryImg5,
      galleryImg6,
      galleryImg7
    ];
    
    // Combine all images for preloading
    const allImages = [...productImages, ...galleryImages];
    
    let loadedCount = 0;
    const totalImages = allImages.length;
    const minimumLoadTime = 5000; // 5 seconds minimum
    const startTime = Date.now();

    // Function to preload a single image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / totalImages) * 100);
          setLoadingProgress(progress);
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / totalImages) * 100);
          setLoadingProgress(progress);
          reject();
        };
        img.src = src;
      });
    };

    // Preload all images with minimum 5 second display
    const loadAllImages = async () => {
      try {
        // Load all images (both product and gallery)
        await Promise.all(allImages.map(src => preloadImage(src)));
        
        // Calculate remaining time to reach 5 seconds
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
        // Wait for remaining time before hiding loader
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error("Error loading images:", error);
        
        // Even on error, wait for minimum time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    loadAllImages();

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader progress={loadingProgress} />
      ) : (
        <>
          <Navbar />
          <About />
          <Products />
          <BounceCards />
          {/* <div style={{ width: '100vw', height: '68vh' }}>
            <DomeGallery />
          </div> */}
          <Contact />
          <ContactForm />
          <Footer />
        </>
      )}

      <Analytics />
    </>
  );
}

export default App;
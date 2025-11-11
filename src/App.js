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


import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import SocialIcons from "./components/SocialIcons";
import './styles/Loader.css'; // Import Loader CSS

// Component for the Loading Screen
const Loader = () => (
  <div className="loader-container">
    <div className="essence-spinner"> {/* The large rotating container */}
      {/* Central glow is now handled by ::before on .essence-spinner */}
      
      {/* Outer, main track */}
      <div className="unfurling-line"></div> 
      
      {/* Inner, counter-rotating track */}
      <div className="inner-line-track"></div>
      
      {/* Fast-moving gold dot */}
      <div className="essence-particle"></div> 

    </div>
    <div className="loading-text"><strong>ROLSCHE VENTON</strong></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <About />
          <Hero />
          <Products />
          <Contact />
          <ContactForm />
          <SocialIcons />
          <Footer />
        </>
      )}

      <Analytics />
    </>
  );
}

export default App;
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

import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import SocialIcons from "./components/SocialIcons";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <ContactForm />
      <SocialIcons />
      <Footer />

      <Analytics />
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import SocialIcons from "./components/SocialIcons";
// import "./styles.css";

function App() {
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
    </>
  );
}

export default App;

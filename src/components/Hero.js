// import React from "react";
// import '../styles/Hero.css';

// function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-content">
//         <h1>Discover Your Signature Scent!</h1>
//         <p>Luxury fragrances for the distinguished individual</p>
//         <a href="#products" className="cta-button">Explore Collections</a>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React, { useEffect } from "react";
import '../styles/Hero.css';

function Hero() {
  useEffect(() => {
    // Select the button inside Hero
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = document.getElementById("products");

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    return () => {
      // Cleanup event listener when component unmounts
      ctaButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Discover Your Signature Scent!</h1>
        <p>Luxury fragrances for the distinguished individual</p>
        <a href="#products" className="cta-button">Explore Collections</a>
      </div>
    </section>
  );
}

export default Hero;

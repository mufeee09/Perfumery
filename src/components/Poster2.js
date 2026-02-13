
import React from "react";
import "../styles/Poster2.css"
import ScrollReveal from "./ScrollReveal";

import img200 from "../images/9667a52a-399c-4c2b-a12c-b7e33b2fe6c4-200w.jpeg";
import img400 from "../images/9667a52a-399c-4c2b-a12c-b7e33b2fe6c4-400w.jpeg";
import img800 from "../images/9667a52a-399c-4c2b-a12c-b7e33b2fe6c4-800w.jpeg";
import img1200 from "../images/9667a52a-399c-4c2b-a12c-b7e33b2fe6c4-1200w.jpeg";
import img1600 from "../images/9667a52a-399c-4c2b-a12c-b7e33b2fe6c4-1600w.jpeg";

const PerfumeHero = ({ altText = "Perfume Bottle" }) => {
  return (
    <div className="hero-wrapper">
      <ScrollReveal>
      <img
        src={img800} // default fallback
        srcSet={`
          ${img200} 200w,
          ${img400} 400w,
          ${img800} 800w,
          ${img1200} 1200w, 
          ${img1600} 1600w
        `}
        sizes="100vw"
        alt={altText}
        className="hero-img"
        loading="lazy"
        fetchpriority="high"
      />
      </ScrollReveal>
    </div>
  );
};

export default PerfumeHero;

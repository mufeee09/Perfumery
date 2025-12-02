
import React from "react";
import "../styles/Poster3.css"
import img200 from "../images/701258e5-b594-4f41-abbd-3a99d7726301-200w.jpeg";
import img400 from "../images/701258e5-b594-4f41-abbd-3a99d7726301-400w.jpeg";
import img800 from "../images/701258e5-b594-4f41-abbd-3a99d7726301-800w.jpeg";
import img1200 from "../images/701258e5-b594-4f41-abbd-3a99d7726301-1200w.jpeg";
import img1600 from "../images/701258e5-b594-4f41-abbd-3a99d7726301-1600w.jpeg";

const PerfumeHero = ({ altText = "Perfume Bottle" }) => {
  return (
    <div className="hero-wrapper">
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
    </div>
  );
};

export default PerfumeHero;

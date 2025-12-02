// import React from 'react';
// import '../styles/Poster.css';

// const PerfumeHero = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <div className="product-showcase">
//           {/* Background Rose - Left */}
//           <div className="rose rose-left">
//             {[...Array(5)].map((_, ringIndex) => (
//               <div key={ringIndex} className="rose-ring" style={{
//                 '--ring-index': ringIndex
//               }}>
//                 {[...Array(12)].map((_, petalIndex) => (
//                   <div 
//                     key={petalIndex} 
//                     className="rose-petal"
//                     style={{
//                       '--petal-index': petalIndex,
//                       '--total-petals': 12
//                     }}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Background Rose - Right */}
//           <div className="rose rose-right">
//             {[...Array(5)].map((_, ringIndex) => (
//               <div key={ringIndex} className="rose-ring" style={{
//                 '--ring-index': ringIndex
//               }}>
//                 {[...Array(12)].map((_, petalIndex) => (
//                   <div 
//                     key={petalIndex} 
//                     className="rose-petal"
//                     style={{
//                       '--petal-index': petalIndex,
//                       '--total-petals': 12
//                     }}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Perfume Bottle */}
//           <div className="perfume-bottle">
//             <div className="bottle-cap">
//               <div className="cap-top"></div>
//               <div className="cap-band"></div>
//             </div>
//             <div className="bottle-body">
//               <div className="bottle-glass">
//                 <div className="liquid"></div>
//                 <div className="bottle-shine"></div>
//               </div>
//               <div className="bottle-label">
//                 <div className="brand-name">YUSUF BHAI</div>
//               </div>
//               <div className="bottle-footer">POUR FEMME</div>
//             </div>
//           </div>
//         </div>

//         {/* Text and CTA */}
//         <div className="hero-text">
//           <h2 className="launch-title">NEW LAUNCH</h2>
//           <button className="cta-button">BUY NOW</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerfumeHero;


// import React from 'react';
// import '../styles/Poster.css';
// import img from "../images/Perfume1.webp"

// const PerfumeHero = ({ imageSrc, altText = "Yusuf Bhai Perfume" }) => {
//   const baseUrl = "https://yusufbhaifragrances.in/cdn/shop/files/Untitled_design_54bdaf94-a3e3-4fe1-81bf-588e95436ecc.png?v=1741216996";
  
//   const imageSizes = [300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200];
  
//   const srcSet = imageSizes
//     .map(width => `${baseUrl}&width=${width} ${width}w`)
//     .join(', ');

//   return (
//     <div className="perfume-hero">
//       <div className="image-container">
//         <img
//           src={imageSrc || `${baseUrl}&width=3200`}
//           alt={altText}
//           srcSet={srcSet}
//           sizes="100vw"
//           className="hero-image"
//           loading="eager"
//           fetchpriority="high"
//         />
//       </div>
//     </div>
//   );
// };

// export default PerfumeHero;

// import React from 'react';
// import '../styles/Poster.css';
// import img from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c.jpeg";

// const PerfumeHero = ({ altText = "Perfume Bottle" }) => {
//   return (
//     <div className="perfume-hero">
//       <div className="image-container">
//         <img
//           src={img}
//           alt={altText}
//           className="hero-image"
//           loading="eager"
//           fetchpriority="high"
//         />
//       </div>
//     </div>
//   );
// };

// export default PerfumeHero;


import React from "react";
import "../styles/Poster.css"
import img200 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-200w.jpeg";
import img400 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-400w.jpeg";
import img800 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-800w.jpeg";
import img1200 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1200w.jpeg";
import img1600 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1600w.jpeg";

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

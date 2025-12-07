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
import img100 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-100w.jpeg";
import img200 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-200w.jpeg";
import img300 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-300w.jpeg";
import img400 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-400w.jpeg";
import img500 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-500w.jpeg";
import img600 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-600w.jpeg";
import img700 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-700w.jpeg";
import img800 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-800w.jpeg";
import img900 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-900w.jpeg";
import img1000 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1000w.jpeg";
import img1100 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1100w.jpeg";
import img1200 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1200w.jpeg";
// import img1300 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1300w.jpeg";
import img1400 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1400w.jpeg";
import img1500 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1500w.jpeg";
import img1600 from "../images/0176c589-9f7a-4a50-b1bc-364a4dab922c-1600w.jpeg";

const PerfumeHero = ({ altText = "Perfume Bottle" }) => {
  return (
    <div className="hero-wrapper">
      <img
        src={img400} // default fallback
        srcSet={`
          ${img100} 100w,
          ${img200} 200w,
          ${img300} 300w,
          ${img400} 400w,
          ${img500} 500w,
          ${img600} 600w,
          ${img700} 700w,
          ${img800} 800w,
          ${img900} 900w,
          ${img1000} 1000w,
          ${img1100} 1100w,
          ${img1200} 1200w,
          ${img1400} 1400w,
          ${img1500} 1500w, 
          ${img1600} 1600w
        `}
        sizes="70vw"
        alt={altText}
        className="hero-img"
        loading="lazy"
        fetchpriority="high"
      />
    </div>
  );
};

export default PerfumeHero;

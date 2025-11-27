// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faHeart, faGem } from "@fortawesome/free-solid-svg-icons";
// import '../styles/About.css';

// function About() {
//   return (
//     <section id="about" className="about">
//       <h2>About Us</h2>
//       <p>We curate the finest fragrances from around the world, bringing you exceptional scents that tell your story.</p>
//       <section id="about1" className="about1">
//         <div className="about-content">
//           <div className="about-features">
//             <div className="feature">
//               {/* <i className="fas fa-star"></i> */}
//               <FontAwesomeIcon icon={faStar} color="blue" size="2x" />
//               <h3 className="prm">Premium Quality</h3>
//               <p>Sourced from the world's finest ingredients</p>
//             </div>
//             <div className="feature">
//               {/* <i className="fas fa-heart"></i> */}
//               <FontAwesomeIcon icon={faHeart} color="blue" size="2x" />
//               <h3 className="prm">Crafted with Love</h3>
//               <p>Every bottle is a work of art</p>
//             </div>
//             <div className="feature">
//               {/* <i className="fas fa-gem"></i> */}
//               <FontAwesomeIcon icon={faGem} color="blue" size="2x" />
//               <h3 className="prm">Luxury Experience</h3>
//               <p>Excellence in every detail</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default About;


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faHeart, faGem } from "@fortawesome/free-solid-svg-icons";
// import '../styles/About.css';

// function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-hero">
//         <div className="about-label">Our Story</div>
//         <h2 className="about-title">
//           Where <strong>Artistry</strong> Meets <strong>Essence</strong>
//         </h2>
//         <p className="about-description">
//           We are passionate curators of the world's most exceptional fragrances. Each scent in our collection is a carefully crafted masterpiece, designed to capture moments, evoke emotions, and express the unique essence of who you are.
//         </p>
//       </div>

//       <div className="features-container">
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="icon-wrapper">
//               <FontAwesomeIcon icon={faStar} className="feature-icon" size="2x" />
//             </div>
//             <h3 className="feature-title">Exceptional Quality</h3>
//             <p className="feature-text">
//               Meticulously sourced from the world's most prestigious perfume houses and master perfumers, ensuring unparalleled excellence in every bottle.
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="icon-wrapper">
//               <FontAwesomeIcon icon={faHeart} className="feature-icon" size="2x" />
//             </div>
//             <h3 className="feature-title">Passionate Craftsmanship</h3>
//             <p className="feature-text">
//               Each fragrance is a testament to artisanal dedication, blending tradition with innovation to create olfactory experiences that resonate with the soul.
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="icon-wrapper">
//               <FontAwesomeIcon icon={faGem} className="feature-icon" size="2x" />
//             </div>
//             <h3 className="feature-title">Timeless Luxury</h3>
//             <p className="feature-text">
//               From exquisite packaging to the final lingering note, we deliver an immersive luxury experience that transcends the ordinary and defines elegance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faGem } from "@fortawesome/free-solid-svg-icons";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-hero">
        <div className="about-label">Our Story</div>
        <h2 className="about-title">
          Where Artistry Meets Essence
        </h2>
        <p className="about-description">
          Founded in 2024, Atrab Aromatics is dedicated to crafting exquisite Extrait de Parfums that embody quality, 
          artistry, and authenticity. We specialize in transforming premium essential oils into finely balanced perfumes 
          that leave a lasting impression. Each product reflects our commitment to excellence, offering both quality 
          and assurance that our customers can trust.
        </p>
      </div>

      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faStar} className="feature-icon" size="2x" />
            </div>
            <h3 className="feature-title">Exceptional Quality</h3>
            <p className="feature-text">
              Meticulously sourced from the world's most prestigious perfume houses and master perfumers, ensuring unparalleled excellence in every bottle.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faHeart} className="feature-icon" size="2x" />
            </div>
            <h3 className="feature-title">Passionate Craftsmanship</h3>
            <p className="feature-text">
              Each fragrance is a testament to artisanal dedication, blending tradition with innovation to create olfactory experiences that resonate with the soul.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faGem} className="feature-icon" size="2x" />
            </div>
            <h3 className="feature-title">Timeless Luxury</h3>
            <p className="feature-text">
              From exquisite packaging to the final lingering note, we deliver an immersive luxury experience that transcends the ordinary and defines elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

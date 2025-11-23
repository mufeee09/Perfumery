// import React, { useState, useEffect } from 'react';
// import '../styles/BounceCards.css';

// import img1 from "../images/641460.webp"
// import img2 from "../images/OIP.webp"
// import img3 from "../images/pexels-karola-g-5-transformed.webp"
// import img4 from "../images/pexels-valeriya-2-transformed.webp"
// import img5 from "../images/pexels-valeriya-3-transformed.webp"
// import img6 from "../images/pexels-valeriya-965993-transformed.webp"
// import img7 from "../images/pexels-xanainai-4-transformed.webp"
// import img8 from "../images/1000211810-removebg-preview.webp"

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const images = [
//     { id: 1, url: img8, alt: 'Image 1' },
//     { id: 2, url: img1, alt: 'Image 2' },
//     { id: 3, url: img2, alt: 'Image 3' },
//     { id: 4, url: img3, alt: 'Image 4' },
//     { id: 5, url: img4, alt: 'Image 5' },
//     { id: 6, url: img5, alt: 'Image 6' },
//     { id: 6, url: img6, alt: 'Image 7' },
//     { id: 6, url: img7, alt: 'Image 8' },
//   ];

//   // Create extended array for infinite loop
//   const extendedImages = [...images, ...images, ...images];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Start at the middle set of images
//   useEffect(() => {
//     setCurrentIndex(images.length);
//   }, []);

//   // Auto-play carousel every 5 seconds
//   useEffect(() => {
//     const autoPlayInterval = setInterval(() => {
//       if (!isTransitioning) {
//         handleNext();
//       }
//     }, 5000);

//     return () => clearInterval(autoPlayInterval);
//   }, [isTransitioning, currentIndex]);

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const handleTransitionEnd = () => {
//     setIsTransitioning(false);
    
//     // Reset to middle set when reaching boundaries
//     if (currentIndex >= images.length * 2) {
//       setCurrentIndex(images.length);
//     } else if (currentIndex <= 0) {
//       setCurrentIndex(images.length);
//     }
//   };

//   const translateX = -(currentIndex * (100 / itemsPerView));

//   const getIndicatorIndex = () => {
//     return ((currentIndex % images.length) + images.length) % images.length;
//   };

//   return (
//     <div className="carousel-section">
//       <div className="carousel-container">
//         <button
//           className="carousel-button carousel-button-prev"
//           onClick={handlePrev}
//           aria-label="Previous"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M15 18l-6-6 6-6" />
//           </svg>
//         </button>

//         <div className="carousel-viewport">
//           <div
//             className="carousel-track"
//             style={{
//               transform: `translateX(${translateX}%)`,
//               transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
//             }}
//             onTransitionEnd={handleTransitionEnd}
//           >
//             {extendedImages.map((image, index) => (
//               <div
//                 key={`${image.id}-${index}`}
//                 className="carousel-item"
//                 style={{ flex: `0 0 ${100 / itemsPerView}%` }}
//               >
//                 <div className="carousel-card">
//                   <div className="carousel-card-content">
//                     <img
//                       src={image.url}
//                       alt={image.alt}
//                       loading="lazy"
//                       className="carousel-image"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className="carousel-button carousel-button-next"
//           onClick={handleNext}
//           aria-label="Next"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M9 18l6-6-6-6" />
//           </svg>
//         </button>
//       </div>

//       <div className="carousel-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === getIndicatorIndex() ? 'active' : ''}`}
//             onClick={() => {
//               setIsTransitioning(true);
//               setCurrentIndex(images.length + index);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;



import React, { useState, useEffect } from 'react';
import '../styles/BounceCards.css';

import img1 from "../images/641460.webp"
import img2 from "../images/OIP.webp"
import img3 from "../images/pexels-karola-g-5-transformed.webp"
import img4 from "../images/pexels-valeriya-2-transformed.webp"
import img5 from "../images/pexels-valeriya-3-transformed.webp"
import img6 from "../images/pexels-valeriya-965993-transformed.webp"
import img7 from "../images/pexels-xanainai-4-transformed.webp"
import img8 from "../images/1000211810-removebg-preview.webp"

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { id: 1, url: img8, alt: 'Image 1' },
    { id: 2, url: img1, alt: 'Image 2' },
    { id: 3, url: img2, alt: 'Image 3' },
    { id: 4, url: img3, alt: 'Image 4' },
    { id: 5, url: img4, alt: 'Image 5' },
    { id: 6, url: img5, alt: 'Image 6' },
    { id: 7, url: img6, alt: 'Image 7' },
    { id: 8, url: img7, alt: 'Image 8' },
  ];

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(images.length);
  }, []);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(autoPlayInterval);
  }, [isTransitioning, currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    if (currentIndex >= images.length * 2) {
      setCurrentIndex(images.length);
    } else if (currentIndex <= 0) {
      setCurrentIndex(images.length);
    }
  };

  const translateX = -(currentIndex * (100 / itemsPerView));

  const getIndicatorIndex = () => {
    return ((currentIndex % images.length) + images.length) % images.length;
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <button
          className="carousel-button carousel-button-prev"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="carousel-item"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className="carousel-card">
                  <div className="carousel-card-content">
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="carousel-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={handleNext}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === getIndicatorIndex() ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(images.length + index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
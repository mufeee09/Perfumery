// import React, { useEffect, useState } from "react";
// import '../styles/Navbar.css';
// import img1 from '../Logo/ROLSCHE VENTON Logo.jpg';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // Disable right-click
//     window.oncontextmenu = function () {
//       alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.");
//       return false;
//     };

//     // Handle scroll effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Smooth Scroll for all anchor links
//     const links = document.querySelectorAll("nav a");

//     const handleClick = (e) => {
//       e.preventDefault();
//       const targetId = e.currentTarget.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         setIsMenuOpen(false); // Close mobile menu after clicking
//       }
//     };

//     links.forEach(link => {
//       link.addEventListener("click", handleClick);
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       links.forEach(link => {
//         link.removeEventListener("click", handleClick);
//       });
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={scrolled ? 'scrolled' : ''}>
//       <div className="nav-content">
//         <div className="brand">
//           <figure>
//             <img className="logo" src={img1} alt="Rolsche Venton Logo" />
//           </figure>
//           <h1>ROLSCHE VENTON</h1>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Navigation Links */}
//         <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <li className="nav-item"><a href="#home">Home</a></li>
//           <li className="nav-item"><a href="#products">Products</a></li>
//           <li className="nav-item"><a href="#about">About</a></li>
//           <li className="nav-item"><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import '../styles/Navbar.css';
// import img1 from '../images/1000211810-removebg-preview.webp';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // Disable right-click
//     window.oncontextmenu = function () {
//       alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.");
//       return false;
//     };

//     // Handle scroll effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Smooth Scroll for all anchor links
//     const links = document.querySelectorAll("nav a");

//     const handleClick = (e) => {
//       e.preventDefault();
//       const targetId = e.currentTarget.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         setIsMenuOpen(false); // Close mobile menu after clicking
//       }
//     };

//     links.forEach(link => {
//       link.addEventListener("click", handleClick);
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       links.forEach(link => {
//         link.removeEventListener("click", handleClick);
//       });
//     };
//   }, []);

//   // Add/remove menu-open class to body
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.classList.add('menu-open');
//     } else {
//       document.body.classList.remove('menu-open');
//     }
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={scrolled ? 'scrolled' : ''}>
//       <div className="nav-content">
//         <div className="brand">
//           <figure>
//             {/* Added loading="lazy" below */}
//             <img
//               className="logo"
//               src={img1}
//               alt="Rolsche Venton Logo"
//               loading="lazy"
//             />
//           </figure>
//           <h1>ATRAB AROMATICS</h1>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Navigation Links */}
//         <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <li className="nav-item"><a href="#about">Home</a></li>
//           <li className="nav-item"><a href="#products">Products</a></li>
//           <li className="nav-item"><a href="#about">About</a></li>
//           <li className="nav-item"><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useEffect, useState } from "react";
import '../styles/Navbar.css';
import img1 from '../images/1000211810-removebg-preview.webp';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Disable right-click
    window.oncontextmenu = function () {
      alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.");
      return false;
    };

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth Scroll for all anchor links
    const links = document.querySelectorAll("nav a");

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false); // Close mobile menu after clicking
      }
    };

    links.forEach(link => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  // Add/remove menu-open class to body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <div className="brand">
          <figure>
            {/* Added loading="lazy" below */}
            <img
              className="logo"
              src={img1}
              alt="Rolsche Venton Logo"
              loading="lazy"
            />
          </figure>
          <h1>ATRAB AROMATICS</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#about">Home</a></li>
          <li className="nav-item"><a href="#products">Products</a></li>
          <li className="nav-item"><a href="#gallery">Gallery</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

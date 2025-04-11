// import React, { useEffect } from "react";
// import '../styles/Navbar.css';
// import img1 from '../Logo/ROLSCHE VENTON Logo.jpg'

// function Navbar() {
//     useEffect(() => {
//         window.oncontextmenu = function () {
//           alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.");
//           return false;
//         };
//       }, []);
//   return (
//     <nav>
//       <div className="nav-content">
//         <div className="brand">
//           <figure>
//             <img className="logo" src={img1} alt="Essence Logo" />
//           </figure>
//           <h1>ROLSCHE VENTON</h1>
//         </div>
//         <div className="nav-links">
//           <li className="nav-item"><a href="#home">Home</a></li>
//           <li className="nav-item"><a href="#products">Products</a></li>
//           <li className="nav-item"><a href="#about">About</a></li>
//           <li className="nav-item"><a href="#contact">Contact</a></li>
//         </div>
//         {/* <div className="menu-container">
//           <button className="menu-button">
//             Menu <i className="fas fa-chevron-down"></i>
//           </button>
//           <div className="menu-dropdown">
//             <a href="profile.html"><i className="fas fa-user"></i> My Profile</a>
//             <a href="#orders"><i className="fas fa-shopping-bag"></i> Orders</a>
//             <a href="#logout"><i className="fas fa-sign-out-alt"></i> Logout</a>
//           </div>
//         </div> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useEffect } from "react";
import '../styles/Navbar.css';
import img1 from '../Logo/ROLSCHE VENTON Logo.jpg';

function Navbar() {
  useEffect(() => {
    // Disable right-click
    window.oncontextmenu = function () {
      alert("Exclusive content deserves exclusive treatment—right-click is gracefully disabled ✨.");
      return false;
    };

    // Smooth Scroll for all anchor links
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => {
      // Cleanup event listeners when component unmounts
      links.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };

  }, []);

  return (
    <nav>
      <div className="nav-content">
        <div className="brand">
          <figure>
            <img className="logo" src={img1} alt="Essence Logo" />
          </figure>
          <h1>ROLSCHE VENTON</h1>
        </div>
        <div className="nav-links">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#products">Products</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

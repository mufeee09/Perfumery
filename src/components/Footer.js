import React from "react";
// import "../styles.css";
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer>
      <p className="footer-tagline"><span className="footer-span">ROLSCHEVENTON</span> <br></br> Where Luxury Meets Legacy</p>
      <p className="footer-copyright">&copy; {currentYear} All rights reserved.</p>
    </footer>
  );
}

export default Footer;

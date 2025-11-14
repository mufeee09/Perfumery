import React from "react";
import facebookLogo from '../Logo/Facebook_logo.png';
import instagramLogo from '../Logo/Instagarm_logo.png';
import twitterLogo from '../Logo/Twitter_logo.png';
import whatsappLogo from '../Logo/Whatsapp_logo.png';
import "../styles/Footer.css"; // Using merged CSS

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/", imgSrc: facebookLogo, alt: "Facebook Icon", className: "facebook-bg" },
  { name: "Instagram", url: "https://instagram.com/", imgSrc: instagramLogo, alt: "Instagram Icon", className: "instagram-bg" },
  { name: "WhatsApp", url: "https://wa.me/916360751727?text=Hello%20there!", imgSrc: whatsappLogo, alt: "WhatsApp Icon", className: "whatsapp-bg" },
];

function SocialIcons() {
  return (
    <ul className="social-icons">
      {socialLinks.map((social, index) => (
        <li className={`icon-content ${social.className}`} key={index}>
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <img src={social.imgSrc} alt={social.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}

// function Footer() {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer>
//       <SocialIcons />
//       <p className="footer-tagline">
//         <span className="footer-span">ROLSCHEVENTON</span> <br />
//         Where Luxury Meets Legacy
//       </p>
//       <p className="footer-copyright">
//         &copy; {currentYear} All rights reserved.
//       </p>
//     </footer>
//   );
// }


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <SocialIcons />
      <div className="footer-brand">
        <span className="footer-span">ROLSCHEVENTON</span>
        <div className="decorative-line"></div>
      </div>
      <p className="footer-tagline">
        Where Luxury Meets Legacy
      </p>
      <p className="footer-copyright">
        &copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;

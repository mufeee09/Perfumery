// import React from "react";
// import "../styles/SocialIcons.css"; // Import CSS
// import img1 from '../Logo/Facebook_logo.png'

// const SocialIcons = () => {
//   const socialLinks = [
//     {
//       name: "Facebook",
//       url: "https://www.facebook.com/profile.php?id=61571386673968",
//       imgSrc: img1,
//       alt: "Facebook Icon",
//       className: "facebook-bg"
//     },
//     {
//       name: "Instagram",
//       url: "https://instagram.com/rolscheventon.official",
//       imgSrc: "/Logo/Instagarm_logo.png",
//       alt: "Instagram Icon",
//       className: "instagram-bg"
//     },
//     {
//       name: "Twitter",
//       url: "https://twitter.com/messages/compose?recipient_id=ROLSCHEVENTON",
//       imgSrc: "/Logo/Twitter_logo.png",
//       alt: "Twitter Icon",
//       className: "twitter-bg"
//     },
//     {
//       name: "WhatsApp",
//       url: "https://wa.me/916360751727?text=Hello%20there!",
//       imgSrc: "/Logo/Whatsapp_logo.png",
//       alt: "WhatsApp Icon",
//       className: "whatsapp-bg"
//     },
//   ];

//   return (
//     <ul className="social-icons">
//       {socialLinks.map((social, index) => (
//         <li className={`icon-content ${social.className}`} key={index}>
//           <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
//             <div className="filled"></div>
//             <img src={social.imgSrc} alt={social.alt} />
//           </a>
//           <div className="tooltip">{social.name}</div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SocialIcons;


import React from "react";
import "../styles/SocialIcons.css";

import facebookLogo from '../Logo/Facebook_logo.png';
import instagramLogo from '../Logo/Instagarm_logo.png';
import twitterLogo from '../Logo/Twitter_logo.png';
import whatsappLogo from '../Logo/Whatsapp_logo.png';

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/", imgSrc: facebookLogo, alt: "Facebook Icon", className: "facebook-bg" },
  { name: "Instagram", url: "https://instagram.com/", imgSrc: instagramLogo, alt: "Instagram Icon", className: "instagram-bg" },
  { name: "Twitter", url: "https://twitter.com/", imgSrc: twitterLogo, alt: "Twitter Icon", className: "twitter-bg" },
  { name: "WhatsApp", url: "https://wa.me/916360751727?text=Hello%20there!", imgSrc: whatsappLogo, alt: "WhatsApp Icon", className: "whatsapp-bg" },
];

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {socialLinks.map((social, index) => (
        <li className={`icon-content ${social.className}`} key={index}>
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <img src={social.imgSrc} alt={social.alt} />
          </a>
          {/* <div className="tooltip">{social.name}</div> */}
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;

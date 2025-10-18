// import React from "react";
// import '../styles/Contact.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// function Contact() {
//   return (
//     <section id="contact" className="contact">
//       <h2>Connect With Us</h2>
//       <p className="contact-intro">Let us help you find your perfect scent</p>
//       <div className="contact-info">
//         <div className="contact-item">
//           {/* <i className="fas fa-envelope"></i> */}
//           <FontAwesomeIcon icon={faEnvelope}  color="blue" size="2x" />
//           <p>rolscheventon.official@gmail.com</p>
//         </div>
//         <div className="contact-item">
//           {/* <i className="fas fa-phone"></i> */}
//           <FontAwesomeIcon icon={faPhone}  color="blue" size="2x" />
//           <p>+91 63607 51727</p>
//         </div>
//         <div className="contact-item">
//           {/* <i className="fas fa-map-marker-alt"></i> */}
//           <FontAwesomeIcon icon={faMapMarkerAlt} color="blue" size="2x" />
//           <p>11, Monalisa Building, Nahur Road, Mulund, West Mumbai 400080.</p>
//           <p>13, Kosa Street, Melvisharam, Ranipet 632509.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React from "react";
import '../styles/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">
            Let's Create Your <strong>Signature Scent</strong>
          </h2>
          <p className="contact-subtitle">
            Our fragrance experts are here to guide you through an olfactory journey tailored to your unique essence
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <a href="mailto:rolscheventon.official@gmail.com" className="contact-link">
              rolscheventon.official@gmail.com
            </a>
            <p className="contact-card-text">We'll respond within 24 hours</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <a href="tel:+916360751727" className="contact-link">
              +91 63607 51727
            </a>
            <p className="contact-card-text">Mon - Sat, 10 AM - 7 PM IST</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <div className="contact-addresses">
              <div className="contact-address">
                <p className="contact-link">Mumbai Showroom</p>
                <p className="contact-card-text">
                  11, Monalisa Building, Nahur Road,<br />
                  Mulund West, Mumbai 400080
                </p>
              </div>
              <div className="contact-address">
                <p className="contact-link">Melvisharam Outlet</p>
                <p className="contact-card-text">
                  13, Kosa Street,<br />
                  Melvisharam, Ranipet 632509
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
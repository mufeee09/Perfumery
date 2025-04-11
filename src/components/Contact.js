import React from "react";
import '../styles/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Connect With Us</h2>
      <p className="contact-intro">Let us help you find your perfect scent</p>
      <div className="contact-info">
        <div className="contact-item">
          {/* <i className="fas fa-envelope"></i> */}
          <FontAwesomeIcon icon={faEnvelope}  color="blue" size="2x" />
          <p>rolscheventon.official@gmail.com</p>
        </div>
        <div className="contact-item">
          {/* <i className="fas fa-phone"></i> */}
          <FontAwesomeIcon icon={faPhone}  color="blue" size="2x" />
          <p>+91 63607 51727</p>
        </div>
        <div className="contact-item">
          {/* <i className="fas fa-map-marker-alt"></i> */}
          <FontAwesomeIcon icon={faMapMarkerAlt} color="blue" size="2x" />
          <p>11, Monalisa Building, Nahur Road, Mulund, West Mumbai 400080.</p>
          <p>13, Kosa Street, Melvisharam, Ranipet 632509.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

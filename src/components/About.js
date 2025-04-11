import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faGem } from "@fortawesome/free-solid-svg-icons";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We curate the finest fragrances from around the world, bringing you exceptional scents that tell your story.</p>
      <section id="about1" className="about1">
        <div className="about-content">
          <div className="about-features">
            <div className="feature">
              {/* <i className="fas fa-star"></i> */}
              <FontAwesomeIcon icon={faStar} color="blue" size="2x" />
              <h3 className="prm">Premium Quality</h3>
              <p>Sourced from the world's finest ingredients</p>
            </div>
            <div className="feature">
              {/* <i className="fas fa-heart"></i> */}
              <FontAwesomeIcon icon={faHeart} color="blue" size="2x" />
              <h3 className="prm">Crafted with Love</h3>
              <p>Every bottle is a work of art</p>
            </div>
            <div className="feature">
              {/* <i className="fas fa-gem"></i> */}
              <FontAwesomeIcon icon={faGem} color="blue" size="2x" />
              <h3 className="prm">Luxury Experience</h3>
              <p>Excellence in every detail</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;

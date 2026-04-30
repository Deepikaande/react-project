import React from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.jpg";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className='home' id="hero">
    <div className="menu-icon" onClick={() => setOpen(!open)}>
          <FaBars />
        </div>
      <nav className={open ? "home-links active" : "home-links"}>
        <a href="#hero">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#about">ABOUT</a>
        <a href="#ebook">eBOOK</a>
        <a href="#conferences">CONFERENCE</a>
        <a href="#contact">CONTACT</a>
      </nav>
     </div>
    
    <div className="container py-5" id="about">
      <div className="row align-items-center">

        <div className="col-md-6">
          <div
            id="aboutCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100 rounded"
                  alt="medical"
                />
              </div>

              <div className="carousel-item">
                <img
                  src={image2}
                  className="d-block w-100 rounded"
                  alt="hospital"
                />
              </div>

              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100 rounded"
                  alt="lab"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p className="lead">
            MedDocs is a global platform dedicated to publishing high-quality
            medical research and scientific journals.
          </p>

          <p>
            We connect researchers, doctors, and scientists worldwide by
            providing access to trusted publications and peer-reviewed content.
          </p>

          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>

      </div>
    </div>
    </div>
    
    
    
  )
}

export default Hero
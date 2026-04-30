import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 className="fw-bold text-primary">
              <img src={logo}/>
            </h4>
            <p className="text-muted">
              Open Access Publisher <br />
              © 2018-2019 Meddocs All Rights Reserved.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p><FaMapMarkerAlt /> Suite 200-A, Reno, NV 89502, USA</p>
            <p><FaEnvelope /> support@meddocsonline.org</p>
            <p><FaGlobe /> www.meddocsonline.org</p>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Journals</a></li>
              <li><a href="#" className="text-decoration-none text-dark">eBooks</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Conferences</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Main Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Journals</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Conferences</a></li>
              <li><a href="#" className="text-decoration-none text-dark">eBooks</a></li>
            </ul>

            <h6 className="fw-bold mt-3">Follow Us</h6>
            <div className="d-flex gap-3" id="social">
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaGoogle size={20} />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-muted mb-0">
          Designed with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
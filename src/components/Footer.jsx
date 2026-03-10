import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaBuilding />
              <span>Sunbreeze Properties</span>
            </Link>
            <p className="footer-description">
              Creating premium living and commercial spaces in Lucknow and Noida with over 15 years of excellence.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/projects">Sunbreeze Greens - Lucknow</Link></li>
              <li><Link to="/projects">Sunbreeze Heights - Noida</Link></li>
              <li><Link to="/projects">Commercial Hub - Noida</Link></li>
              <li><Link to="/investment">Investment Plans</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>Lucknow & Noida, Uttar Pradesh</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@sunbreeze.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sunbreeze Properties. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

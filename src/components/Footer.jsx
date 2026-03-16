import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaLandmark, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaBuilding />
              <span>Unique Spark Infra Pvt. Ltd.</span>
            </Link>
            <p className="footer-description">
              Premier real estate developer in Lucknow and Noida. Operating through <strong>Chandraprabha Realty</strong> and <strong>QalaGriha</strong> divisions with over 15 years of excellence in creating premium living spaces.
            </p>
            <div className="footer-division-badges">
              <div className="footer-division">
                <FaLandmark />
                <span>Chandraprabha Realty</span>
              </div>
              <div className="footer-division">
                <FaHome />
                <span>QalaGriha</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com/uniquesparkinfra" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com/uniquesparkinfra" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com/uniquesparkinfra" className="social-link" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com/company/uniquesparkinfra" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/investment">Investment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Divisions</h4>
            <ul>
              <li><Link to="/divisions#chandraprabha">Chandraprabha Realty</Link></li>
              <li><Link to="/divisions#qalagriha">QalaGriha</Link></li>
              <li><Link to="/projects">All Projects</Link></li>
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
                <span>info@uniquesparkinfra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Unique Spark Infra Pvt. Ltd. All rights reserved.</p>
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

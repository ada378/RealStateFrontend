import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaBuilding, FaHome, FaLandmark } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/2346057-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-inner">
         
          
          <h1 className="hero-title">
            Building Dreams,
            <span className="gradient-text">Creating Legacies</span>
          </h1>
          
          <p className="hero-subtitle">
            Premier real estate developer in Lucknow & Noida. Operating through <strong>Chandraprabha Realty</strong> and <strong>QalaGriha</strong> - delivering premium residential and commercial spaces since 2011.
          </p>
        </div>

        <div className="hero-division-badges">
          <div className="division-badge">
            <FaBuilding />
            <span>Chandraprabha Realty</span>
          </div>
          <div className="division-badge">
            <FaHome />
            <span>QalaGriha</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/projects" className="hero-btn primary">
            <FaSearch />
            View Projects
          </Link>
          <Link to="/contact" className="hero-btn secondary">
            <FaCalendarAlt />
            Book Site Visit
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3 className="hero-stat-number">50+</h3>
            <p className="hero-stat-label">Projects Delivered</p>
          </div>
          <div className="hero-stat">
            <h3 className="hero-stat-number">5000+</h3>
            <p className="hero-stat-label">Happy Families</p>
          </div>
          <div className="hero-stat">
            <h3 className="hero-stat-number">15+</h3>
            <p className="hero-stat-label">Years Experience</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    title: 'Premium Living Spaces',
    subtitle: 'in Lucknow and Noida'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    title: 'Luxury Apartments',
    subtitle: 'Crafted for Modern Living'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    title: 'Dream Homes',
    subtitle: 'Your Perfect Sanctuary'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div key={currentSlide} className="hero-content-inner">
          <span className="hero-tag">Premium Real Estate</span>
          
          <h1 className="hero-title">
            {heroSlides[currentSlide].title}
            <span className="gradient-text">{heroSlides[currentSlide].subtitle}</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover luxury residential and commercial properties crafted for modern living in Lucknow and Noida
          </p>
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

        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

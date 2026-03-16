import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLandmark, FaHome, FaArrowRight, FaMapMarkerAlt, FaKey, FaBuilding, FaShieldAlt, FaClock, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const Divisions = () => {
  return (
    <section className="divisions" id="divisions">
      <div className="divisions-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="divisions-header"
        >
          <span className="divisions-tag">Our Divisions</span>
          <h2 className="divisions-title">Excellence Through Specialization</h2>
          <p className="divisions-subtitle">
            Unique Spark Infra operates through two specialized divisions, each focused on delivering exceptional real estate solutions tailored to diverse needs.
          </p>
        </motion.div>

        <div className="divisions-grid">
          {/* Chandraprabha Realty */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="division-main-card chandraprabha"
          >
            <div className="division-card-bg"></div>
            <div className="division-card-content">
              <div className="division-card-header">
                <div className="division-icon-large">
                  <FaLandmark />
                </div>
                <div className="division-badge">Chandraprabha Realty</div>
              </div>
              
              <h3 className="division-card-title">Premium Residential & Commercial Development</h3>
              <p className="division-card-description">
                Chandraprabha Realty specializes in creating premium residential apartments, high-rise towers, and commercial spaces that define modern urban living in Lucknow and Noida.
              </p>
              
              <div className="division-features">
                <div className="division-feature">
                  <FaBuilding />
                  <span>Residential Apartments</span>
                </div>
                <div className="division-feature">
                  <FaShieldAlt />
                  <span>Commercial Complexes</span>
                </div>
                <div className="division-feature">
                  <FaMapMarkerAlt />
                  <span>Prime Locations</span>
                </div>
              </div>

              <div className="division-stats">
                <div className="division-stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="division-stat">
                  <span className="stat-number">3000+</span>
                  <span className="stat-label">Units Sold</span>
                </div>
                <div className="division-stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>

              <Link to="/projects" className="division-btn">
                View Chandraprabha Projects
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* QalaGriha */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="division-main-card qalagriha"
          >
            <div className="division-card-bg"></div>
            <div className="division-card-content">
              <div className="division-card-header">
                <div className="division-icon-large">
                  <FaHome />
                </div>
                <div className="division-badge">QalaGriha</div>
              </div>
              
              <h3 className="division-card-title">Luxury Villas & Bespoke Living Spaces</h3>
              <p className="division-card-description">
                QalaGriha represents the pinnacle of luxury living, offering exclusive villas, independent houses, and customized living solutions for those who seek nothing but the best.
              </p>
              
              <div className="division-features">
                <div className="division-feature">
                  <FaHome />
                  <span>Luxury Villas</span>
                </div>
                <div className="division-feature">
                  <FaKey />
                  <span>Independent Houses</span>
                </div>
                <div className="division-feature">
                  <FaShieldAlt />
                  <span>Gated Communities</span>
                </div>
              </div>

              <div className="division-stats">
                <div className="division-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="division-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Villas</span>
                </div>
                <div className="division-stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>

              <Link to="/projects" className="division-btn">
                View QalaGriha Projects
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="why-choose-us"
        >
          <h3 className="why-choose-title">Why Choose Unique Spark Infra?</h3>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaClock />
              </div>
              <h4>On-Time Delivery</h4>
              <p>Committed to delivering projects on schedule, every time</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaHandshake />
              </div>
              <h4>Transparent Deals</h4>
              <p>No hidden costs, clear documentation, full transparency</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaShieldAlt />
              </div>
              <h4>Quality Assurance</h4>
              <p>Premium construction quality with premium materials</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaCheckCircle />
              </div>
              <h4>Customer First</h4>
              <p>Your satisfaction is our ultimate priority</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Divisions;

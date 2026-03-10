import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaBuilding, FaHandshake, FaArrowRight } from 'react-icons/fa';

const DeveloperIntro = () => {
  const highlights = [
    { icon: <FaBuilding />, title: '50+ Projects', description: 'Successfully delivered across Lucknow and Noida' },
    { icon: <FaUsers />, title: '5000+ Families', description: 'Happy homeowners in our communities' },
    { icon: <FaAward />, title: '15+ Years', description: 'Of excellence in real estate development' },
    { icon: <FaHandshake />, title: '100% Trust', description: 'Transparent dealings and timely delivery' }
  ];

  return (
    <section className="developer-intro">
      <div className="developer-container">
        <div className="developer-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="developer-text"
          >
            <h2 className="developer-title">About Sunbreeze Properties</h2>
            <p className="developer-description">
              With over 15 years of excellence in real estate development, Sunbreeze Properties has been 
              creating premium living and commercial spaces in Lucknow and Noida. Our commitment to quality, 
              innovation, and customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="developer-vision">
              <p>We envision creating sustainable communities that blend modern amenities with natural beauty, 
              providing our customers with not just homes, but a lifestyle that enhances their quality of life.</p>
            </div>
            <div className="developer-cta">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="developer-highlights"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="highlight-card"
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperIntro;

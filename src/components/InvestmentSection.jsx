import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaMapMarkerAlt, FaRoad, FaUniversity, FaArrowRight } from 'react-icons/fa';

const InvestmentSection = () => {
  const reasons = [
    {
      icon: <FaChartLine />,
      title: 'High Growth Potential',
      description: 'Both Lucknow and Noida are experiencing rapid infrastructure development and property appreciation'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Strategic Locations',
      description: 'Prime locations with excellent connectivity to Delhi NCR and major business hubs'
    },
    {
      icon: <FaRoad />,
      title: 'Infrastructure Development',
      description: 'Metro connectivity, expressways, and upcoming development projects boost property values'
    },
    {
      icon: <FaUniversity />,
      title: 'Educational & IT Hubs',
      description: 'Proximity to top educational institutions and growing IT sector ensures steady demand'
    }
  ];

  return (
    <section className="investment-section">
      <div className="investment-container">
        <div className="investment-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="investment-title"
          >
            Why Invest in Lucknow & Noida Real Estate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="investment-subtitle"
          >
            Discover the compelling reasons that make these cities ideal for real estate investment
          </motion.p>
        </div>

        <div className="investment-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="investment-card"
            >
              <div className="investment-icon">{reason.icon}</div>
              <h3 className="investment-card-title">{reason.title}</h3>
              <p className="investment-card-description">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="investment-cta"
        >
          <h3>Ready to Invest in Your Future?</h3>
          <p>Get expert guidance on the best investment opportunities in Lucknow and Noida</p>
          <Link to="/investment" className="btn btn-primary">
            Explore Investment Options
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;

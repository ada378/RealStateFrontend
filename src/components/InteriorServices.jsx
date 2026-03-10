import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintRoller, FaCouch, FaLightbulb, FaHammer } from 'react-icons/fa';

const InteriorServices = () => {
  const services = [
    {
      icon: <FaPaintRoller />,
      title: 'Interior Design',
      description: 'Custom interior design solutions for your dream home'
    },
    {
      icon: <FaCouch />,
      title: 'Furniture Selection',
      description: 'Curated furniture and decor recommendations'
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting Design',
      description: 'Professional lighting solutions for every space'
    },
    {
      icon: <FaHammer />,
      title: 'Renovation',
      description: 'Complete home renovation and remodeling services'
    }
  ];

  return (
    <section className="interior-services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Interior Services</h2>
          <p className="services-subtitle">Transform your property with our expert services</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServices;

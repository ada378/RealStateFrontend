import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCouch, FaDraftingCompass, FaHome, FaKey, FaChartLine, FaPaintRoller, FaLightbulb, FaRuler } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const Services = () => {
  const mainServices = [
    {
      icon: <FaBuilding />,
      title: 'Real Estate Services',
      description: 'Comprehensive property buying, selling, and investment solutions',
      features: [
        { icon: <FaHome />, text: 'Property Buying & Selling' },
        { icon: <FaKey />, text: 'Property Management' },
        { icon: <FaChartLine />, text: 'Investment Consulting' },
        { icon: <FaBuilding />, text: 'Commercial Real Estate' }
      ],
      className: 'real-estate'
    },
    {
      icon: <FaCouch />,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services',
      features: [
        { icon: <FaPaintRoller />, text: 'Residential Design' },
        { icon: <FaCouch />, text: 'Furniture Selection' },
        { icon: <FaLightbulb />, text: 'Lighting Design' },
        { icon: <FaHome />, text: 'Space Planning' }
      ],
      className: 'interior'
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Architecture & Planning',
      description: 'Innovative architectural solutions for your dream projects',
      features: [
        { icon: <FaDraftingCompass />, text: 'Architectural Design' },
        { icon: <FaRuler />, text: 'Project Planning' },
        { icon: <FaBuilding />, text: '3D Visualization' },
        { icon: <FaHome />, text: 'Renovation Planning' }
      ],
      className: 'architecture'
    }
  ];

  return (
    <div className="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="services-hero-title"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="services-hero-subtitle"
          >
            Comprehensive real estate, interior design, and architectural solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="main-services-container">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`main-service ${service.className}`}
            >
              <div className="main-service-content">
                <div className="main-service-info">
                  <div className="main-service-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <a href="#" className="service-cta">
                    Learn More
                  </a>
                </div>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature">
                      <div className="service-feature-icon">{feature.icon}</div>
                      <p className="service-feature-text">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="process-title">Our Process</h2>
            <p className="process-subtitle">Simple, transparent, and efficient</p>
          </div>
          <div className="process-grid">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your needs and requirements' },
              { step: '02', title: 'Planning', desc: 'Create a customized solution plan' },
              { step: '03', title: 'Execution', desc: 'Implement with precision and care' },
              { step: '04', title: 'Delivery', desc: 'Handover your dream project' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="process-step"
              >
                <div className="process-number">{item.step}</div>
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Let's bring your vision to life with our expert services</p>
          <a href="/contact" className="services-cta-button">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

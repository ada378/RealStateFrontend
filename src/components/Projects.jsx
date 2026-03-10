import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRupeeSign, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Sunbreeze Greens',
      location: 'Lucknow',
      price: '₹45,00,000',
      priceText: 'onwards',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      description: 'Premium residential apartments with modern amenities'
    },
    {
      id: 2,
      title: 'Sunbreeze Heights',
      location: 'Noida',
      price: '₹68,00,000',
      priceText: 'onwards',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      description: 'Luxury high-rise apartments in prime Noida location'
    },
    {
      id: 3,
      title: 'Sunbreeze Commercial Hub',
      location: 'Noida',
      price: '₹95,00,000',
      priceText: 'onwards',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Modern commercial spaces for business growth'
    }
  ]);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Discover our premium residential and commercial developments</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-type-badge">
                {project.type}
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-location">
                <FaMapMarkerAlt />
                {project.location}
              </p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-price-section">
                <div className="project-price">
                  <FaRupeeSign />
                  <span className="price-amount">{project.price}</span>
                  <span className="price-text">{project.priceText}</span>
                </div>
              </div>
              
              <Link to="/projects" className="project-button">
                <FaEye />
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

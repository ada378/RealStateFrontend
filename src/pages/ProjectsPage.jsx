import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRupeeSign, FaEye, FaBed, FaBath, FaCar } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const ProjectsPage = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Sunbreeze Greens',
      location: 'Lucknow',
      price: '₹45,00,000',
      priceText: 'onwards',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      description: 'Premium residential apartments with modern amenities and lush green surroundings',
      beds: '2-3 BHK',
      baths: '2-3',
      parking: 'Available',
      status: 'Ready to Move'
    },
    {
      id: 2,
      title: 'Sunbreeze Heights',
      location: 'Noida',
      price: '₹68,00,000',
      priceText: 'onwards',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      description: 'Luxury high-rise apartments in prime Noida location with world-class facilities',
      beds: '3-4 BHK',
      baths: '3-4',
      parking: 'Covered',
      status: 'Under Construction'
    },
    {
      id: 3,
      title: 'Sunbreeze Commercial Hub',
      location: 'Noida',
      price: '₹95,00,000',
      priceText: 'onwards',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Modern commercial spaces designed for business growth and success',
      beds: 'Office Spaces',
      baths: 'Common Areas',
      parking: 'Ample',
      status: 'Launching Soon'
    },
    {
      id: 4,
      title: 'Sunbreeze Villas',
      location: 'Lucknow',
      price: '₹1,25,00,000',
      priceText: 'onwards',
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      description: 'Independent luxury villas with private gardens and premium amenities',
      beds: '4-5 BHK',
      baths: '4-5',
      parking: 'Private',
      status: 'Pre-Launch'
    }
  ]);

  return (
    <div className="projects-page">
      <Navbar />
      
      <section className="projects-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="projects-hero-title"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="projects-hero-subtitle"
          >
            Discover premium residential and commercial developments in Lucknow and Noida
          </motion.p>
        </div>
      </section>

      <section className="projects-listing">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card-detailed"
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-badges">
                    <span className="project-type-badge">{project.type}</span>
                    <span className="project-status-badge">{project.status}</span>
                  </div>
                </div>
                
                <div className="project-info-detailed">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">
                    <FaMapMarkerAlt />
                    {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features-detailed">
                    <div className="feature-item">
                      <FaBed />
                      <span>{project.beds}</span>
                    </div>
                    <div className="feature-item">
                      <FaBath />
                      <span>{project.baths}</span>
                    </div>
                    <div className="feature-item">
                      <FaCar />
                      <span>{project.parking}</span>
                    </div>
                  </div>
                  
                  <div className="project-price-section">
                    <div className="project-price">
                      <FaRupeeSign />
                      <span className="price-amount">{project.price}</span>
                      <span className="price-text">{project.priceText}</span>
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <button className="project-button primary">
                      <FaEye />
                      View Details
                    </button>
                    <button className="project-button secondary">
                      Book Site Visit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
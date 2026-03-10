import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRoad, FaUniversity, FaHospital, FaShoppingCart, FaPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const Locations = () => {
  const locations = [
    {
      id: 1,
      city: 'Lucknow',
      title: 'The City of Nawabs',
      description: 'Capital of Uttar Pradesh, known for its rich culture, heritage, and rapid development',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      highlights: [
        'State Capital with Government Hub',
        'Rich Cultural Heritage',
        'Growing IT and Business Sector',
        'Excellent Educational Institutions',
        'Metro Connectivity Under Development',
        'Affordable Real Estate Prices'
      ],
      connectivity: [
        { icon: <FaPlane />, text: 'Chaudhary Charan Singh Airport' },
        { icon: <FaRoad />, text: 'Lucknow-Agra Expressway' },
        { icon: <FaUniversity />, text: 'IIM Lucknow, KGMU' },
        { icon: <FaHospital />, text: 'SGPGI, KGMU Hospital' }
      ],
      projects: ['Sunbreeze Greens', 'Sunbreeze Villas']
    },
    {
      id: 2,
      city: 'Noida',
      title: 'Planned City of NCR',
      description: 'Modern planned city in NCR with excellent infrastructure and connectivity to Delhi',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
      highlights: [
        'Part of Delhi NCR Region',
        'Excellent Metro Connectivity',
        'Major IT and Corporate Hub',
        'World-class Infrastructure',
        'Premium Shopping and Entertainment',
        'High Investment Returns'
      ],
      connectivity: [
        { icon: <FaPlane />, text: 'IGI Airport (45 mins)' },
        { icon: <FaRoad />, text: 'DND Flyway, Yamuna Expressway' },
        { icon: <FaUniversity />, text: 'Amity University, Bennett' },
        { icon: <FaShoppingCart />, text: 'DLF Mall, Great India Place' }
      ],
      projects: ['Sunbreeze Heights', 'Sunbreeze Commercial Hub']
    }
  ];

  return (
    <div className="locations-page">
      <Navbar />
      
      <section className="locations-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="locations-hero-title"
          >
            Prime Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="locations-hero-subtitle"
          >
            Discover why Lucknow and Noida are the best investment destinations
          </motion.p>
        </div>
      </section>

      <section className="locations-content">
        <div className="container">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`location-section ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="location-content">
                <div className="location-text">
                  <h2 className="location-title">{location.city}</h2>
                  <h3 className="location-subtitle">{location.title}</h3>
                  <p className="location-description">{location.description}</p>
                  
                  <div className="location-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {location.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="location-connectivity">
                    <h4>Connectivity & Amenities:</h4>
                    <div className="connectivity-grid">
                      {location.connectivity.map((item, idx) => (
                        <div key={idx} className="connectivity-item">
                          <div className="connectivity-icon">{item.icon}</div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="location-projects">
                    <h4>Our Projects:</h4>
                    <div className="project-tags">
                      {location.projects.map((project, idx) => (
                        <span key={idx} className="project-tag">{project}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="location-image">
                  <img src={location.image} alt={location.city} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="location-comparison">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="comparison-title"
          >
            Investment Comparison
          </motion.h2>
          
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell">Features</div>
              <div className="comparison-cell">Lucknow</div>
              <div className="comparison-cell">Noida</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell">Average Property Price</div>
              <div className="comparison-cell">₹3,500-5,000/sq ft</div>
              <div className="comparison-cell">₹5,500-8,000/sq ft</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell">Rental Yield</div>
              <div className="comparison-cell">3-4%</div>
              <div className="comparison-cell">2.5-3.5%</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell">Capital Appreciation</div>
              <div className="comparison-cell">8-12% annually</div>
              <div className="comparison-cell">6-10% annually</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell">Infrastructure</div>
              <div className="comparison-cell">Developing</div>
              <div className="comparison-cell">Excellent</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
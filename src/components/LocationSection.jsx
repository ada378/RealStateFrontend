import React from 'react';

const locations = [
  {
    city: 'Lucknow',
    projects: '25+',
    price: '₹45L - ₹1.2Cr',
    image: 'https://images.unsplash.com/photo-1565439398535-8959114b3d3e?w=600&q=80'
  },
  {
    city: 'Noida',
    projects: '30+',
    price: '₹55L - ₹2Cr',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
  },
  {
    city: 'Greater Noida',
    projects: '20+',
    price: '₹35L - ₹90L',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80'
  }
];

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <h2 className="location-title">Our Projects Location</h2>
        <p className="location-subtitle">Prime locations across major cities</p>
        
        <div className="location-grid">
          {locations.map((loc, index) => (
            <div key={index} className="location-card">
              <div className="location-image">
                <img src={loc.image} alt={loc.city} />
                <div className="location-overlay">
                  <h3>{loc.city}</h3>
                </div>
              </div>
              <div className="location-info">
                <div className="location-stat">
                  <span className="location-stat-label">Projects</span>
                  <span className="location-stat-value">{loc.projects}</span>
                </div>
                <div className="location-stat">
                  <span className="location-stat-label">Price Range</span>
                  <span className="location-stat-value">{loc.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

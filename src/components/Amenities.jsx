import React from 'react';

const amenitiesList = [
  { icon: '🏊', title: 'Swimming Pool', desc: 'Luxury pool with jacuzzi' },
  { icon: '🏋️', title: 'Fitness Center', desc: 'Modern gym equipment' },
  { icon: '🌳', title: 'Green Parks', desc: 'Lush landscaped gardens' },
  { icon: '🅿️', title: 'Parking Space', desc: 'Ample covered parking' },
  { icon: '🔒', title: '24/7 Security', desc: 'Gated community' },
  { icon: '🎮', title: 'Club House', desc: 'Community recreation' },
  { icon: '⚡', title: 'Power Backup', desc: 'Uninterrupted power' },
  { icon: '🍽️', title: 'Restaurant', desc: 'Fine dining experience' }
];

const Amenities = () => {
  return (
    <section className="amenities">
      <div className="amenities-container">
        <h2 className="amenities-title">World-Class Amenities</h2>
        <p className="amenities-subtitle">Experience luxury living with premium facilities</p>
        
        <div className="amenities-grid">
          {amenitiesList.map((item, index) => (
            <div key={index} className="amenity-card">
              <span className="amenity-icon">{item.icon}</span>
              <h3 className="amenity-title">{item.title}</h3>
              <p className="amenity-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

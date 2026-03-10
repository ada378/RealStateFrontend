import React from 'react';

const statsData = [
  { number: '50+', label: 'Projects Delivered', icon: '🏢' },
  { number: '5000+', label: 'Happy Families', icon: '👨‍👩‍👧‍👦' },
  { number: '15+', label: 'Years Experience', icon: '📅' },
  { number: '1000+', label: 'Crore Investment', icon: '💰' }
];

const StatsBanner = () => {
  return (
    <section className="stats-banner">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-item">
            <span className="stats-icon">{stat.icon}</span>
            <div className="stats-content">
              <span className="stats-number">{stat.number}</span>
              <span className="stats-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;

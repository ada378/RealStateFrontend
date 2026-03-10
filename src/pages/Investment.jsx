import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaRupeeSign, FaHome, FaBuilding, FaCalculator, FaHandshake } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const Investment = () => {
  const [selectedInvestment, setSelectedInvestment] = useState('residential');

  const investmentTypes = [
    {
      id: 'residential',
      title: 'Residential Properties',
      icon: <FaHome />,
      description: 'Invest in premium apartments and villas for steady returns',
      minInvestment: '₹45,00,000',
      expectedReturns: '8-12% annually',
      benefits: [
        'Steady rental income',
        'Capital appreciation',
        'Tax benefits under 80C',
        'Ready to move options available'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Spaces',
      icon: <FaBuilding />,
      description: 'High-yield commercial properties in prime business locations',
      minInvestment: '₹95,00,000',
      expectedReturns: '10-15% annually',
      benefits: [
        'Higher rental yields',
        'Long-term lease agreements',
        'Professional tenant base',
        'Lower maintenance costs'
      ]
    }
  ];

  const investmentPlans = [
    {
      title: 'Starter Plan',
      investment: '₹45,00,000 - ₹75,00,000',
      properties: '2-3 BHK Apartments',
      locations: 'Lucknow',
      returns: '8-10% annually',
      features: ['Ready to move', 'Rental guarantee', 'Property management']
    },
    {
      title: 'Growth Plan',
      investment: '₹75,00,000 - ₹1,25,00,000',
      properties: '3-4 BHK Apartments',
      locations: 'Noida, Lucknow',
      returns: '10-12% annually',
      features: ['Premium locations', 'Higher appreciation', 'Flexible payment']
    },
    {
      title: 'Premium Plan',
      investment: '₹1,25,00,000+',
      properties: 'Villas & Commercial',
      locations: 'Prime Noida, Lucknow',
      returns: '12-15% annually',
      features: ['Luxury properties', 'Maximum returns', 'VIP services']
    }
  ];

  const whyInvest = [
    {
      icon: <FaChartLine />,
      title: 'High Growth Potential',
      description: 'Both cities showing consistent 8-15% annual appreciation'
    },
    {
      icon: <FaRupeeSign />,
      title: 'Affordable Entry Point',
      description: 'Lower property prices compared to Delhi, Mumbai'
    },
    {
      icon: <FaHandshake />,
      title: 'Transparent Dealings',
      description: 'RERA approved projects with clear documentation'
    },
    {
      icon: <FaCalculator />,
      title: 'Tax Benefits',
      description: 'Deductions under Section 80C and 24(b)'
    }
  ];

  return (
    <div className="investment-page">
      <Navbar />
      
      <section className="investment-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="investment-hero-title"
          >
            Investment Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="investment-hero-subtitle"
          >
            Secure your future with smart real estate investments in Lucknow and Noida
          </motion.p>
        </div>
      </section>

      <section className="investment-types">
        <div className="container">
          <h2 className="section-title">Investment Categories</h2>
          
          <div className="investment-tabs">
            {investmentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedInvestment(type.id)}
                className={`investment-tab ${selectedInvestment === type.id ? 'active' : ''}`}
              >
                {type.icon}
                {type.title}
              </button>
            ))}
          </div>

          <div className="investment-content">
            {investmentTypes.map((type) => (
              selectedInvestment === type.id && (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="investment-details"
                >
                  <div className="investment-info">
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                    
                    <div className="investment-stats">
                      <div className="stat-item">
                        <span className="stat-label">Minimum Investment</span>
                        <span className="stat-value">{type.minInvestment}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Expected Returns</span>
                        <span className="stat-value">{type.expectedReturns}</span>
                      </div>
                    </div>

                    <div className="investment-benefits">
                      <h4>Key Benefits:</h4>
                      <ul>
                        {type.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="investment-plans">
        <div className="container">
          <h2 className="section-title">Investment Plans</h2>
          
          <div className="plans-grid">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="plan-card"
              >
                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-investment">{plan.investment}</div>
                
                <div className="plan-details">
                  <div className="plan-item">
                    <span className="plan-label">Properties:</span>
                    <span className="plan-value">{plan.properties}</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-label">Locations:</span>
                    <span className="plan-value">{plan.locations}</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-label">Returns:</span>
                    <span className="plan-value">{plan.returns}</span>
                  </div>
                </div>

                <div className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="plan-feature">✓ {feature}</div>
                  ))}
                </div>

                <button className="plan-button">Choose Plan</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-invest">
        <div className="container">
          <h2 className="section-title">Why Invest With Sunbreeze Properties?</h2>
          
          <div className="why-invest-grid">
            {whyInvest.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="why-invest-card"
              >
                <div className="why-invest-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="investment-calculator">
        <div className="container">
          <div className="calculator-content">
            <div className="calculator-text">
              <h2>Investment Calculator</h2>
              <p>Calculate your potential returns and plan your investment strategy</p>
              <ul>
                <li>Estimate monthly rental income</li>
                <li>Calculate capital appreciation</li>
                <li>Compare different properties</li>
                <li>Plan your investment timeline</li>
              </ul>
              <button className="btn btn-primary">Use Calculator</button>
            </div>
            <div className="calculator-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" alt="Investment Calculator" />
            </div>
          </div>
        </div>
      </section>

      <section className="investment-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Start Your Investment Journey?</h2>
            <p>Get personalized investment advice from our real estate experts</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Schedule Consultation</button>
              <button className="btn btn-secondary">Download Brochure</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
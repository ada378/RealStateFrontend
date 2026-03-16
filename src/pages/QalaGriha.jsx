import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLandmark, FaHome, FaArrowRight, FaMapMarkerAlt, FaKey, 
  FaBuilding, FaShieldAlt, FaClock, FaHandshake, FaCheckCircle,
  FaChevronDown, FaChevronUp, FaAward, FaUsers, FaProjectDiagram,
  FaTree, FaSwimmingPool, FaParking, FaWifi,
  FaDumbbell, FaShoppingBag, FaHospital, FaSchool, FaBus,
  FaRupeeSign, FaCalendarAlt, FaStar, FaQuoteLeft
} from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import LeadEnquiryForm from '../components/LeadEnquiryForm.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import '../styles/DivisionsPage.css';

const qalagrihaData = {
  name: 'QalaGriha',
  tagline: 'Luxury Villas & Bespoke Living Spaces',
  description: 'QalaGriha represents the pinnacle of luxury living, offering exclusive villas, independent houses, and customized living solutions for those who seek nothing but the best. Our portfolio includes some of the most prestigious addresses in Lucknow and Noida, designed for discerning individuals who appreciate the finer things in life.',
  heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80'
  ],
  stats: [
    { number: '15+', label: 'Villa Projects' },
    { number: '500+', label: 'Villas Delivered' },
    { number: '8+', label: 'Years Experience' },
    { number: '200+', label: 'Cr. Revenue' }
  ],
  features: [
    { icon: FaHome, title: 'Luxury Villas', desc: 'Spacious independent villas with private gardens' },
    { icon: FaKey, title: 'Independent Houses', desc: 'Customizable homes with complete ownership' },
    { icon: FaShieldAlt, title: 'Gated Communities', desc: 'Secure and private living environments' },
    { icon: FaTree, title: 'Lush Greenery', desc: 'Abundant green spaces and landscaped gardens' },
    { icon: FaAward, title: 'Premium Quality', desc: 'Finest materials and craftsmanship' },
    { icon: FaUsers, title: 'Private Lifestyle', desc: 'Exclusive communities with privacy' }
  ],
  amenities: [
    { icon: FaSwimmingPool, name: 'Private Pool' },
    { icon: FaDumbbell, name: 'Club House' },
    { icon: FaParking, name: 'Covered Parking' },
    { icon: FaShieldAlt, name: 'Gated Security' },
    { icon: FaTree, name: 'Private Garden' },
    { icon: FaBus, name: 'School Bus' },
    { icon: FaHospital, name: 'Concierge' },
    { icon: FaSchool, name: 'Nearby Schools' }
  ],
  projects: [
    { name: 'QalaGriha Estates', location: 'Lucknow', type: 'Villa', status: 'Ready to Move', price: '₹1.25 Cr onwards', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
    { name: 'QalaGriha Royal', location: 'Noida', type: 'Villa', status: 'Pre-Launch', price: '₹1.85 Cr onwards', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
    { name: 'QalaGriha Gardens', location: 'Lucknow', type: 'Villa', status: 'Under Construction', price: '₹95 L onwards', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' }
  ],
  testimonials: [
    { name: 'Dr. Sanjay Gupta', role: 'Cardiologist', text: 'QalaGriha offered us the perfect blend of luxury and tranquility. The villa exceeds all our expectations.', rating: 5 },
    { name: 'Meenal Agarwal', role: 'CA', text: 'The attention to detail in QalaGriha is remarkable. Every corner reflects luxury and thoughtful design.', rating: 5 },
    { name: 'Vikram Singh', role: 'Industrialist', text: 'Investing in QalaGriha was the best decision. The appreciation and lifestyle it offers is unmatched.', rating: 5 }
  ],
  highlights: [
    'Private individual entrances',
    'Modular kitchen with premium fixtures',
    'Italian marble flooring',
    'Private terrace/garden',
    'Home automation system',
    'Solar panel ready'
  ]
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QalaGrihaPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const faqData = [
    { question: 'What is the booking process?', answer: 'Our booking process is simple and transparent. Visit our office or site, choose your preferred villa, pay the booking amount, and we will guide you through the entire documentation process.' },
    { question: 'What are the payment plans available?', answer: 'We offer multiple payment plans including construction-linked payment plan, down payment plan, and home loan assistance through our banking partners.' },
    { question: 'Do you provide home loan assistance?', answer: 'Yes, we have tie-ups with leading banks and financial institutions to provide seamless home loan assistance with competitive interest rates.' },
    { question: 'What is the delivery timeline?', answer: 'Delivery timelines vary by project. We provide clear timelines at the time of booking and ensure on-time delivery as committed.' },
    { question: 'Can I customize my villa?', answer: 'Yes, we offer customization options for villa interiors including flooring, kitchen, bathrooms, and more.' }
  ];

  return (
    <div className="divisions-page">
      <Navbar />
      
      <section className="division-section qalagriha" id="qalagriha">
        <div className="division-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${qalagrihaData.heroImage})` }}>
          <div className="division-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="division-hero-text"
            >
              <span className="division-tagline">{qalagrihaData.tagline}</span>
              <h1>{qalagrihaData.name}</h1>
              <p>{qalagrihaData.description}</p>
              <div className="division-hero-btns">
                <Link to="/projects" className="btn-primary">
                  View Projects <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Enquire Now
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="division-stats-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {qalagrihaData.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="division-content">
          <div className="division-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'amenities' ? 'active' : ''}`}
              onClick={() => setActiveTab('amenities')}
            >
              Amenities
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="tab-content"
              >
                <div className="features-grid">
                  {qalagrihaData.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="feature-card"
                    >
                      <div className="feature-icon">
                        <feature.icon />
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="highlights-section">
                  <h3>Key Highlights</h3>
                  <div className="highlights-grid">
                    {qalagrihaData.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <FaCheckCircle />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'amenities' && (
              <motion.div
                key="amenities"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="tab-content"
              >
                <div className="amenities-grid">
                  {qalagrihaData.amenities.map((amenity, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="amenity-card"
                    >
                      <div className="amenity-icon">
                        <amenity.icon />
                      </div>
                      <span>{amenity.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="tab-content"
              >
                <div className="projects-grid">
                  {qalagrihaData.projects.map((project, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="project-card"
                    >
                      <div className="project-img">
                        <img src={project.image} alt={project.name} />
                        <span className="project-status">{project.status}</span>
                      </div>
                      <div className="project-details">
                        <h4>{project.name}</h4>
                        <p className="project-location">
                          <FaMapMarkerAlt /> {project.location}
                        </p>
                        <div className="project-meta">
                          <span className="project-type">{project.type}</span>
                          <span className="project-price">
                            <FaRupeeSign /> {project.price}
                          </span>
                        </div>
                        <Link to="/projects" className="project-link">
                          View Details <FaArrowRight />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'testimonials' && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="tab-content"
              >
                <div className="testimonials-grid">
                  {qalagrihaData.testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="testimonial-card"
                    >
                      <FaQuoteLeft className="quote-icon" />
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <div className="testimonial-author">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="faq-header"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common queries about QalaGriha</p>
          </motion.div>
          
          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <LeadEnquiryForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default QalaGrihaPage;

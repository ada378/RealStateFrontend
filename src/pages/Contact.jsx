import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leads', {
        ...formData,
        type: 'contact',
        source: 'website'
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', propertyType: 'residential', budget: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', info: '+91 98765 43210', link: 'tel:+919876543210', color: 'phone' },
    { icon: <FaEnvelope />, title: 'Email', info: 'info@sunbreeze.in', link: 'mailto:info@sunbreeze.in', color: 'email' },
    { icon: <FaMapMarkerAlt />, title: 'Address', info: 'Lucknow & Noida, UP', link: '#', color: 'location' },
    { icon: <FaClock />, title: 'Working Hours', info: 'Mon-Fri: 9AM - 6PM', link: '#', color: 'time' }
  ];

  return (
    <div className="contact-page">
      <Navbar />
      
      <section className="contact-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-hero-title"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-hero-subtitle"
          >
            We're here to help you find your dream property. Reach out to us today!
          </motion.p>
        </div>
      </section>

      <section className="contact-info-cards">
        <div className="contact-info-cards-container">
          <div className="contact-cards-grid">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`contact-info-card`}
              >
                <div className={`contact-card-icon ${item.color}`}>{item.icon}</div>
                <h3 className="contact-card-title">{item.title}</h3>
                <p className="contact-card-info">{item.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-container">
          <div className="contact-main-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-section"
            >
              <h2 className="contact-form-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Email *"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="villa">Villa</option>
                      <option value="apartment">Apartment</option>
                    </select>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Budget Range"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button type="submit" className="form-button">
                  <FaPaperPlane />
                  Send Message
                </button>
                {status === 'success' && (
                  <div className="form-status success">
                    Thank you! We'll contact you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-status error">
                    Error submitting form. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-map-section"
            >
              <div className="contact-map-container">
                <h2 className="contact-map-title">Visit Our Office</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  className="contact-map"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media</p>
                <div className="social-links">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                    <a key={index} href="#" className="social-link">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

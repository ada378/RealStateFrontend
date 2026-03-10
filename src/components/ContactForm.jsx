import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'apartment',
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
      await axios.post('http://localhost:5000/api/leads', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', propertyType: 'apartment', budget: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's discuss your property needs</p>
        </div>
        
        <div className="contact-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon phone">
                <FaPhone />
              </div>
              <div className="contact-info-text">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon email">
                <FaEnvelope />
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <p>info@eliteestates.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon location">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-text">
                <h4>Address</h4>
                <p>123 Real Estate Ave, City, State 12345</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
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
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="commercial">Commercial</option>
                </select>
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget Range"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="form-input form-textarea"
              />
            </div>
            
            <button
              type="submit"
              className="form-button"
            >
              Submit Inquiry
            </button>
            
            {status === 'success' && (
              <div className="form-status success">
                Thank you! We will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                Error submitting form. Please try again.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

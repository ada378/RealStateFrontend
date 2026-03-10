import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUser, FaEnvelope, FaBuilding, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const LeadEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedProject: 'Sunbreeze Greens'
  });
  const [status, setStatus] = useState('');

  const projects = [
    'Sunbreeze Greens - Lucknow',
    'Sunbreeze Heights - Noida',
    'Sunbreeze Commercial Hub - Noida',
    'Other Projects'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leads', {
        ...formData,
        type: 'enquiry',
        source: 'website'
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', interestedProject: 'Sunbreeze Greens' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="lead-enquiry">
      <div className="enquiry-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="enquiry-header"
        >
          <h2 className="enquiry-title">Interested in Our Projects?</h2>
          <p className="enquiry-subtitle">Get in touch with us for more information</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="enquiry-form"
        >
          <div className="form-group">
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <FaPhoneAlt className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <FaBuilding className="input-icon" />
              <select
                name="interestedProject"
                value={formData.interestedProject}
                onChange={handleChange}
                className="form-input"
              >
                {projects.map((project, index) => (
                  <option key={index} value={project}>{project}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="enquiry-submit-btn">
            <FaPaperPlane />
            Submit Enquiry
          </button>

          {status === 'success' && (
            <div className="form-status success">
              Thank you! We'll contact you soon with more details.
            </div>
          )}
          {status === 'error' && (
            <div className="form-status error">
              Something went wrong. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default LeadEnquiryForm;

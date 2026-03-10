import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUser, FaBuilding, FaCalendarAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const SiteVisitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredProject: 'Sunbreeze Greens - Lucknow',
    preferredDate: ''
  });
  const [status, setStatus] = useState('');

  const projects = [
    'Sunbreeze Greens - Lucknow',
    'Sunbreeze Heights - Noida',
    'Sunbreeze Commercial Hub - Noida'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leads', {
        ...formData,
        type: 'site_visit',
        source: 'website'
      });
      setStatus('success');
      setFormData({ name: '', phone: '', preferredProject: 'Sunbreeze Greens - Lucknow', preferredDate: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="site-visit">
      <div className="site-visit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="site-visit-header"
        >
          <h2 className="site-visit-title">Book a Site Visit</h2>
          <p className="site-visit-subtitle">Experience our projects firsthand with a guided site visit</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="site-visit-form"
        >
          <div className="form-row">
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <div className="input-with-icon">
                <FaBuilding className="input-icon" />
                <select
                  name="preferredProject"
                  value={formData.preferredProject}
                  onChange={handleChange}
                  className="form-input"
                >
                  {projects.map((project, index) => (
                    <option key={index} value={project}>{project}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <FaCalendarAlt className="input-icon" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="site-visit-submit-btn">
            <FaPaperPlane />
            Book Site Visit
          </button>

          {status === 'success' && (
            <div className="form-status success">
              Site visit booked successfully! We'll confirm the details with you soon.
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

export default SiteVisitForm;

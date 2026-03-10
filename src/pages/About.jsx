import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional real estate services with unmatched quality and professionalism.'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Focused',
      description: 'Your dreams and satisfaction are our top priority. We listen, understand, and deliver beyond expectations.'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical practices in every transaction.'
    },
    {
      icon: <FaChartLine />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and market insights to provide the best real estate solutions.'
    }
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-hero-title"
          >
            About Elite Estates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-hero-subtitle"
          >
            Your trusted partner in finding the perfect property for over 15 years
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-story-text"
          >
            <h2>Our Story</h2>
            <p>
              Founded in 2009, Elite Estates has grown from a small local agency to one of the most trusted names in real estate. Our journey began with a simple mission: to help people find not just houses, but homes where memories are made.
            </p>
            <p>
              With over 15 years of experience, we've successfully helped thousands of families find their dream properties. Our team of expert real estate professionals brings unparalleled market knowledge, negotiation skills, and dedication to every transaction.
            </p>
            <p>
              Today, we continue to set industry standards through innovation, integrity, and an unwavering commitment to client satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-story-image"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="About Us"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="about-values-header">
            <h2 className="about-values-title">Our Core Values</h2>
            <p className="about-values-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-stat"
          >
            <h3>15+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="about-stat"
          >
            <h3>500+</h3>
            <p>Properties Sold</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-stat"
          >
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="about-stat"
          >
            <h3>50+</h3>
            <p>Industry Awards</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

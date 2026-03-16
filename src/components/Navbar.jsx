import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaBuilding } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chandraprabha Realty', path: '/divisions#chandraprabha' },
    { name: 'QalaGriha', path: '/qalagriha' },
    { name: 'Projects', path: '/projects' },
    { name: 'Investment', path: '/investment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          
          <div className="logo-content">
            <span className="logo-main">
              <span className="logo-unique">UNIQUE</span>
              <span className="logo-spark">SPARK</span>
              <span className="logo-infra">INFRA</span>
            </span>
            <span className="logo-subtitle">PVT. LTD</span>
          </div>
        </Link>

        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/admin" className="navbar-dashboard">
              Admin
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile active">
          <ul className="navbar-mobile-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`navbar-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="navbar-mobile-link"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

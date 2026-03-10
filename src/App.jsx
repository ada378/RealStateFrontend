import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import Navbar from './components/Navbar';
import 'react-loading-skeleton/dist/skeleton.css';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const Locations = lazy(() => import('./pages/Locations.jsx'));
const Investment = lazy(() => import('./pages/Investment.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));

const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: '#f8fafc'
  }}>
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc">
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </SkeletonTheme>
  );
}

export default App;

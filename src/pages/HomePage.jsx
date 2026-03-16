import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import DeveloperIntro from '../components/DeveloperIntro.jsx';
import Divisions from '../components/Divisions.jsx';
import LegacyImpactMap from '../components/LegacyImpactMap.jsx';
import Projects from '../components/Projects.jsx';
import InvestmentSection from '../components/InvestmentSection.jsx';
import LeadEnquiryForm from '../components/LeadEnquiryForm.jsx';
import SiteVisitForm from '../components/SiteVisitForm.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import EMICalculator from '../components/EMICalculator.jsx';
import InteriorServices from '../components/InteriorServices.jsx';
import '../styles/Divisions.css';
import '../styles/LegacyImpactMap.css';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <DeveloperIntro />
      <Divisions />
      <LegacyImpactMap />
      
      <Projects />
      <InvestmentSection />
       <LeadEnquiryForm />
      {/* <EMICalculator/> */}
      <InteriorServices/>
    
    
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HomePage;
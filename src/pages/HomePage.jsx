import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import DeveloperIntro from '../components/DeveloperIntro.jsx';
import Projects from '../components/Projects.jsx';
import InvestmentSection from '../components/InvestmentSection.jsx';
import LeadEnquiryForm from '../components/LeadEnquiryForm.jsx';
import SiteVisitForm from '../components/SiteVisitForm.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import EMICalculator from '../components/EMICalculator.jsx';
import InteriorServices from '../components/InteriorServices.jsx';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LeadEnquiryForm />
      <DeveloperIntro />
      <Projects />
      <InvestmentSection />
      {/* <EMICalculator/> */}
      <InteriorServices/>
    
    
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HomePage;
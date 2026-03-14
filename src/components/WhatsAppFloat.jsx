import React from 'react';
import { FaWhatsapp, FaUserTie } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8739002047'; // Replace with actual WhatsApp number
    const message = 'Hi! I am interested in Sunbreeze Properties. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCRMClick = () => {
    window.open('https://crm-client-liard.vercel.app/', '_blank');
  };

  return (
    <div className="float-container">
      <div className="crm-float" onClick={handleCRMClick}>
        <FaUserTie className="crm-icon" />
        <div className="crm-tooltip">
          Open CRM Portal
        </div>
      </div>
      <div className="whatsapp-float" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="whatsapp-icon" />
        <div className="whatsapp-tooltip">
          Chat with us on WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
import React from 'react';

const partnersLogos = [
  { name: 'DLF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/DLF_Limited_Logo.svg/200px-DLF_Limited_Logo.svg.png' },
  { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Godrej_Logo.svg/200px-Godrej_Logo.svg.png' },
  { name: 'Prestige', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Prestige_Group_Logo.svg/200px-Prestige_Group_Logo.svg.png' },
  { name: 'Sobha', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sobha_Limited_logo.svg/200px-Sobha_Limited_logo.svg.png' },
  { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mahindra_%26_Mahindra_Logo.svg/200px-Mahindra_%26_Mahindra_Logo.svg.png' },
  { name: 'Tata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png' }
];

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Trusted Partners</h2>
        <p className="partners-subtitle">Collaborating with industry leaders</p>
        
        <div className="partners-grid">
          {partnersLogos.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

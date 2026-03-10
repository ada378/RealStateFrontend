import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the booking process?',
    answer: 'You can book a property by paying a small token amount. Our team will guide you through the entire process including documentation and loan assistance.'
  },
  {
    question: 'What documents are required?',
    answer: 'Required documents include ID proof (Aadhaar/PAN), address proof, income documents, and passport size photographs. Our team will assist you with the complete documentation.'
  },
  {
    question: 'Do you provide home loan assistance?',
    answer: 'Yes, we have tie-ups with major banks and financial institutions to provide hassle-free home loan assistance with competitive interest rates.'
  },
  {
    question: 'What is the possession timeline?',
    answer: 'Most projects are delivered within 2-3 years of booking. Possession timelines vary by project and are mentioned in the agreement.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No, all charges are transparent and mentioned in the agreement. This includes property price, registration charges, and maintenance fees.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

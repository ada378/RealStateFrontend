import React, { useState, useEffect } from 'react';

const EMICalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const numberOfEmis = tenure * 12;
    
    if (principal > 0 && monthlyRate > 0) {
      const calculatedEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfEmis)) / 
        (Math.pow(1 + monthlyRate, numberOfEmis) - 1);
      setEmi(Math.round(calculatedEmi));
    } else {
      setEmi(0);
    }
  }, [propertyPrice, downPayment, interestRate, tenure]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section className="emi-calculator">
      <div className="emi-container">
        <h2 className="emi-title">EMI Calculator</h2>
        <p className="emi-subtitle">Calculate your monthly EMI</p>
        
        <div className="emi-card">
          <div className="emi-inputs">
            <div className="emi-input-group">
              <label>Property Price</label>
              <input 
                type="range" 
                min="2000000" 
                max="20000000" 
                step="100000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
              />
              <span className="emi-value">{formatCurrency(propertyPrice)}</span>
            </div>
            
            <div className="emi-input-group">
              <label>Down Payment</label>
              <input 
                type="range" 
                min="500000" 
                max="10000000" 
                step="50000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
              <span className="emi-value">{formatCurrency(downPayment)}</span>
            </div>
            
            <div className="emi-input-group">
              <label>Interest Rate (% p.a.)</label>
              <input 
                type="range" 
                min="6" 
                max="15" 
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <span className="emi-value">{interestRate}%</span>
            </div>
            
            <div className="emi-input-group">
              <label>Tenure (Years)</label>
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
              <span className="emi-value">{tenure} Years</span>
            </div>
          </div>
          
          <div className="emi-result">
            <div className="emi-monthly">
              <span className="emi-label">Monthly EMI</span>
              <span className="emi-amount">{formatCurrency(emi)}</span>
            </div>
            <div className="emi-details">
              <div className="emi-detail">
                <span>Loan Amount</span>
                <span>{formatCurrency(propertyPrice - downPayment)}</span>
              </div>
              <div className="emi-detail">
                <span>Total Interest</span>
                <span>{formatCurrency((emi * tenure * 12) - (propertyPrice - downPayment))}</span>
              </div>
              <div className="emi-detail">
                <span>Total Payment</span>
                <span>{formatCurrency(downPayment + (emi * tenure * 12))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;

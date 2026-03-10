import React from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Lucknow',
    text: 'Excellent investment opportunity! The property value has appreciated significantly. Very satisfied with the quality and timely delivery.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    location: 'Noida',
    text: 'Beautiful apartments with great amenities. The team was very supportive throughout the buying process. Highly recommended!',
    rating: 5
  },
  {
    name: 'Amit Mishra',
    location: 'Lucknow',
    text: 'Best real estate investment I have made. The location is perfect and the construction quality is outstanding.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">Real feedback from verified buyers</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

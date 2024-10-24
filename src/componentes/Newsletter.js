import React from 'react';

const Newsletter = () => {
  return (
    <div className='News-container'>
      <div className="newsletter-container">
      <h2 className="newsletter-title">NEWSLETTER</h2>
      <p>Get existential crisis delivered straight to your inbox every week.</p>
      <input 
        type="text" 
        placeholder="Your life" 
        className="newsletter-input" 
      />
      <button className="newsletter-button">CLICK ME</button>
      </div>
    </div>

  );
};

export default Newsletter;

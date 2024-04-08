import React from 'react';
import './Description.css'; // Assume you will create a Description.css file for styling

const Description = () => {
  return (
    <div className="description">
      <img src="/images/key.svg" alt="Key" className="key-icon" />
      <div className="text-box">
        <h1>Where sophisticated investors access private markets.</h1>
      </div>
      <div className="text-box">
        <p>10 East is a membership-based investment firm focused on private market exposures for a select community of institutional and individual investors.</p>
      </div>
      <button className="inquire-button">INQUIRE</button>
    </div>
  );
};

export default Description;


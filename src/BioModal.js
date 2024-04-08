import React from 'react';
import './BioModal.css'; // Make sure to create a BioModal.css file for the styles

const BioModal = ({ isOpen, onClose, bioData }) => {
  if (!isOpen) return null;

  return (
    <div className="bio-modal-backdrop">
      <div className="bio-modal-content">
        <h2 className="bio-modal-name">{bioData.name}</h2>
        <h3 className="bio-modal-title">{bioData.title}</h3>
        <p className="bio-modal-description">{bioData.description}</p>
        <button onClick={onClose} className="bio-modal-close-btn">CLOSE</button>
      </div>
    </div>
  );
};

export default BioModal;

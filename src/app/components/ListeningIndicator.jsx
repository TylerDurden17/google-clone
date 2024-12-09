import React from 'react';
import './ListeningIndicator.css';
import { BiSolidMicrophone } from "react-icons/bi";

const ListeningIndicator = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="listening-container">
          <div className="listening-text">Listening...</div>
          <div className="microphone-icon">
          <BiSolidMicrophone style={{fontSize:"100px", color:'#ff3b3b'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningIndicator;
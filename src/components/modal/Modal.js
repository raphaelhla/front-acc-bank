import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, titulo, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>{titulo}</h2>
        {/* <button className="modal-close" onClick={onClose}>X</button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, close }) => (
  <div className={`mobile ${isOpen ? 'show' : 'hide'}`}>
    <button className="close-icon" onClick={close}>
      <i className="fi fi-rr-cross-circle"></i>
    </button>

    <div className="mobile-options" onClick={close}>
      <div className="mobile-option">
        <a href="#work">
          Work
          <i className="fi fi fi-rr-briefcase option-icon"></i>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#skills">
          Skills
          <i className="fi fi-rr-pencil option-icon"></i>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#projects">
          Projects
          <i className="fi fi-rr-browser option-icon"></i>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#certificates">
          Certificates
          <i className="fi fi-rr-badge option-icon"></i>
        </a>
      </div>

      <div className="mobile-option">
        <a href="#contact">
          Contact
          <i className="fi fi-rr-user option-icon"></i>
        </a>
      </div>
    </div>
  </div>
);

export default MobileMenu;

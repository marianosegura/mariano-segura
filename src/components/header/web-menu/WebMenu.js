import React from 'react';
import './WebMenu.css';

const WebMenu = () => (
  <nav className="web">
    <div className="web-option">
      <a href="#work">
        <i className="fi fi-rr-briefcase option-icon"></i>Work
      </a>
    </div>

    <div className="web-option">
      <a href="#skills">
        <i className="fi fi-rr-pencil option-icon"></i>Skills
      </a>
    </div>

    <div className="web-option">
      <a href="#projects">
        <i className="fi fi-rr-browser option-icon"></i>Projects
      </a>
    </div>

    <div className="web-option">
      <a href="#certificates">
        <i className="fi fi-rr-badge option-icon"></i>Certificates
      </a>
    </div>

    <div className="web-option">
      <a href="#contact">
        <i className="fi fi-rr-user option-icon"></i>Contact
      </a>
    </div>
  </nav>
);

export default WebMenu;

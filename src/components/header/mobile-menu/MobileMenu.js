import React from 'react';
import './MobileMenu.css';

function MobileMenu({ isOpen, close }) {
  return (
    <div className={`mobile ${isOpen ? 'show' : 'hide' }`}>
      <div className='close-icon' onClick={close}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>

      <div className='mobile-options' onClick={close}>
        <div className='mobile-option'>
          <a href='#projects'>
            <i className="fi fi-rr-browser option-icon"></i>Projects
          </a>
        </div>

        <div className='mobile-option'>
          <a href='#skills'>
            <i className="fi fi-rr-pencil option-icon"></i>Skills
          </a>
        </div>

        <div className='mobile-option'>
          <a href='#certificates'>
            <i className="fi fi-rr-badge option-icon"></i>Certificates
          </a>
        </div>

        <div className='mobile-option'>
          <a href='#contact'>
            <i className="fi fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

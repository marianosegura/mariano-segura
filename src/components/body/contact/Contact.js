import React from 'react';
import SocialContact from '../social-contact/SocialContact';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <label className='section-title'>
        <i className="fi fi-rr-user option-icon"></i>
        Contact
      </label>
      <p>Want to get in touch? Email me at <strong>lmarianosegura@gmail.com</strong> or contact me on my social media:</p>
      <SocialContact />
    </div>
  )
}

export default Contact

import React from 'react';
import SocialContact from 'components/body/social-contact/SocialContact';

const Contact = () => (
  <div className="contact">
    <label className="section-title">
      <i className="fi fi-rr-user option-icon"></i>
      Contact
    </label>
    <p>
      Want to get in touch? Email me at{' '}
      <strong>marianosegura.dev@gmail.com</strong> or contact me on my social
      media:
    </p>
    <SocialContact />
  </div>
);

export default Contact;

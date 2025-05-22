import SocialContact from './social-contact/SocialContact';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <label className="section-title">
      <i className="fi fi-rr-user option-icon"></i>
      Contact
    </label>
    <p className="contact-message">
      Want to get in touch? Email me at{' '}
      <strong>marianoseguradev@gmail.com</strong> or contact me on my social
      media:
    </p>
    <SocialContact />
  </div>
);

export default Contact;

import './SocialContact.css';
import { contacts } from 'data/contacts';

const SocialContact = () => (
  <div className="social-contact">
    {contacts.map((contact) => (
      <a
        className="social-contact-link"
        key={contact.platform}
        href={contact.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="social-icon-wrapper">
          <img
            src={contact.icon}
            className="social-icon"
            alt={contact.platform}
          />
        </div>
      </a>
    ))}
  </div>
);

export default SocialContact;

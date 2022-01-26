import React from 'react';
import './SocialContact.css';

const socialMediaContacts = [
  {
    platform: "Github",
    link: "https://github.com/marianosegura",
    icon: require('../../../assets/icons/github.png')  // Github Icon by Unicons Font on Iconscout
  },
  {
    platform: "Linkedin",
    link: "https://www.linkedin.com/in/mariano-segura-b55a3322b/",
    icon: require('../../../assets/icons/linkedin.png')  // Linkedin Icon by Unicons Font on Iconscout
  },
  {
    platform: "Facebook",
    link: "https://www.facebook.com/luismariano.segura",
    icon: require('../../../assets/icons/facebook.png')  // Facebook Icon by Unicons Font on Iconscout
  }
];

function SocialContact() {
  return (
    <div className='social-contact'>
      {socialMediaContacts.map(contact => 
        <a key={contact.platform} href={contact.link} target="_blank" rel="noreferrer">
          <div className='social-icon-div'>
            <img src={contact.icon} className='social-icon' alt={contact.platform} />
          </div>
        </a>
      )}
    </div>
  )
}

export default SocialContact

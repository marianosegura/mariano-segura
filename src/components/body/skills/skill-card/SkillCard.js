import React from 'react';
import './Skillcard.css';

const iconExceptions = [
  "MobX", "EJS", "Semantic UI", "Postman", "MongoDB Atlas", 
  "Angular Material", "SQL Server", "SendGrid", "Cloudinary", 
  "JSS", "Mapbox", "SignalR", "Formik", "NgRx"
];

function SkillCard({ name, icon }) {
  return (
    <div className='skill-card'>
      <div className='skill-icon'>
        {iconExceptions.includes(name) ? 
          <img src={require(`../../../../assets/icons/${name}.png`)} alt={name} />
          : <i className={icon}></i>
        }
      </div>
      <label className='skill-name'>{name}</label>
    </div>
  )
}

export default SkillCard

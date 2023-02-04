import React from 'react';
import './Skillcard.css';


function SkillCard({ name, icon, url }) {
  return (
    <a className='skill-card' href={url} target='_blank'>
      <div className='skill-icon'>
          {icon === '' ? 
            <img src={require(`../../../../assets/icons/${name}.png`)} alt={name} />
            : <i className={icon}></i>
          }
      </div>
      <label className='skill-name'>{name}</label>
    </a>
  )
}


export default SkillCard

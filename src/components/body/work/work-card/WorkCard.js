import React from 'react'
import './WorkCard.css';

function WorkCard({ company, role, dateStart, dateEnd, 
    companyLogo, description }) {
  return (
    <div className='work-card'>
      <img src={companyLogo} className='work-logo' alt={company} />
      
      <div className='work-info'>
        <label className='company-name'>{company}</label>
        
        <div className='work-dates'>
          <label>{dateStart} to {dateEnd}</label>
        </div>

        <div className='work-description'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard

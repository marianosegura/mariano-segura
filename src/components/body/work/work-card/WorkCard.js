import React from 'react'
import './WorkCard.css';

function WorkCard({ company, role, dateStart, dateEnd, totalTime, companyLogo, companyUrl, description, workUrl }) {
  return (
    <div className='work-card'>
      <a href={companyUrl} target="_blank" rel="noreferrer">
        <img className='work-logo' src={require(`../../../../assets/icons/${companyLogo}.png`)} alt={company} />
      </a>

      <div className='work-info'>
        <h3 className='company-name'>{company}</h3>
        <h4 className='work-role'>{role}</h4>
        <p className='work-dates'>{dateStart} - {dateEnd}{totalTime ? ` · ${totalTime}` : ''}</p>
        {workUrl && 
          <a className='button-link' href={workUrl} target="_blank" rel="noreferrer">
            <img src={require('../../../../assets/icons/globe.png')} alt='globe' />
            Take a Look!
          </a>
        }
        <p className='work-description'>{description}</p>
        

      </div>
    </div>
  )
}

export default WorkCard

import React from 'react';
import WorkCard from './work-card/WorkCard';
import './Work.css';

const works = [
  {
    company: "Tecnológico de Costa Rica",
    role: "Web Developer Assistant",
    dateStart: "Feb 2022",
    dateEnd: "present",
    totalTime: "",
    companyLogo: "tec",
    companyUrl: "https://www.tec.ac.cr/",
    keyPoints: [
      "Development and maintenance of the institutional website.",
      "Implementing frontend web components in HTML, CSS/SASS and Javascript/JQuery from Figma designs.",
      "Integrating frontend web components in Drupal CMS using PHP Twig templates."
    ],
    workUrl: "https://codepen.io/marianosegura"
  }
];

function Work() {
  return (
    <div className='work'>
      <label className='section-title'>
        <i className="fi fi fi-rr-briefcase option-icon"></i>
        Work
      </label>

      <div className='work-list'>
        {works.map(work => 
          <WorkCard key={work.company} {...work} />
        )}
      </div>
    </div>
  )
}

export default Work

import React from 'react';
import WorkCard from './work-card/WorkCard';
import './Work.css';

const works = [
  {
    company: "Konrad Group",
    role: "Full Stack Developer Intern",
    dateStart: "Feb 2023",
    dateEnd: "May 2023",
    totalTime: "4 months",
    companyLogo: "kg",
    companyUrl: "https://www.konrad.com/",
    keyPoints: [
      "Implementing a web project using Java Spring Boot and React."
    ],
  },
  {
    company: "Tecnológico de Costa Rica",
    role: "Web Developer Assistant",
    dateStart: "Feb 2022",
    dateEnd: "Nov 2022",
    totalTime: "10 months",
    companyLogo: "tec",
    companyUrl: "https://www.tec.ac.cr/",
    keyPoints: [
      "Contributed to the development and migration of the university website.",
      "Implemented frontend web components in HTML, CSS/SASS and Javascript/JQuery from Figma designs.",
      "Integrated frontend web components in Drupal CMS using PHP Twig templates."
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

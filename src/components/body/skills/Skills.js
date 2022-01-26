import React, { Fragment } from 'react';
import SkillCard from './skill-card/SkillCard';
import './Skills.css';

const skillsGroups = [
  {
    title: "Frontend",
    skills: [  
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "EJS", icon: "" },
      { name: "React Redux", icon: "devicon-redux-original colored" },
      { name: "NgRx", icon: "" },
      { name: "MobX", icon: "" },
      { name: "Material UI", icon: "devicon-materialui-plain colored" },
      { name: "Semantic UI", icon: "" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Angular Material", icon: "" },
      { name: "JSS", icon: "" },
      { name: "Formik", icon: "" },
      { name: "Next.js", icon: "devicon-nextjs-plain-wordmark colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node", icon: "devicon-nodejs-plain colored" },
      { name: ".NET Core", icon: "devicon-dotnetcore-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "SignalR", icon: "" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "SQL Server", icon: "" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Github", icon: "devicon-github-original colored" },
      { name: "Postman", icon: "" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Webpack", icon: "devicon-webpack-plain colored" },
      { name: "Heroku", icon: "devicon-heroku-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
      { name: "MongoDB Atlas", icon: "" },
      { name: "SendGrid", icon: "" },
      { name: "Cloudinary", icon: "" },
      { name: "Mapbox", icon: "" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
    ]
  }
];

function Skills() {
  return (
    <div className='skills'>
      <label className='section-title'>
      <i className="fi fi-rr-pencil option-icon"></i>
      Skills
    </label>
      
      <div className='skills-container'>
        {skillsGroups.map((skillGroup, i) => 
          <Fragment key={skillGroup.title}>
            <div className='skills-section'>
              <label className='skills-section-title'>{skillGroup.title}</label>
              
              <div className='skills-list'>
                {skillGroup.skills.map(skill => 
                  <SkillCard key={skill.name} {...skill} />
                )}
              </div>
            </div>
            {i < skillsGroups.length - 1 &&
              <div className='light-separator' />
            }
          </Fragment>
        )}
      </div>

    </div>
  )
}

export default Skills

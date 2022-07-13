import React, { Fragment } from 'react';
import SkillCard from './skill-card/SkillCard';
import './Skills.css';

const skillsGroups = [
  {
    title: "Frontend",
    skills: [  
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "React Redux", icon: "devicon-redux-original colored" },
      { name: "NgRx", icon: "" },
      { name: "MobX", icon: "" },
      { name: "Material UI", icon: "devicon-materialui-plain colored" },
      { name: "Semantic UI", icon: "" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Angular Material", icon: "" },
      { name: "SASS", icon: "devicon-sass-original colored" },
      { name: "JSS", icon: "" },
      { name: "Formik", icon: "" },
      { name: "EJS", icon: "" },
      { name: "Next.js", icon: "devicon-nextjs-plain-wordmark colored" },
      { name: "JQuery", icon: "devicon-jquery-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
      { name: "Webpack", icon: "devicon-webpack-plain colored" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node", icon: "devicon-nodejs-plain colored" },
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Docker Compose", icon: "" },
      { name: "Skaffold", icon: "" },
      { name: "NATS Streaming", icon: "" },
      { name: "RabbitMQ", icon: "" },
      { name: "NGINX Ingress", icon: "" },
      { name: "Ocelot", icon: "" },
      { name: "Mongoose", icon: "" },
      { name: "Express Validator", icon: "" },
      { name: "OptimalBits Bull", icon: "" },
      { name: "Sideway JOI", icon: "" },
      { name: "Passport.js", icon: "" },
      { name: "Helmet.js", icon: "" },
      { name: "Jest", icon: "devicon-jest-plain colored" },
      { name: "gRPC", icon: "" },
      { name: "Entity Framework", icon: "" },
      { name: "SignalR", icon: "" },
      { name: "MassTransit", icon: "" },
      { name: "MediatR", icon: "" },
      { name: "Dapper", icon: "" },
      { name: "AutoMapper", icon: "" },
      { name: "Fluent Validation", icon: "" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "SQL Server", icon: "" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Github", icon: "devicon-github-original colored" },
      { name: "Github Actions", icon: "" },
      { name: "Heroku", icon: "devicon-heroku-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
      { name: "MongoDB Atlas", icon: "" },
      { name: "SendGrid", icon: "" },
      { name: "Stripe", icon: "" },
      { name: "Cloudinary", icon: "" },
      { name: "Mapbox", icon: "" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
      { name: "Portainer", icon: "" },
      { name: "Postman", icon: "" },
      { name: "Swagger", icon: "" },
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

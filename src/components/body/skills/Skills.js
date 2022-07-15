import React, { Fragment } from 'react';
import SkillCard from './skill-card/SkillCard';
import './Skills.css';

const skillsGroups = [
  {
    title: "Frontend",
    skills: [  
      { name: "React", icon: "devicon-react-original colored", url: "https://reactjs.org/" },
      { name: "Angular", icon: "devicon-angularjs-plain colored", url: "https://angularjs.org/" },
      { name: "React Redux", icon: "devicon-redux-original colored", url: "https://react-redux.js.org/" },
      { name: "NgRx", icon: "", url: "https://ngrx.io/" },
      { name: "MobX", icon: "", url: "https://mobx.js.org/README.html" },
      { name: "Material UI", icon: "devicon-materialui-plain colored", url: "https://mui.com/" },
      { name: "Semantic UI", icon: "", url: "https://semantic-ui.com/" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", url: "https://getbootstrap.com/" },
      { name: "Angular Material", icon: "", url: "https://material.angular.io/" },
      { name: "SASS", icon: "devicon-sass-original colored", url: "https://sass-lang.com/" },
      { name: "JSS", icon: "", url: "https://cssinjs.org/?v=v10.9.1-alpha.2" },
      { name: "Formik", icon: "", url: "https://formik.org/" },
      { name: "EJS", icon: "", url: "https://ejs.co/" },
      { name: "Next.js", icon: "devicon-nextjs-plain-wordmark colored", url: "https://nextjs.org/" },
      { name: "JQuery", icon: "devicon-jquery-plain colored", url: "https://jquery.com/" },
      { name: "HTML5", icon: "devicon-html5-plain colored", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
      { name: "CSS", icon: "devicon-css3-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Javascript", icon: "devicon-javascript-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Typescript", icon: "devicon-typescript-plain colored", url: "https://www.typescriptlang.org/" },
      { name: "Webpack", icon: "devicon-webpack-plain colored", url: "https://webpack.js.org/" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", url: "https://nodejs.org/en/" },
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored", url: "https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet-core" },
      { name: "Express.js", icon: "devicon-express-original colored", url: "https://expressjs.com/" },
      { name: "Docker", icon: "devicon-docker-plain colored", url: "https://www.docker.com/" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", url: "https://kubernetes.io/" },
      { name: "Docker Compose", icon: "", url: "https://docs.docker.com/compose/" },
      { name: "Skaffold", icon: "", url: "https://skaffold.dev/" },
      { name: "NATS Streaming", icon: "", url: "https://nats.io/" },
      { name: "RabbitMQ", icon: "", url: "https://www.rabbitmq.com/" },
      { name: "NGINX Ingress", icon: "", url: "https://github.com/nginxinc/kubernetes-ingress" },
      { name: "Ocelot", icon: "", url: "https://github.com/ThreeMammals/Ocelot" },
      { name: "Nodemon", icon: "", url: "https://nodemon.io/" },
      { name: "Mongoose", icon: "", url: "https://mongoosejs.com/" },
      { name: "Express Validator", icon: "", url: "https://express-validator.github.io/docs/" },
      { name: "Bull", icon: "", url: "https://github.com/OptimalBits/bull" },
      { name: "joi", icon: "", url: "https://joi.dev/" },
      { name: "Passport.js", icon: "", url: "https://www.passportjs.org/" },
      { name: "Helmet.js", icon: "", url: "https://helmetjs.github.io/" },
      { name: "Jest", icon: "devicon-jest-plain colored", url: "https://jestjs.io/" },
      { name: "gRPC", icon: "", url: "https://grpc.io/" },
      { name: "Entity Framework", icon: "", url: "https://docs.microsoft.com/en-us/ef/" },
      { name: "SignalR", icon: "", url: "https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr" },
      { name: "MassTransit", icon: "", url: "https://masstransit-project.com/" },
      { name: "MediatR", icon: "", url: "https://github.com/jbogard/MediatR" },
      { name: "Dapper", icon: "", url: "https://github.com/DapperLib/Dapper" },
      { name: "AutoMapper", icon: "", url: "https://automapper.org/" },
      { name: "Fluent Validation", icon: "", url: "https://docs.fluentvalidation.net/en/latest/" },
      { name: "C#", icon: "devicon-csharp-plain colored", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
      { name: "Java", icon: "devicon-java-plain colored", url: "https://www.java.com/en/" },
      { name: "Python", icon: "devicon-python-plain colored", url: "https://www.python.org/" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", url: "https://www.mongodb.com/" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", url: "https://www.postgresql.org/" },
      { name: "MySQL", icon: "devicon-mysql-plain colored", url: "https://www.mysql.com/" },
      { name: "SQL Server", icon: "", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "Redis", icon: "devicon-redis-plain colored", url: "https://redis.io/" },
      { name: "Oracle Database", icon: "devicon-oracle-plain colored", url: "https://www.oracle.com/database/" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Github", icon: "devicon-github-original colored", url: "https://github.com/" },
      { name: "Github Actions", icon: "", url: "https://github.com/features/actions" },
      { name: "Heroku", icon: "devicon-heroku-plain colored", url: "https://www.heroku.com/" },
      { name: "Firebase", icon: "devicon-firebase-plain colored", url: "https://firebase.google.com/" },
      { name: "AWS", icon: "devicon-amazonwebservices-original colored", url: "https://aws.amazon.com/" },
      { name: "MongoDB Atlas", icon: "", url: "https://www.mongodb.com/atlas" },
      { name: "SendGrid", icon: "", url: "https://sendgrid.com/" },
      { name: "Stripe", icon: "", url: "https://stripe.com/" },
      { name: "Cloudinary", icon: "", url: "https://cloudinary.com/" },
      { name: "Mapbox", icon: "", url: "https://www.mapbox.com/" },
      { name: "VS Code", icon: "devicon-vscode-plain colored", url: "https://code.visualstudio.com/" },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored", url: "https://visualstudio.microsoft.com/" },
      { name: "Portainer", icon: "", url: "https://www.portainer.io/" },
      { name: "Postman", icon: "", url: "https://www.postman.com/" },
      { name: "Swagger", icon: "", url: "https://swagger.io/" },
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

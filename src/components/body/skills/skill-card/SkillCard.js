import React from 'react';
import './Skillcard.css';


const iconExceptions = [
  "MobX", "EJS", "Semantic UI", "Postman", "MongoDB Atlas", 
  "Angular Material", "SQL Server", "SendGrid", "Cloudinary", 
  "JSS", "Mapbox", "SignalR", "Formik", "NgRx", "Mongoose", 
  "Skaffold", "Entity Framework", "NATS Streaming", "NGINX Ingress",
  "Swagger", "Stripe", "Github Actions", "gRPC", "MediatR",
  "Dapper", "AutoMapper", "Fluent Validation", "RabbitMQ",
  "MassTransit", "Ocelot", "Portainer", "Docker Compose",
  "Express Validator", "Bull", "joi", "Figma",
  "Passport.js", "Helmet.js", "Nodemon"
];

function SkillCard({ name, icon, url }) {
  return (
    <a className='skill-card' href={url} target='_blank'>
      <div className='skill-icon'>
        {/* <a href={url} target='_blank'> */}
          {iconExceptions.includes(name) ? 
            <img src={require(`../../../../assets/icons/${name}.png`)} alt={name} />
            : <i className={icon}></i>
          }
        {/* </a> */}
      </div>
      <label className='skill-name'>{name}</label>
    </a>
  )
}

export default SkillCard

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
  "Express Validator", "OptimalBits Bull", "Sideway JOI",
  "Passport.js", "Helmet.js"
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

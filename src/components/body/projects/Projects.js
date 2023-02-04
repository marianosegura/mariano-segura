import React, { Fragment } from 'react';
import Project from './project/Project';
import './Projects.css';


const projects = [
  {
    id: 10,
    title: "Unidad de Postgrados Computación TEC",
    about: "A thesis defense scheduling and management system for the graduate unit of the Computing Engineering School at the Tecnológico de Costa Rica. It digitizes the whole process, makes it more efficient, automates previously manual document generation and email sending.",
    tags: ["Node.js", "Express.js", "Typescript", "Express Validator", "Nodemailer", "Mongoose", "MongoDB", "Angular", "PrimeNG"],
    githubUrl: "https://github.com/MrLuis137/Proyecto-unidad-Postgrados",
    images: [ 
      { name: "postgrados-8.png", file: require('../../../assets/screenshots/postgrados-8.png') },
      { name: "postgrados-7.png", file: require('../../../assets/screenshots/postgrados-7.png') },
      { name: "postgrados-6.png", file: require('../../../assets/screenshots/postgrados-6.png') },
      { name: "postgrados-9.png", file: require('../../../assets/screenshots/postgrados-9.png') },
      { name: "postgrados-4.png", file: require('../../../assets/screenshots/postgrados-4.png') },
      { name: "postgrados-3.png", file: require('../../../assets/screenshots/postgrados-3.png') },
      { name: "postgrados-2.png", file: require('../../../assets/screenshots/postgrados-2.png') },
      { name: "postgrados-5.png", file: require('../../../assets/screenshots/postgrados-5.png') },
      { name: "postgrados-1.png", file: require('../../../assets/screenshots/postgrados-1.png') }
    ]
  },
  {
    id: 9,
    title: "MEP Digital",
    about: "Website to manage elementary school courses built with Node.js backend and React frontend. With email features to get list of students as pdf and receive registration password.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Nodemon", "SendGrid", "React"],
    githubUrl: "https://github.com/marianosegura/MEP_Digital_web",
    images: [ 
      { name: "mep-1.png", file: require('../../../assets/screenshots/mep-1.png') },
      { name: "mep-2.png", file: require('../../../assets/screenshots/mep-2.png') },
      { name: "mep-3.png", file: require('../../../assets/screenshots/mep-3.png') },
      { name: "mep-4.png", file: require('../../../assets/screenshots/mep-4.png') },
      { name: "mep-5.png", file: require('../../../assets/screenshots/mep-5.png') },
      { name: "mep-6.png", file: require('../../../assets/screenshots/mep-6.png') },
      { name: "mep-7.png", file: require('../../../assets/screenshots/mep-7.png') },
      { name: "mep-8.png", file: require('../../../assets/screenshots/mep-8.png') },
      { name: "mep-9.png", file: require('../../../assets/screenshots/mep-9.png') },
      { name: "mep-10.png", file: require('../../../assets/screenshots/mep-10.png') },
    ]
  },
  {
    id: 8,
    title: "Auction Web",
    about: "Auction website built with Node, Express and EJS. Built with heavy focus on stored functions/procedures and roles. Two database versions implemented: PostgreSQL and Oracle.",
    tags: ["Stored Procedures", "Stored Functions", "Roles", "Node.js", "Express.js", "EJS", "Passport.js", "PostgreSQL", "Oracle Database"  ],
    githubUrl: "https://github.com/marianosegura/Auction-Web",
    images: [ 
      { name: "auctions-1.png", file: require('../../../assets/screenshots/auctions-1.png') },
      { name: "auctions-2.png", file: require('../../../assets/screenshots/auctions-2.png') },
      { name: "auctions-3.png", file: require('../../../assets/screenshots/auctions-3.png') },
      { name: "auctions-4.png", file: require('../../../assets/screenshots/auctions-4.png') },
      { name: "auctions-5.png", file: require('../../../assets/screenshots/auctions-5.png') },
      { name: "auctions-6.png", file: require('../../../assets/screenshots/auctions-6.png') },
      { name: "auctions-7.png", file: require('../../../assets/screenshots/auctions-7.png') },
      { name: "auctions-8.png", file: require('../../../assets/screenshots/auctions-8.png') },
      { name: "auctions-9.png", file: require('../../../assets/screenshots/auctions-9.png') },
    ]
  },
  {
    id: 6,
    title: "Tickets Microservices",
    about: "Tickets e-commerce website built using microservices. Made with Node.js (Express.js), React (Next.js), NATS Streaming, MongoDB. With configuration files to be deployed with Kubernetes (Skaffold).",
    tags: ["Node.js", "Express.js", "Typescript", "Express Validator", "Docker", "Kubernetes", "Skaffold", "NATS Streaming", "NGINX Ingress", "Mongoose", "Jest", "Stripe", "Next.js", "MongoDB", "Redis", "Bull", "Github Actions"],
    githubUrl: "https://github.com/marianosegura/tickets-microservices",
    images: [ 
      { name: "tickets-1.png", file: require('../../../assets/screenshots/tickets-1.png') },
      { name: "tickets-2.png", file: require('../../../assets/screenshots/tickets-2.png') },
      { name: "tickets-3.png", file: require('../../../assets/screenshots/tickets-3.png') },
      { name: "tickets-4.png", file: require('../../../assets/screenshots/tickets-4.png') },
      { name: "tickets-5.png", file: require('../../../assets/screenshots/tickets-5.png') },
      { name: "tickets-6.png", file: require('../../../assets/screenshots/tickets-6.png') },
      { name: "tickets-7.png", file: require('../../../assets/screenshots/tickets-7.png') }
    ]
  },
  {
    id: 7,
    title: "Shop Microservices",
    about: "Shop website built using microservices. Made with ASP.NET 5, RabbitMQ (with MassTransit), gRPC, Ocelot Gateway, Razor Pages, MongoDB, Redis, PostgreSQL and SQL Server. With configuration files to be deployed with Docker Compose.",
    tags: ["ASP.Net Core", "RabbitMQ", "Docker", "Docker Compose", "gRPC", "Entity Framework", "AutoMapper", "Fluent Validation", "MongoDB", "Redis", "PostgreSQL", "SQL Server", "MassTransit", "Ocelot", "MediatR", "Dapper", "Razor Pages", "Portainer"],
    githubUrl: "https://github.com/marianosegura/Shop-Microservices",
    images: [ 
      { name: "netshop-1.png", file: require('../../../assets/screenshots/netshop-1.png') },
      { name: "netshop-2.png", file: require('../../../assets/screenshots/netshop-2.png') },
      { name: "netshop-3.png", file: require('../../../assets/screenshots/netshop-3.png') },
      { name: "netshop-4.png", file: require('../../../assets/screenshots/netshop-4.png') },
      { name: "netshop-5.png", file: require('../../../assets/screenshots/netshop-5.png') },
    ]
  },
  {
    id: 3,
    title: "Reactivities",
    about: "Activity-based social media website. Includes features such as email registration confirmation, infinite scrolling and live comments chat (websockets).",
    tags: ["React", "Typescript", "MobX", "Semantic UI", "Formik", "ASP.Net Core", "SignalR", "SendGrid", "Cloudinary", "Entity Framework", "JWT", "PostgreSQL"],
    githubUrl: "https://github.com/marianosegura/Reactivities",
    images: [ 
      { name: "reactivities-4.png", file: require('../../../assets/screenshots/reactivities-4.png') },
      { name: "reactivities-2.png", file: require('../../../assets/screenshots/reactivities-2.png') },
      { name: "reactivities-1.png", file: require('../../../assets/screenshots/reactivities-1.png') },
      { name: "reactivities-3.png", file: require('../../../assets/screenshots/reactivities-3.png') },
      { name: "reactivities-5.png", file: require('../../../assets/screenshots/reactivities-5.png') },
      { name: "reactivities-6.png", file: require('../../../assets/screenshots/reactivities-6.png') },
      { name: "reactivities-7.png", file: require('../../../assets/screenshots/reactivities-7.png') },
      { name: "reactivities-8.png", file: require('../../../assets/screenshots/reactivities-8.png') },
      { name: "reactivities-9.png", file: require('../../../assets/screenshots/reactivities-9.png') },
      { name: "reactivities-10.png", file: require('../../../assets/screenshots/reactivities-10.png') },
    ]
  },
  {
    id: 5,
    title: "MEAN Posts",
    about: "MEAN stack website about posts. Includes pagination.",
    tags: ["Angular", "Node", "Expres.js", "Angular Material", "JWT", "Pagination", "MongoDB"],
    githubUrl: "https://github.com/marianosegura/MEAN-Posts",
    images: [ 
      { name: "posts-1.png", file: require('../../../assets/screenshots/posts-1.png') },
      { name: "posts-2.png", file: require('../../../assets/screenshots/posts-2.png') },
      { name: "posts-3.png", file: require('../../../assets/screenshots/posts-3.png') },
      { name: "posts-4.png", file: require('../../../assets/screenshots/posts-4.png') },
    ]
  },
  {
    id: 2,
    title: "YelpCamp",
    about: "Campgrounds website to see, post and review camping spots.",
    tags: ["Node", "Express.js", "EJS", "Bootstrap", "MongoDB", "JWT", "Cloudinary", "Mapbox"],
    githubUrl: "https://github.com/marianosegura/YelpCamp",
    images: [ 
      { name: "yelp-1.png", file: require('../../../assets/screenshots/yelp-1.png') },
      { name: "yelp-6.png", file: require('../../../assets/screenshots/yelp-6.png') },
      { name: "yelp-2.png", file: require('../../../assets/screenshots/yelp-2.png') },
      { name: "yelp-3.png", file: require('../../../assets/screenshots/yelp-3.png') },
      { name: "yelp-4.png", file: require('../../../assets/screenshots/yelp-4.png') },
      { name: "yelp-5.png", file: require('../../../assets/screenshots/yelp-5.png') },
    ]
  },
  {
    id: 1,
    title: "React Colors",
    about: "Color palette app. Focused on responsiveness and animations.",
    tags: ["React", "Material UI", "JSS"],
    githubUrl: "https://github.com/marianosegura/React-Colors",
    images: [ 
      { name: "colors-1.png", file: require('../../../assets/screenshots/colors-1.png') },
      { name: "colors-2.png", file: require('../../../assets/screenshots/colors-2.png') },
      { name: "colors-3.png", file: require('../../../assets/screenshots/colors-3.png') },
      { name: "colors-4.png", file: require('../../../assets/screenshots/colors-4.png') },
      { name: "colors-5.png", file: require('../../../assets/screenshots/colors-5.png') },
      { name: "colors-6.png", file: require('../../../assets/screenshots/colors-6.png') },
    ]
  }
];

function Projects() {
  return (
    <div className='projects'>
      <label className='section-title'>
        <i className="fi fi-rr-browser option-icon"></i>
        Projects
      </label>
      
      <div>
        {projects.map((project, i) => 
          <Fragment key={project.id}>
            <Project {...project} />
            {i < projects.length - 1 &&
              <div className='light-separator' />
            }
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Projects

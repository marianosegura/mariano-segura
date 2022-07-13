import React, { Fragment } from 'react';
import Project from './project/Project';
import './Projects.css';


const projects = [
  {
    id: 5,
    title: "Tickets Microservices",
    about: "Tickets e-commerce website built using microservices. Made with Node.js (Express.js), React (Next.js), NATS Streaming, MongoDB. With configuration files to be deployed with Kubernetes (Skaffold).",
    tags: ["Node.js", "Express.js", "Typescript", "Express Validator", "Docker", "Kubernetes", "Skaffold", "NATS Streaming", "NGINX Ingress", "Mongoose", "Jest", "Stripe", "Next.js", "MongoDB", "Redis", "Bull", "Github Actions"],
    githubUrl: "https://github.com/marianosegura/tickets-microservices",
    images: [ 
      {
        name: "tickets-1.png",
        file: require('../../../assets/screenshots/tickets-1.png')
      },
      {
        name: "tickets-2.png",
        file: require('../../../assets/screenshots/tickets-2.png')
      },
      {
        name: "tickets-3.png",
        file: require('../../../assets/screenshots/tickets-3.png')
      },
      {
        name: "tickets-4.png",
        file: require('../../../assets/screenshots/tickets-4.png')
      },
      {
        name: "tickets-5.png",
        file: require('../../../assets/screenshots/tickets-5.png')
      },
      {
        name: "tickets-6.png",
        file: require('../../../assets/screenshots/tickets-6.png')
      },
      {
        name: "tickets-7.png",
        file: require('../../../assets/screenshots/tickets-7.png')
      },
    ]
  },
  {
    id: 6,
    title: "Shop Microservices",
    about: "Shop website built using microservices. Made with ASP.NET 5, RabbitMQ (with MassTransit), gRPC, Ocelot Gateway, Razor Pages, MongoDB, Redis, PostgreSQL and SQL Server. With configuration files to be deployed with Docker Compose.",
    tags: ["ASP.Net Core", "RabbitMQ", "Docker", "Docker Compose", "gRPC", "Entity Framework", "AutoMapper", "Fluent Validation", "MongoDB", "Redis", "PostgreSQL", "SQL Server", "MassTransit", "Ocelot", "MediatR", "Dapper", "Razor Pages", "Portainer"],
    githubUrl: "https://github.com/marianosegura/Shop-Microservices",
    images: [ 
      {
        name: "netshop-1.png",
        file: require('../../../assets/screenshots/netshop-1.png')
      },
      {
        name: "netshop-2.png",
        file: require('../../../assets/screenshots/netshop-2.png')
      },
      {
        name: "netshop-3.png",
        file: require('../../../assets/screenshots/netshop-3.png')
      },
      {
        name: "netshop-4.png",
        file: require('../../../assets/screenshots/netshop-4.png')
      },
      {
        name: "netshop-5.png",
        file: require('../../../assets/screenshots/netshop-5.png')
      },
    ]
  },
  {
    id: 3,
    title: "Reactivities",
    about: "Activity-based social media website. Includes features such as email registration confirmation, infinite scrolling and live comments chat (websockets).",
    tags: ["React", "Typescript", "MobX", "Semantic UI", "Formik", "ASP.Net Core", "SignalR", "SendGrid", "Cloudinary", "Entity Framework", "JWT", "PostgreSQL"],
    demoUrl: "https://the-reactivities.herokuapp.com/",
    githubUrl: "https://github.com/marianosegura/Reactivities",
    images: [ 
      {
        name: "reactivities-4.png",
        file: require('../../../assets/screenshots/reactivities-4.png')
      },
      {
        name: "reactivities-2.png",
        file: require('../../../assets/screenshots/reactivities-2.png')
      },
      {
        name: "reactivities-1.png",
        file: require('../../../assets/screenshots/reactivities-1.png')
      },
      {
        name: "reactivities-3.png",
        file: require('../../../assets/screenshots/reactivities-3.png')
      },
      {
        name: "reactivities-5.png",
        file: require('../../../assets/screenshots/reactivities-5.png')
      },
      {
        name: "reactivities-6.png",
        file: require('../../../assets/screenshots/reactivities-6.png')
      },
      {
        name: "reactivities-7.png",
        file: require('../../../assets/screenshots/reactivities-7.png')
      },
      {
        name: "reactivities-8.png",
        file: require('../../../assets/screenshots/reactivities-8.png')
      },
      {
        name: "reactivities-9.png",
        file: require('../../../assets/screenshots/reactivities-9.png')
      },
      {
        name: "reactivities-10.png",
        file: require('../../../assets/screenshots/reactivities-10.png')
      },
    ]
  },
  {
    id: 5,
    title: "MEAN Posts",
    about: "MEAN stack website about posts. Includes pagination.",
    tags: ["Angular", "Node", "Expres.js", "Angular Material", "JWT", "Pagination", "MongoDB"],
    demoUrl: "https://the-mean-posts.herokuapp.com/",
    githubUrl: "https://github.com/marianosegura/MEAN-Posts",
    images: [ 
      {
        name: "posts-1.png",
        file: require('../../../assets/screenshots/posts-1.png')
      },
      {
        name: "posts-2.png",
        file: require('../../../assets/screenshots/posts-2.png')
      },
      {
        name: "posts-3.png",
        file: require('../../../assets/screenshots/posts-3.png')
      },
      {
        name: "posts-4.png",
        file: require('../../../assets/screenshots/posts-4.png')
      },
    ]
  },
  {
    id: 2,
    title: "YelpCamp",
    about: "Campgrounds website to see, post and review camping spots.",
    tags: ["Node", "Express.js", "EJS", "Bootstrap", "MongoDB", "JWT", "Cloudinary", "Mapbox"],
    demoUrl: "https://the-yelpcamp.herokuapp.com/",
    githubUrl: "https://github.com/marianosegura/YelpCamp",
    images: [ 
      {
        name: "yelp-1.png",
        file: require('../../../assets/screenshots/yelp-1.png')
      },
      {
        name: "yelp-6.png",
        file: require('../../../assets/screenshots/yelp-6.png')
      },
      {
        name: "yelp-2.png",
        file: require('../../../assets/screenshots/yelp-2.png')
      },
      {
        name: "yelp-3.png",
        file: require('../../../assets/screenshots/yelp-3.png')
      },
      {
        name: "yelp-4.png",
        file: require('../../../assets/screenshots/yelp-4.png')
      },
      {
        name: "yelp-5.png",
        file: require('../../../assets/screenshots/yelp-5.png')
      },
    ]
  },
  {
    id: 1,
    title: "React Colors",
    about: "Color palette app. Focused on responsiveness and animations.",
    tags: ["React", "Material UI", "JSS"],
    demoUrl: "https://massive-colors.herokuapp.com/",
    githubUrl: "https://github.com/marianosegura/React-Colors",
    images: [ 
      {
        name: "colors-1.png",
        file: require('../../../assets/screenshots/colors-1.png')
      },
      {
        name: "colors-2.png",
        file: require('../../../assets/screenshots/colors-2.png')
      },
      {
        name: "colors-3.png",
        file: require('../../../assets/screenshots/colors-3.png')
      },
      {
        name: "colors-4.png",
        file: require('../../../assets/screenshots/colors-4.png')
      },
      {
        name: "colors-5.png",
        file: require('../../../assets/screenshots/colors-5.png')
      },
      {
        name: "colors-6.png",
        file: require('../../../assets/screenshots/colors-6.png')
      },
    ]
  },
  {
    id: 4,
    title: "Recipe Book",
    about: "Cook app to manage recipes and a shopping list.",
    tags: ["Angular", "Bootstrap", "NgRx", "Firebase"],
    demoUrl: "https://angular-course-60904.web.app/",
    githubUrl: "https://github.com/marianosegura/Recipe-Book",
    images: [ 
      {
        name: "recipes-2.png",
        file: require('../../../assets/screenshots/recipes-2.png')
      },
      {
        name: "recipes-1.png",
        file: require('../../../assets/screenshots/recipes-1.png')
      },
      {
        name: "recipes-3.png",
        file: require('../../../assets/screenshots/recipes-3.png')
      },
      {
        name: "recipes-4.png",
        file: require('../../../assets/screenshots/recipes-4.png')
      },
      {
        name: "recipes-5.png",
        file: require('../../../assets/screenshots/recipes-5.png')
      },
    ]
  },
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

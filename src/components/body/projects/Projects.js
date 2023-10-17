import React, { Fragment } from 'react';
import Project from './project/Project';
import './Projects.css';
import { projects } from 'data/projects';

const Projects = () => (
  <div className="projects">
    <label className="section-title">
      <i className="fi fi-rr-browser option-icon"></i>
      Projects
    </label>

    <div>
      {projects.map((project, i) => (
        <Fragment key={project.title}>
          <Project {...project} />
          {i < projects.length - 1 && <div className="light-separator" />}
        </Fragment>
      ))}
    </div>
  </div>
);

export default Projects;

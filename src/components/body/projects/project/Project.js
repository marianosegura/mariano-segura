import React from 'react';
import Carousel from 'components/common/carousel/Carousel';
import './Project.css';

const Project = ({ title, about, tags, demoUrl, githubUrl, images }) => (
  <div className="project">
    <div className="project-info">
      <label className="project-title">{title}</label>

      <div className="project-links">
        <a
          className="button-link"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require('assets/icons/github-white.webp')}
            alt="github logo"
            style={{ height: '24px' }}
          />
          Repo
        </a>
        {demoUrl && (
          <a
            className="button-link"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('assets/icons/globe.webp')} alt="globe" />
            Try It!
          </a>
        )}
      </div>

      <p>{about}</p>

      <div className="project-tags">
        {tags.map((tag) => (
          <label key={tag} className="project-tag">
            {tag}
          </label>
        ))}
      </div>
    </div>

    <div className="project-carousel">
      <Carousel
        carouselName={`${title.replace(/\s+/g, '')}-carousel`}
        images={images}
      />
    </div>
  </div>
);

export default Project;

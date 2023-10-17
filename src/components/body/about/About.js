import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <div className="about-top">
      <div className="about-info">
        Hello, I am
        <br />
        <br /> <span className="info-name">Mariano Segura</span>
        <br />{' '}
        <span className="info-title">
          <em>Full Stack Developer</em>
        </span>
        <br />
        <br />I love everything web development
      </div>

      <div className="about-illustration">
        {/* illustration 'Javascript frameworks Flat Illustrations' by storyset.com */}
        <img
          className="illustration spot"
          src={require('assets/illustration/spot.webp')}
          alt="illustration spot"
        />
        <img
          className="illustration bg"
          src={require('assets/illustration/background.webp')}
          alt="illustration background"
        />
        <img
          className="illustration code"
          src={require('assets/illustration/code.webp')}
          alt="illustration code"
        />
        <img
          className="illustration js-logo"
          src={require('assets/illustration/js-logo.webp')}
          alt="illustration js logo"
        />
        <img
          className="illustration character"
          src={require('assets/illustration/character.webp')}
          alt="illustration character"
        />
      </div>
    </div>
  </div>
);

export default About;

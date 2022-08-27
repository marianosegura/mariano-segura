import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello, I am
          <br />
          <br /> <span className='info-name'>Mariano Segura</span>
          <br /> <span className='info-title'><em>Full Stack Developer</em></span>
          <br />
          <br />
          I love everything web development
        </div>

        <div className='about-illustration'>  {/* illustration 'Javascript frameworks Flat Illustrations' by storyset.com */}
          <img className='illustration spot' src={require('../../../assets/illustration/spot.png')} alt='illustration spot' />
          <img className='illustration bg' src={require('../../../assets/illustration/background.png')} alt='illustration background' />
          <img className='illustration code' src={require('../../../assets/illustration/code.png')} alt='illustration code' />
          <img className='illustration js-logo' src={require('../../../assets/illustration/js-logo.png')} alt='illustration js logo' />
          <img className='illustration character' src={require('../../../assets/illustration/character.png')} alt='illustration character' />
        </div>
      </div>
    </div>
  )
}

export default About

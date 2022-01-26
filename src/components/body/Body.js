import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Certificates from './certificates/Certificates';
import './Body.css';

function Body() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='body'>
      <section id='about' data-aos="fade-down">
        <About />
      </section>
      
      <div className='separator' />
      <section id='projects' data-aos="fade-up-right">
        <Projects />
      </section>


      <div className='separator' />
      <section id='skills' data-aos="fade-up-right">
        <Skills />
      </section>

      <div className='separator' />
      <section id='certificates' data-aos="fade-up-right">
        <Certificates />
      </section>

      <div className='separator' />
      <section id='contact' data-aos="fade-up-right">
        <Contact />
      </section>
    </div>
  )
}

export default Body

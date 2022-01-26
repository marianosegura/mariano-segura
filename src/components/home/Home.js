import React, { useState, useEffect } from 'react'
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Home.css';

function Home() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShowToTop(window.pageYOffset > 350));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='home'>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>

      {showToTop &&
        <i className="fi-rr-angle-small-up back-to-top" onClick={scrollToTop}></i>
      }
    </div>
  )
}

export default Home

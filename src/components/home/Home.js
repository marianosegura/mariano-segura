import React, { useState, useEffect } from 'react';
import Body from 'components/body/Body';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import './Home.css';

const Home = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setShowToTop(window.scrollY > 350));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
      <i
        className={`fi-rr-angle-small-up back-to-top ${
          showToTop ? 'back-to-top--visible' : ''
        }`}
        onClick={scrollToTop}
      ></i>
    </div>
  );
};

export default Home;

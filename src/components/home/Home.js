import { useState, useEffect } from 'react';
import Body from 'components/body/Body';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import './Home.css';

const BackTopTopButton = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setShowToTop(window.scrollY > 350));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      className={`back-to-top-button ${
        showToTop ? 'back-to-top-button--visible' : ''
      }`}
      onClick={scrollToTop}
    >
      <i
        className="fi-rr-angle-small-up back-to-top-icon"
        aria-label="go to page top"
      ></i>
    </button>
  );
};

const Home = () => {
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

      <BackTopTopButton />
    </div>
  );
};

export default Home;

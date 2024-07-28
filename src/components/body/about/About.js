import './About.css';

const About = () => (
  <div className="about">
    <div className="about-top">
      <div className="about-info">
        Hi there, I am
        <br />
        <br /> <span className="info-name">Mariano Segura</span>
        <br />{' '}
        <span className="info-title">
          <em>Full Stack Developer</em>
        </span>
        <br />
        <br />I love everything web development
        <br />Welcome to my personal page!
      </div>

      <div className="about-illustration">
        {/* illustration by storyset.com */}
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
          className="illustration plant"
          src={require('assets/illustration/plant.webp')}
          alt="illustration plant"
        />
        <img
          className="illustration floor"
          src={require('assets/illustration/floor.webp')}
          alt="illustration floor"
        />
        <img
          className="illustration numbers"
          src={require('assets/illustration/numbers.webp')}
          alt="illustration numbers"
        />
        <img
          className="illustration boxes"
          src={require('assets/illustration/boxes.webp')}
          alt="illustration boxes"
        />
        <img
          className="illustration bubble"
          src={require('assets/illustration/bubble.webp')}
          alt="illustration bubble"
        />
        <img
          className="illustration laptop"
          src={require('assets/illustration/laptop.webp')}
          alt="illustration laptop"
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

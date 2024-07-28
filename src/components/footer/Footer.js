import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <a
      className="footer-link"
      href="https://github.com/marianosegura/mariano-segura"
      target="_blank"
      rel="noreferrer"
    >
      You can check{' '}
      <span className="footer-highlight">this site repository</span> at my
      Github
    </a>
    <p>Made with love by Mariano Segura :)</p>
  </footer>
);

export default Footer;

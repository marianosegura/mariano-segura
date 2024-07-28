import './Navigation.css';

const Navigation = () => (
  <nav className="nav">
    <div className="nav-option">
      <a className="navlink" href="#skills">
        <i className="fi fi-rr-square-terminal option-icon"></i>Skills
      </a>
    </div>
    
    <div className="nav-option">
      <a className="navlink" href="#work">
        <i className="fi fi-rr-briefcase option-icon"></i>Work
      </a>
    </div>

    <div className="nav-option">
      <a className="navlink" href="#certificates">
        <i className="fi fi-rr-badge option-icon"></i>Certificates
      </a>
    </div>

    <div className="nav-option">
      <a className="navlink" href="#contact">
        <i className="fi fi-rr-user option-icon"></i>Contact
      </a>
    </div>
  </nav>
);

export default Navigation;

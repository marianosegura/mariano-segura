import './Header.css';
import Navigation from './navigation/Navigation';

const Header = () => (
  <div className="header">
    <div className="menu">
      <div className="web-menu">
        <Navigation />
      </div>
    </div>
  </div>
);
export default Header;

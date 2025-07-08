import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import wmLogo from '../assets/wm-logo.png';

function Header() {
  return (
    <div className="header">
      <div className="name-row">
        <img className="my-logo" src={wmLogo} alt="logo" />
        <div className="my-name">Wanda McCrae</div>
      </div>
      <div className="my-title">Freelance Web Developer</div>
      <div className="contact">
        <NavLink to="/">Home</NavLink>
        <NavLink to="samples">Sample Sites</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div class="header">
      <h1>Wanda McCrae</h1>
      <h2>Freelance Web Developer</h2>
      <div class="contact">
        <NavLink to="/">Home</NavLink>
        <NavLink to="samples">Sample Sites</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Header;

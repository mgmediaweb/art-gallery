import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <img src={logo} alt="Gallery Logo" className="logo-main" />
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

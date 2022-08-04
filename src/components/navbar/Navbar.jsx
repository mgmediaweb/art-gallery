import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = () => (
  <nav>
    <ul>
      <li className="logo">
        <img src={logo} alt="Gallery Logo" className="logo-main" />
      </li>
      <li>
        <NavLink to="/">Obras</NavLink>
      </li>
      <li>
        <NavLink to="/artist">Aristas</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Galeria</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacto</NavLink>
      </li>
      <li>
        <NavLink to="/guest">Invitado</NavLink>
      </li>
    </ul>
    <div className="bottom-nav">
      <div className="language">Espanol</div>
      <div className="currency">MXP</div>
    </div>
  </nav>
);

export default Navbar;

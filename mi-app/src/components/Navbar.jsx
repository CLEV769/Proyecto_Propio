import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__name">Clever Amaya</span>
        <span className="navbar__role">Frontend Developer || FullStack en proceso</span>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
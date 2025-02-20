import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/home" className="nav-logo">
          Mi App
        </Link>
        <ul className="nav-menu">

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
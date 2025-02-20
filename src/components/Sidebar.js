import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/home" className="sidebar-link">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/users" className="sidebar-link">
            <i className="fas fa-user"></i>
            <span>Usuarios</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/configuracion" className="sidebar-link">
            <i className="fas fa-cog"></i>
            <span>Configuración</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar; 
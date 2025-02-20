import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  Bell, 
  Settings, 
  HelpCircle,
  User,
  Lock,
  Mail,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
  const { user, logout } = useAuth();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const handleLogout = () => {
    logout();
  };

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const settingsMenu = [
    {
      icon: Settings,
      text: 'Configuraciones generales',
      path: '/configuraciones'
    },


  ];

  return (
    <nav className="bg-white border-b h-16 flex items-center px-4">
      <div className="flex justify-between items-center w-full">
        {/* Logo y fecha */}
        <div className="flex items-center space-x-4">
          <Link to="/home" className="text-xl font-semibold text-gray-800">
            OneApp
          </Link>
          <span className="text-sm text-gray-600">
            {month} {year}
          </span>
        </div>

        {/* Barra de búsqueda centralizada */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center w-64">
            <Search className="absolute left-2 top-2 right-1 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar elementos (Ctrl+B)"
              className="pl-9 pr-4 py-1.5 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Iconos y usuario */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <button className="text-gray-500 bg-inherit hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative" ref={settingsRef}>
              <button 
                className={`text-gray-500 bg-inherit hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full ${
                  isSettingsOpen ? 'bg-gray-100' : ''
                }`}
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <Settings className="h-5 w-5" />
              </button>
              
              {/* Menú desplegable */}
              {isSettingsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 transform transition-all duration-200 ease-out origin-top-right">
                  {settingsMenu.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => {
                          setIsSettingsOpen(false);
                          item.onClick?.();
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                      >
                        <Icon className="h-4 w-4 mr-3" />
                        <span className="flex-1">{item.text}</span>
                       
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <button className="text-gray-500 bg-inherit hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full">
              <HelpCircle className="h-5 w-5" />
            </button>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-gray-700">
                {user?.token || 'Usuario'}
              </span>
              <span className="text-xs text-blue-500">
                Modo Administrador
              </span>
            </div>
            <Link 
              to="/login"
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-800"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
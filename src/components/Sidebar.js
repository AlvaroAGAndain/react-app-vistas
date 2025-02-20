import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings, 
  LayoutDashboard,
  ClipboardList,
  ListTodo,
  Store,
  BarChart3,
  Percent,
  LineChart,
  ArrowUpDown,
  PieChart,
  Download,
  Upload,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

function Sidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const menuItems = [
    {
      id: 'panel',
      name: 'Panel de control',
      icon: LayoutDashboard,
      path: '/home'
    },
    {
      id: 'admin',
      name: 'Administración',
      icon: Settings,
      subItems: [
        { name: 'Áreas', path: '/areas' },
        { name: 'Cargos', path: '/cargos' },
        { name: 'Ámbitos', path: '/ambitos' }
      ]
    },
    {
      id: 'operativo',
      name: 'Gestor Operativo',
      icon: ClipboardList,
      subItems: [
        { name: 'Checklist', path: '/checklist' },
        { name: 'Taskmanager', path: '/taskmanager' },
        { name: 'CheckStore', path: '/checkstore' }
      ]
    },
    {
      id: 'reportes',
      name: 'Análisis y Reportes',
      icon: BarChart3,
      subItems: [
        { name: 'Total de módulos vigentes', path: '/modulos-vigentes' },
        { name: 'Porcentaje de ejecución actual', path: '/ejecucion-actual' },
        { name: 'Evolución mensual de módulos', path: '/evolucion-mensual' },
        { name: 'Comparativa entre módulos', path: '/comparativa-modulos' },
        { name: 'Porcentaje de uso por Área', path: '/uso-por-area' }
      ]
    },
    {
      id: 'herramientas',
      name: 'Herramientas',
      icon: Settings,
      subItems: [
        { name: 'Importadores', path: '/importadores', icon: Download },
        { name: 'Exportadores', path: '/exportadores', icon: Upload }
      ]
    }
  ];

  return (
    <div className="w-64 bg-gray-50 border-r h-full overflow-y-auto">

      <nav className="space-y-1 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.path)
                        ? 'text-emerald-500'
                        : 'text-gray-400'
                    }`}
                  />
                  {item.name}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors text-gray-700 bg-inherit hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Icon className="mr-3 h-5 w-5 text-gray-400" />
                      {item.name}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform ${
                        openMenus[item.id] ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openMenus[item.id] && item.subItems && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
                        >
                          {subItem.icon && (
                            <subItem.icon className="mr-3 h-4 w-4 text-gray-400" />
                          )}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar; 
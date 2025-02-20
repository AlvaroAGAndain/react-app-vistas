import { useState } from 'react';
import { Search, Building2, ChevronDown, Store, ShoppingCart, Users } from 'lucide-react';

function Areas() {
  const [expandedItems, setExpandedItems] = useState({
    regionMetro: true,
    mallPlaza: true,
    deptoModa: true,
    ecommerce: false,
    corporativo: false
  });

  const toggleExpand = (section) => {
    setExpandedItems(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">
            Estructura Organizacional Retail
          </h1>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            Dotación Total: 12500
          </div>
        </div>

        {/* Buscador */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar área o departamento..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        {/* Estructura organizacional */}
        <div className="flex space-x-4">
          {/* Tiendas Físicas Card */}
          <div className="flex-1 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Store className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="font-medium ml-2">Tiendas Físicas</span>
                </div>
                <span className="text-xs text-gray-500">8000 personas</span>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <button 
                  onClick={() => toggleExpand('regionMetro')}
                  className="w-full flex items-center justify-between hover:bg-gray-50/50 p-1 rounded bg-inherit"
                >
                  <div className="flex items-center">
                    <ChevronDown 
                      className={`h-4 w-4 text-gray-400 transition-transform ${
                        expandedItems.regionMetro ? 'transform rotate-180' : ''
                      }`}
                    />
                    <span className="text-sm ml-1 text-black">Región Metropolitana</span>
                  </div>
                  <span className="text-xs text-gray-500">4500 personas</span>
                </button>
                
                {expandedItems.regionMetro && (
                  <div className="ml-4 space-y-2">
                    <button 
                      onClick={() => toggleExpand('mallPlaza')}
                      className="w-full flex items-center justify-between hover:bg-gray-50/50 p-1 rounded bg-inherit"
                    >
                      <div className="flex items-center">
                        <ChevronDown 
                          className={`h-4 w-4 text-gray-400 transition-transform ${
                            expandedItems.mallPlaza ? 'transform rotate-180' : ''
                          }`}
                        />
                        <span className="text-sm ml-1 text-black">Mall Plaza Oeste</span>
                      </div>
                      <span className="text-xs text-gray-500">1200 personas</span>
                    </button>

                    {expandedItems.mallPlaza && (
                      <div className="ml-4 space-y-2">
                        <button 
                          onClick={() => toggleExpand('deptoModa')}
                          className="w-full flex items-center justify-between hover:bg-gray-50/50 p-1 rounded bg-inherit"
                        >
                          <div className="flex items-center">
                            <ChevronDown 
                              className={`h-4 w-4 text-gray-400 transition-transform ${
                                expandedItems.deptoModa ? 'transform rotate-180' : ''
                              }`}
                            />
                            <span className="text-sm ml-1 text-black">Departamento Moda</span>
                          </div>
                          <span className="text-xs text-gray-500">400 personas</span>
                        </button>

                        {expandedItems.deptoModa && (
                          <div className="ml-4 space-y-2">
                            <div className="flex items-center justify-between p-1">
                              <span className="text-sm ml-5 text-black">Moda Mujer</span>
                              <span className="text-xs text-gray-500">180 personas</span>
                            </div>
                            
                            {/* Tarjetas de usuarios */}
                            <div className="ml-5 space-y-2 mt-2">
                              <div className="bg-gray-50 rounded p-3">
                                <div className="text-xs text-black font-medium mb-1">María López González</div>
                                <div className="text-xs text-gray-500">Área: Área Comercial</div>
                                <div className="text-xs text-gray-500">Sub-área: Ventas Nacionales</div>
                              </div>
                              
                              <div className="bg-gray-50 rounded p-3">
                                <div className="text-xs text-black font-medium mb-1">Juan Pérez Soto</div>
                                <div className="text-xs text-gray-500">Área: Área Comercial</div>
                                <div className="text-xs text-gray-500">Sub-área: Marketing Digital</div>
                              </div>
                              
                              <div className="bg-gray-50 rounded p-3">
                                <div className="text-xs text-black font-medium mb-1">Ana Martínez Vega</div>
                                <div className="text-xs text-gray-500">Área: Área Comercial</div>
                                <div className="text-xs text-gray-500">Sub-área: Servicio al Cliente</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* E-commerce Card */}
          <div className="flex-1 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-md">
                    <ShoppingCart className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="font-medium ml-2">E-commerce</span>
                </div>
                <span className="text-xs text-gray-500">1500 personas</span>
              </div>
            </div>
            <div className="p-4">
              {/* Contenido de E-commerce */}
            </div>
          </div>

          {/* Áreas Corporativas Card */}
          <div className="flex-1 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-md">
                    <Building2 className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="font-medium ml-2">Áreas Corporativas</span>
                </div>
                <span className="text-xs text-gray-500">3000 personas</span>
              </div>
            </div>
            <div className="p-4">
              {/* Contenido de Áreas Corporativas */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Areas; 
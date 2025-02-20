import { useState } from 'react';
import { 
  Upload, 
  ChevronDown, 
  Building2,
  Settings,
  Palette,
  Network,
  Boxes,
  Check 
} from 'lucide-react';

function ConfigGeneral() {
  const [activeTab, setActiveTab] = useState('general');
  const [sectionsOpen, setSectionsOpen] = useState({
    empresa: true,
    sistema: true,
    lookAndFeel: false,
    nivelesOrganizacionales: false,
    modulos: false
  });

  const toggleSection = (section) => {
    setSectionsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderGeneralContent = () => (
    <>
      {/* Configuración de Empresa */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('empresa')}
          className="flex items-center bg-blue-100 hover:bg-gray-50 justify-between w-full text-left mb-4"
        >
          <div className="flex items-center">
            <Building2 className="h-4 w-4 mr-2 text-black" />
            <h2 className="text-base font-medium text-black">
              Configuración de Empresa
            </h2>
          </div>
          <ChevronDown className={`h-4 w-4 text-blue-500 transition-transform ${
            sectionsOpen.empresa ? 'transform rotate-180' : ''
          }`} />
        </button>
        
        {sectionsOpen.empresa && (
          <>
            <div className="space-y-4 mb-4">
              {/* Nombre de la empresa */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre oficial de la empresa"
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Logo corporativo */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Logo corporativo
                </label>
                <div className="flex items-center">
                  <button className="flex items-center gap-1 text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded w-24">
                    <Upload className="h-3 w-3" />
                    Subir logo
                  </button>
                  <div className="flex-1 ml-2">
                    <span className="text-xs text-gray-500">No file chosen</span>
                  </div>
                </div>
              </div>

              {/* Zona horaria */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Zona horaria principal
                </label>
                <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>UTC-5 (Este de EE.UU.)</option>
                </select>
              </div>

              {/* Idioma */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Idioma predeterminado
                </label>
                <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Español</option>
                </select>
              </div>

              {/* Moneda */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Moneda principal
                </label>
                <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>USD - Dólar estadounidense</option>
                </select>
              </div>

              {/* Formato de fechas */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Formato de fechas
                </label>
                <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>DD/MM/YYYY</option>
                </select>
              </div>
            </div>

            {/* Resumen de Empresa */}
            <div className="bg-gray-50 rounded-md p-3">
              <h3 className="text-xs font-medium text-gray-800 mb-3">
                Resumen de Configuración de Empresa
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="text-gray-600">Empresa:</span>
                <span className="text-gray-900">Tech Solutions S.A.</span>
                
                <span className="text-gray-600">Zona horaria:</span>
                <span className="text-gray-900">UTC-5 (Este de EE.UU.)</span>
                
                <span className="text-gray-600">Idioma:</span>
                <span className="text-gray-900">Español</span>
                
                <span className="text-gray-600">Moneda:</span>
                <span className="text-gray-900">USD - Dólar estadounidense</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Configuración de Sistema */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('sistema')}
          className="flex items-center bg-blue-100 hover:bg-gray-50 justify-between w-full text-left mb-4"
        >
          <div className="flex items-center">
            <Settings className="h-4 w-4 mr-2 text-black" />
            <h2 className="text-base font-medium text-black">
              Configuración de Sistema
            </h2>
          </div>
          <ChevronDown className={`h-4 w-4 text-blue-500 transition-transform ${
            sectionsOpen.sistema ? 'transform rotate-180' : ''
          }`} />
        </button>

        {sectionsOpen.sistema && (
          <div className="space-y-4 px-4">
            {/* Política de contraseñas */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Política de contraseñas
              </label>
              <div className="space-y-1.5">
                
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center">
                    <input 
                      type="radio" 
                      name="password-policy"
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 border border-gray-300 rounded-full bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1 opacity-0 peer-checked:opacity-100" />
                    </div>
                  </div>
                  <span className="ml-2 text-xs text-gray-700">
                    Básica (mínimo 8 caracteres)
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="password-policy"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border border-gray-300 rounded-full bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1 opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="ml-2 text-xs text-gray-700">
                    Media (mayúsculas, minúsculas y números)
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="password-policy"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border border-gray-300 rounded-full bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1 opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="ml-2 text-xs text-gray-700">
                    Alta (incluye caracteres especiales)
                  </span>
                </label>
              </div>
            </div>

            {/* Look and Feel */}
            <div>
              <button 
                onClick={() => toggleSection('lookAndFeel')}
                className="flex bg-inherit items-center w-full text-left mb-2"
              >
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform mr-1 ${
                  sectionsOpen.lookAndFeel ? 'transform rotate-180' : ''
                }`} />
                <Palette className="h-4 w-4 mr-2 text-black" />
                <span className="text-xs font-medium text-gray-700">Look and Feel</span>
              </button>
              
              {sectionsOpen.lookAndFeel && (
                <div className="space-y-3 ml-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Tema para el Navbar
                    </label>
                    <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md">
                      <option>Default</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Tema para el Menú
                    </label>
                    <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md">
                      <option>Default</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Icono Grande Menu Lateral
                    </label>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded w-24">
                        <Upload className="h-3 w-3" />
                        Subir icono
                      </button>
                      <div className="flex-1 ml-2">
                        <span className="text-xs text-gray-500">No file chosen</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Icono Pequeño Menu Lateral
                    </label>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded w-24">
                        <Upload className="h-3 w-3" />
                        Subir icono
                      </button>
                      <div className="flex-1 ml-2">
                        <span className="text-xs text-gray-500">No file chosen</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Logo Login
                    </label>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded w-24">
                        <Upload className="h-3 w-3" />
                        Subir logo
                      </button>
                      <div className="flex-1 ml-2">
                        <span className="text-xs text-gray-500">No file chosen</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Imagen principal del login
                    </label>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded w-24">
                        <Upload className="h-4 w-4" />
                        Subir imagen
                      </button>
                      <div className="flex-1 ml-2">
                        <span className="text-xs text-gray-500">No file chosen</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>

            {/* Niveles Organizacionales */}
            <div>
              <button 
                onClick={() => toggleSection('nivelesOrganizacionales')}
                className="flex items-center bg-inherit w-full text-left mb-2"
              >
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform mr-1 ${
                  sectionsOpen.nivelesOrganizacionales ? 'transform rotate-180' : ''
                }`} />
                <Network className="h-4 w-4 mr-2 text-black" />
                <span className="text-xs font-medium text-gray-700">Niveles Organizacionales</span>
              </button>
              
              {sectionsOpen.nivelesOrganizacionales && (
                <div className="space-y-3 ml-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Primer Nivel Organizacional
                    </label>
                    <input
                      type="text"
                      placeholder='División'
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Segundo Nivel Organizacional
                    </label>
                    <input
                      type="text"
                      placeholder="Área"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Tercer Nivel Organizacional
                    </label>
                    <input
                      type="text"
                      placeholder="Sub-área"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Nombre Mail Administración
                    </label>
                    <input
                      type="text"
                      placeholder="comunicaciones@empresa.com"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Módulos */}
            <div>
              <button 
                onClick={() => toggleSection('modulos')}
                className="flex bg-inherit items-center w-full text-left mb-2"
              >
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform mr-1 ${
                  sectionsOpen.modulos ? 'transform rotate-180' : ''
                }`} />
                <Boxes className="h-4 w-4 mr-2 text-black" />
                <span className="text-xs font-medium text-gray-700">Módulos</span>
              </button>
              
              {sectionsOpen.modulos && (
                <div className="ml-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Módulos Activos */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Módulos Activos
                      </label>
                      <div className="space-y-1">
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              defaultChecked 
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Checklist</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              defaultChecked 
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Task Manager</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Módulos Disponibles */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Módulos Disponibles para Contratación
                      </label>
                      <div className="space-y-1">
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Checkstore</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Visapp</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Incidencias</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <div className="relative flex items-center">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                            />
                            <div className="relative w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <Check 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100" 
                                strokeWidth={2}
                                size={16}
                              />
                            </div>
                            <span className="ml-2 text-xs text-gray-700">Reportes y vistas</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralContent();

      case 'integraciones':
        return (
          <div className="py-4">
            <h2 className="text-base font-medium text-gray-800 mb-4">
              Integraciones del Sistema
            </h2>
            <p className="text-sm text-gray-600">
              Esta sección permitirá configurar las integraciones con servicios externos, 
              APIs y otras plataformas. Contenido en desarrollo.
            </p>
          </div>
        );

      case 'seguridad':
        return (
          <div className="py-4">
            <h2 className="text-base font-medium text-gray-800 mb-4">
              Configuración de Seguridad
            </h2>
            <p className="text-sm text-gray-600">
              Aquí podrás gestionar las políticas de seguridad, autenticación y 
              permisos del sistema. Contenido en desarrollo.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="p-4 flex-1">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Configuraciones Generales del Sistema
        </h1>

        {/* Tabs */}
        <div className="inline-flex gap-2 border-b border-gray-200 mb-4">
          <button
            className={`text-[11px] font-medium -mb-px py-1 px-3 min-w-[60px] ${
              activeTab === 'general'
                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                : 'text-gray-500 bg-inherit hover:text-gray-700 border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('general')}
          >
            Configuración
          </button>
          <button
            className={`text-[11px] font-medium -mb-px py-1 px-3 min-w-[60px] ${
              activeTab === 'integraciones'
                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                : 'text-gray-500 bg-inherit hover:text-gray-700 border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('integraciones')}
          >
            Integraciones
          </button>
          <button
            className={`text-[11px] font-medium -mb-px py-1 px-3 min-w-[60px] ${
              activeTab === 'seguridad'
                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                : 'text-gray-500 bg-inherit hover:text-gray-700 border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('seguridad')}
          >
            Seguridad
          </button>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            {renderTabContent()}
          </div>

          {/* Botones de acción */}
          <div className="sticky bottom-0 flex items-center justify-end border-t bg-gray-50 px-6 py-4">
            <div className="flex gap-3">
              <button 
                className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => {/* manejar cancelar */}}
              >
                Cancelar
              </button>
              <button 
                className="px-4 py-2 text-xs font-medium text-white bg-black rounded-md hover:bg-blue-600 whitespace-nowrap"
                onClick={() => {/* manejar guardar */}}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigGeneral; 
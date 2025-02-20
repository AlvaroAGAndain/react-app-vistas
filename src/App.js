import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'; // Importar el componente Login
import Home from './components/Home'; 
import Layout from './components/Layout'; 
import { AuthProvider } from './context/AuthContext';
import Users from './components/Users';
import Areas from './components/Areas';
import ConfigGeneral from './components/ConfigGeneral';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/configuraciones" element={<ConfigGeneral />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

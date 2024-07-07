import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from './Routes'; // Componente que define las rutas
import Sesion from './Sesion'; // Componente de inicio de sesión
import HomePage from './PaginaPrincipal'; // Importa la página principal
import PaginaUsuario from './paginaUsuario'; // Importa la página de usuario

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    setIsLoggedIn(true); // Marca como logueado automáticamente después del registro
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<HomePage onLogin={handleLogin} />} />

          {/* Ruta para la página de inicio de sesión */}
          <Route path="/sesion" element={<Sesion onLogin={handleLogin} />} />

          {/* Ruta protegida para la página de usuario */}
          <Route path="/paginaUsuario" element={<PaginaUsuario onLogout={handleLogout} />} />

          {/* Rutas definidas por AppRoutes */}
          <Route path="/welcome" element={<AppRoutes isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />

          {/* Redirección después del registro */}
          <Route path="/registro" element={<Navigate to="/paginaUsuario" />} />

          {/* Redirección por defecto si no se encuentra ninguna ruta */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

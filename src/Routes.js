import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './PaginaPrincipal';
import PaginaUsuario from './paginaUsuario';
import WelcomePage from './Welcome';

const AppRoutes = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <Routes>
      {/* Ruta para la página principal */}
      <Route path="/" element={<HomePage onLogin={onLogin} />} />

      {/* Ruta protegida para la página de usuario */}
      <Route path="/paginaUsuario" element={isLoggedIn ? <PaginaUsuario onLogout={onLogout} /> : <Navigate to="/" />} />

      {/* Ruta para la página de bienvenida */}
      <Route path="/welcome" element={<WelcomePage />} />

      {/* Ruta para la página principal (siendo consistente con tu configuración anterior) */}
      <Route path="/PaginaPrincipal" element={<HomePage onLogin={onLogin} />} />
    </Routes>
  );
};

export default AppRoutes;

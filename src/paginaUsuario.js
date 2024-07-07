// Archivo: Menu.js
import React, { useState } from 'react';
import './estilos.css';
import MenuUsuario from './Componentes/MenuUsuario';
import Blog from './Componentes/blog';
import Footer from './Componentes/Footer';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate

function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Utilizando useNavigate en lugar de useHistory

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleLogout = () => {
    // Implementa aquí la lógica para cerrar sesión
    console.log('Cerrando sesión...');
    // Ejemplo: Redireccionar al usuario a la página de inicio después de cerrar sesión
    navigate('/PaginaPrincipal'); // Utilizando navigate en lugar de history.push
  };

  return (
    <div className="menu">
      <div>
        <MenuUsuario handleLogout={handleLogout} />
      </div>

      <main className="contenido">
        <h2 className="titulo-blog">Bienvenido(a) a EventoMania</h2>
        <Blog />

        <Footer />
      </main>
    </div>
  );
}

export default Menu;

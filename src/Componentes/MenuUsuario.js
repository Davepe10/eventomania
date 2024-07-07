// Archivo: MenuUsuario.js
import React, { useState } from 'react';
import logo from "../imagenes/logo/logo principal.png";
import { MdOutlinePriceChange, MdDateRange } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { BiSolidCategoryAlt, BiSearch } from 'react-icons/bi';
import "../estilos/MenuUsuario.css";
import { Link, useNavigate } from 'react-router-dom';

const MenuUsuario = ({ handleLogout }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogoutClick = () => {
    handleLogout(); // Llama a la función handleLogout pasada como prop
    alert('Ha cerrado sesión');
    navigate('/PaginaPrincipal'); // Navega al usuario a la página principal después de cerrar sesión
  };

  return (
    <header className="menu-contenedor">
      <div className="header-contenido">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="eventomania" className="logo-eventomania" />
          </Link>
          <div className="inputBox_container">
            <BiSearch className="search_icon" />
            <input
              type="text"
              placeholder="Encuentra eventos, lugares, organizadores, etc..."
              className="inputBox"
            />
          </div>
        </div>
        <div className="iconos">
          <Link to="/precio" className="icon-link"><MdOutlinePriceChange className="icon" /></Link>
          <Link to="/ubicacion" className="icon-link"><BsGeoAlt className="icon" /></Link>
          <Link to="/categoria" className="icon-link"><BiSolidCategoryAlt className="icon" /></Link>
          <Link to="/fecha" className="icon-link"><MdDateRange className="icon" /></Link>
          <div className="perfil-container">
            <button className="perfil" onClick={handleProfileClick}>Perfil</button>
            {isProfileMenuOpen && (
              <div className="submenu">
                <Link to="/perfil" className="submenu-item">Mi Perfil</Link>
                <button className="submenu-item" onClick={handleLogoutClick}>Cerrar Sesión</button>
              </div>
            )}
          </div>
          <button className="crear-evento">Crear Evento</button>
        </div>
      </div>
    </header>
  );
};

export default MenuUsuario;

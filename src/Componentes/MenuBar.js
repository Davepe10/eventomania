import React, { useState } from 'react';
import logo from "../imagenes/logo/logo principal.png";
import { MdOutlinePriceChange, MdDateRange } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { BiSolidCategoryAlt, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import FormularioRegistro from '../Sesion';
import FormularioSesion from '../Registro';

const Menubar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegistro, setIsRegistro] = useState(true);

  const abrirModalRegistro = () => {
    setIsRegistro(true);
    setModalVisible(true);
  };

  const abrirModalSesion = () => {
    setIsRegistro(false);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
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
          <button className="iniciar" onClick={abrirModalRegistro}>Iniciar sesión</button>
          <button className="registrarse" onClick={abrirModalSesion}>Registrarse</button>
        </div>
      </div>
      {modalVisible && (isRegistro ? <FormularioRegistro closeModal={cerrarModal} /> : <FormularioSesion closeModal={cerrarModal} />)}
    </header>
  );
};

export default Menubar;

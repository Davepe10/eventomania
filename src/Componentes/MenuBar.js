import React, { useState } from 'react';
import logo from "../imagenes/logo/logo principal.png";
import { MdOutlinePriceChange, MdDateRange } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { BiSolidCategoryAlt ,BiSearch } from 'react-icons/bi';
import FormularioRegistro from '../Sesion';
import FormularioSesion from '../Registro';




const Menubar =() =>{

  
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegistro, setIsRegistro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

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


return(
    <header className="menu-contenedor">
    <div className="header-contenido">
      <div className="logo">
        <img src={logo} alt="eventomania" className="logo-eventomania" />
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
        <MdOutlinePriceChange className="icon" />
        <BsGeoAlt className="icon" />
        <BiSolidCategoryAlt className="icon" />
        <MdDateRange className="icon" />
        <button className="iniciar" onClick={abrirModalRegistro} >Iniciar sesión</button>
        <button className="registrarse" onClick={abrirModalSesion} >Registrarse</button>
      </div>
    </div>
    {modalVisible && (isRegistro ? <FormularioRegistro closeModal={cerrarModal} /> : <FormularioSesion closeModal={cerrarModal} />)}
  </header>
)
}

export default Menubar;
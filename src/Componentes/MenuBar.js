import React from "react";
import logo from "../imagenes/logo/logo principal.png";
import { MdOutlinePriceChange, MdDateRange } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { BiSolidCategoryAlt ,BiSearch } from 'react-icons/bi';


const menubar =() =>{
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
        <button className="iniciar">Iniciar sesión</button>
        <button className="registrarse">Registrarse</button>
      </div>
    </div>
  </header>
)
}

export default menubar;
// Archivo: Menu.js
import React, { useState } from 'react';
import './estilos.css';
import MenuBar from './Componentes/MenuBar.js';
import BannerPrincipal from './Componentes/BannerPrincipal.js';
import EventosDestacados from './Componentes/cuerpoEventoDestacado.js'; // Asegúrate de importar el componente

function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const banner = [
    { titulo: 'Conciertazo!', descripcion: 'Concierto gratis, solo programadores', fecha: '07/07/24 - Centro de Lima' },
    { titulo: 'Charla Networking', descripcion: 'Conferencia sobre networking', fecha: '15/07/24 - Online' },
    { titulo: 'Rock and Roll Night', descripcion: 'Festival de música rock', fecha: '21/07/24 - Estadio Nacional' },
    { titulo: 'Club de Carros', descripcion: 'Exposición de autos clásicos', fecha: '30/07/24 - Plaza Mayor' }
  ];

  return (
    <div className="menu">
      <div>
        <MenuBar />
      </div>

      <main className="contenido">
        <div className="contenedor-banner">
          <div className="superpuesto-banner">
            <h2 className="titulo-banner">{banner[currentSlide].titulo}</h2>
            <p className="descripcion-banner">{banner[currentSlide].descripcion}</p>
            <p className="fecha-banner">{banner[currentSlide].fecha}</p>
            <button className="boton-vermas">Ver Más</button>
          </div>
          <div className="imagen-banner">
            <BannerPrincipal onSlideChange={handleSlideChange} />
          </div>
        </div>

        <h2 className="titulo-eventos">Eventos destacados</h2>

        {/* Utilizando el componente EventosDestacados */}
        <EventosDestacados />

        {/* Ejemplo de otros eventos */}
        
      
      </main>
    </div>
  );
}

export default Menu;

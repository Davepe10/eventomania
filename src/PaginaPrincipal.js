import React, { useState } from 'react';
import './estilos.css';
import MenuBar from './Componentes/MenuBar.js';
import BannerPrincipal from './Componentes/BannerPrincipal.js';
import EventosDestacados from './Componentes/cuerpoEventoDestacado.js';
import Tendencias from './Componentes/Tendencias';
import DescubreMas from './Componentes/DescubreEvento.js';
import Blog from './Componentes/blog.js';
import Footer from './Componentes/Footer';

function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="menu">
      <div>
        <MenuBar />
      </div>

      <main className="contenido">
        <div className="contenedor-banner">
          <BannerPrincipal onSlideChange={handleSlideChange} currentSlide={currentSlide} />
        </div>

        <h2 className="titulo-eventos">Eventos destacados</h2>
        <EventosDestacados />

        <h2 className="titulo-tendencias">Tendencias</h2>
        <Tendencias />

        <DescubreMas />

        <h2 className="titulo-blog">Blog</h2>
        <Blog />

        <Footer />
      </main>
    </div>
  );
}

export default Menu;

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "../estilos/banner.css";

import img1 from "../imagenes/eventos/coleccion posters.jpg";
import img2 from "../imagenes/eventos/charla networking.jpg";
import img3 from "../imagenes/eventos/rock and roll.jpg";
import img4 from "../imagenes/eventos/club carros 2.jpg";

library.add(faCircle);

const BannerPrincipal = ({ onSlideChange }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Forzar reproducción automática
    }
  }, []);

  const banner = [
    { titulo: 'Conciertazo!', descripcion: 'Concierto gratis, solo programadores', fecha: '07/07/24 - Centro de Lima', imagen: img1 },
    { titulo: 'Charla Networking', descripcion: 'Conferencia sobre networking', fecha: '15/07/24 - Online', imagen: img2 },
    { titulo: 'Rock and Roll Night', descripcion: 'Festival de música rock', fecha: '21/07/24 - Estadio Nacional', imagen: img3 },
    { titulo: 'Club de Carros', descripcion: 'Exposición de autos clásicos', fecha: '30/07/24 - Plaza Mayor', imagen: img4 }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    appendDots: dots => (
      <ul className="slick-dots"> {dots} </ul>
    ),
    customPaging: function (i) {
      return <FontAwesomeIcon icon={faCircle} className="slick-dot-icon" />;
    },
    beforeChange: (current, next) => {
      onSlideChange(next); // Envía el índice del próximo slide al componente padre
    }
  };

  return (
    <div className="banner">
      <Slider ref={sliderRef} {...settings}>
        {banner.map((banner, index) => (
          <div key={index}>
            <img src={banner.imagen} alt={banner.titulo} className='img-banner' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerPrincipal;

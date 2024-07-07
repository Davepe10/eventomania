import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../imagenes/eventos/acustico.jpg';
import img2 from '../imagenes/eventos/charla networking.jpg';
import img3 from '../imagenes/eventos/rock and roll.jpg';
import img4 from '../imagenes/eventos/club carros 2.jpg';
import '../estilos/tendencias.css';

const tendencias = [
  { titulo: 'Tendencia 1', imagen: img1 },
  { titulo: 'Tendencia 2', imagen: img2 },
  { titulo: 'Tendencia 3', imagen: img3 },
  { titulo: 'Tendencia 4', imagen: img4 },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '40px',
};

const Tendencias = () => {
  return (
    <div className="tendencias">
      <Slider {...settings}>
        {tendencias.map(item => (
          <div key={item.titulo} className="tendencia-item">
            <img src={item.imagen} alt={item.titulo} className="tendencia-imagen" />
            <div className="tendencia-titulo">{item.titulo}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Tendencias;

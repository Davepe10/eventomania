import React from 'react';
import img1 from '../imagenes/eventos/acustico.jpg';
import img2 from '../imagenes/eventos/charla networking.jpg';
import img3 from '../imagenes/eventos/rock and roll.jpg';
import img4 from '../imagenes/eventos/club carros 2.jpg';
import "../estilos/descubreEvento.css";

const eventos = [
  { titulo: 'Evento 1', imagen: img1, descripcion: 'Descripción del evento 1', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 2', imagen: img2, descripcion: 'Descripción del evento 2', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 3', imagen: img3, descripcion: 'Descripción del evento 3', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 4', imagen: img4, descripcion: 'Descripción del evento 4', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 5', imagen: img1, descripcion: 'Descripción del evento 5', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 6', imagen: img2, descripcion: 'Descripción del evento 6', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 7', imagen: img3, descripcion: 'Descripción del evento 7', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 8', imagen: img4, descripcion: 'Descripción del evento 8', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 9', imagen: img1, descripcion: 'Descripción del evento 9', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 10', imagen: img2, descripcion: 'Descripción del evento 10', fecha: '2024/06', precio: '$Precio' },
  { titulo: 'Evento 11', imagen: img3, descripcion: 'Descripción del evento 11', fecha: 'Fecha del evento', precio: '$Precio' },
  { titulo: 'Evento 12', imagen: img4, descripcion: 'Descripción del evento 12', fecha: 'Fecha del evento', precio: '$Precio' },
];

const DescubreMas = () => {
  return (
    <div className="descubre-mas">
      <h2 className="text-2xl font-bold mt-8 mb-4">Descubre más eventos</h2>
      <div className="grid-eventos">
        {eventos.map(evento => (
          <div key={evento.titulo} className="evento">
            <img src={evento.imagen} alt={evento.titulo} className="imagen-evento" />
            <div className="contenido-evento">
              <h3 className="titulo-evento">{evento.titulo}</h3>
              <p className="descripcion-evento">{evento.fecha}</p>
              <div className="info-precio">
              <span className="precio-evento">{evento.precio}</span>
              <button className="boton-comprar">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescubreMas;


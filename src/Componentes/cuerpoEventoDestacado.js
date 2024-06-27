import React from 'react';
import evento1 from "../imagenes/eventos/musica libre.jpg";
import evento2 from "../imagenes/eventos/concierto 3.jpg";
import evento3 from "../imagenes/eventos/concierto 1.jpg";
import evento4 from "../imagenes/eventos/concierto 4.jpg";
import evento5 from "../imagenes/eventos/concierto 2.jpg";
import evento6 from "../imagenes/eventos/arte.jpg";
import evento7 from "../imagenes/eventos/exhibicion de carros.jpg";
import evento8 from "../imagenes/eventos/futbol americano.jpg";
import evento9 from "../imagenes/eventos/entradas para el partido.jpg";
import evento10 from "../imagenes/eventos/concierto reggeaton.jpg";
import evento11 from "../imagenes/eventos/jazz.jpg";
import evento12 from "../imagenes/eventos/formula 1.jpg";

import "../estilos/EventosDestacados.css";

const eventosDestacados = [
    { imagen: evento1, titulo: "Música Libre", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento2, titulo: "Concierto 3", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento3, titulo: "Concierto 1", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento4, titulo: "Concierto 4", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento5, titulo: "Concierto 2", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento6, titulo: "Arte", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento7, titulo: "Exhibición de Carros", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento8, titulo: "Fútbol Americano", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento9, titulo: "Entradas para el Partido", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento10, titulo: "Concierto Reggaeton", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento11, titulo: "Jazz", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento12, titulo: "Fórmula 1", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
];


const EventosDestacados = () => {
    return (
        <div className="grid-eventos">
            {eventosDestacados.map((evento, index) => (
                <div key={index} className="evento">
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
    );
}

export default EventosDestacados;
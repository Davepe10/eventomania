import React from 'react';
import '../estilos/blog.css'; // Ajusta la ruta según sea necesario
import evento1 from "../imagenes/eventos/teatro.jpg";
import evento2 from "../imagenes/eventos/charla networking.jpg";
import evento3 from "../imagenes/eventos/charla tec.jpg";
import evento4 from "../imagenes/eventos/club fotografia 2.jpg";
import evento5 from "../imagenes/eventos/grupo de ejercicio.jpg";
import evento6 from "../imagenes/eventos/concierto 3.jpg";
import evento7 from "../imagenes/eventos/grupo de cocina.jpg";
import evento8 from "../imagenes/eventos/grupo de actividades.jpg";

const eventosDestacados = [
    { imagen: evento1, titulo: "Música Libre", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento2, titulo: "Concierto 3", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento3, titulo: "Concierto 1", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento4, titulo: "Concierto 4", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento5, titulo: "Concierto 2", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento6, titulo: "Arte", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento7, titulo: "Exhibición de Carros", fecha: "Fecha del evento", precio: "Desde S/.45.00", descripcion: "Descripción del evento" },
    { imagen: evento8, titulo: "Concierto 5", fecha: "Fecha del evento", precio: "$", descripcion: "descripcion"}
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="titulo-blog">Blog de Eventos</h2>
      <div className="grid">
        {eventosDestacados.map((evento, index) => (
          <div key={index} className="blog-card">
            <img src={evento.imagen} alt={evento.titulo} />
            <p className="blog-description">{evento.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

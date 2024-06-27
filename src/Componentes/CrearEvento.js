// Eventos.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Eventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const obtenerEventos = async () => {
            try {
                const response = await axios.get('/api/eventos/');
                setEventos(response.data);
            } catch (error) {
                console.error('Error al obtener eventos', error);
            }
        };

        obtenerEventos();
    }, []);

    return (
        <div>
            <h2>Eventos</h2>
            <ul>
                {eventos.map(evento => (
                    <li key={evento.id}>
                        <h3>{evento.title}</h3>
                        <p>{evento.description}</p>
                        <p>{evento.expiry_date}</p>
                        <img src={evento.image} alt={evento.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Eventos;

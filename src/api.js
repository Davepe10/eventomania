// api.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Cambia la URL según tu configuración de backend

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${localStorage.getItem('token')}`, // Incluye el token de autenticación si está presente
  },
});

export default axiosInstance;

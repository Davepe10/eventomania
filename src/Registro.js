import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './imagenes/logo/logo principal.png';
import './registro.css';

const Registro = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    repetirEmail: '',
    contraseña: '',
    dni: '',
    telefono: '',
    pais: 'Perú',
    ciudad: 'Lima',
    genero: 'Hombre',
    terminos: false,
    privacidad: false,
  });

  const navigate = useNavigate();

  const opcionesPaises = [
    { value: 'Perú', label: 'Perú' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Colombia', label: 'Colombia' },
  ];

  const opcionesCiudadesPeru = [
    { value: 'Lima', label: 'Lima' },
    { value: 'Arequipa', label: 'Arequipa' },
    { value: 'Cusco', label: 'Cusco' },
    { value: 'Trujillo', label: 'Trujillo' },
  ];

  const opcionesGenero = [
    { value: 'Mujer', label: 'Mujer' },
    { value: 'Hombre', label: 'Hombre' },
    { value: 'Otro', label: 'Prefiero no decirlo' },
  ];

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.value || value  // Maneja los Select para guardar solo el valor
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData || Object.keys(formData).length === 0) {
      showError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/registro/', formData);
      console.log('Respuesta de la API:', response.data);
      closeModal(); // Cierra el modal después de un registro exitoso
      navigate('/paginaUsuario');
    } catch (error) {
      if (error.response) {
        console.error('Error al registrar:', error.response.data);
        if (error.response.data.email) {
          showError('El correo electrónico ya está registrado');
        } else {
          showError('Error al registrar, por favor inténtalo nuevamente');
        }
      } else if (error.request) {
        console.error('Error al registrar: No response received from the server');
        showError('Error al conectar con el servidor, por favor inténtalo nuevamente');
      } else {
        console.error('Error al registrar:', error.message);
        showError('Error desconocido, por favor inténtalo nuevamente');
      }
    }
  };

  const showError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="modal">
      <ToastContainer />
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Bienvenido a EventoMania</h1>
        <form onSubmit={handleSubmit} className="form-registro">
          <div className="input-container">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={(e) => handleChange('nombres', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={(e) => handleChange('apellidos', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="repetirEmail">Repetir Email:</label>
            <input type="email" id="repetirEmail" name="repetirEmail" value={formData.repetirEmail} onChange={(e) => handleChange('repetirEmail', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" value={formData.contraseña} onChange={(e) => handleChange('contraseña', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="dni">DNI:</label>
            <input type="text" id="dni" name="dni" value={formData.dni} onChange={(e) => handleChange('dni', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={(e) => handleChange('telefono', e.target.value)} required />
          </div>
          <div className="input-container">
            <label htmlFor="pais">País:</label>
            <Select
              id="pais"
              name="pais"
              value={{ value: formData.pais, label: formData.pais }}
              onChange={(value) => handleChange('pais', value)}
              options={opcionesPaises}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="ciudad">Ciudad:</label>
            <Select
              id="ciudad"
              name="ciudad"
              value={{ value: formData.ciudad, label: formData.ciudad }}
              onChange={(value) => handleChange('ciudad', value)}
              options={opcionesCiudadesPeru} // Opciones de ciudades según el país seleccionado
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="genero">Género:</label>
            <Select
              id="genero"
              name="genero"
              value={{ value: formData.genero, label: formData.genero }}
              onChange={(value) => handleChange('genero', value)}
              options={opcionesGenero}
              required
            />
          </div>
          <div className="input-container checkbox-container">
            <input type="checkbox" id="terminos" name="terminos" checked={formData.terminos} onChange={(e) => handleChange('terminos', e.target.checked)} required />
            <label htmlFor="terminos">Acepto los términos y condiciones</label>
          </div>
          <div className="input-container checkbox-container">
            <input type="checkbox" id="privacidad" name="privacidad" checked={formData.privacidad} onChange={(e) => handleChange('privacidad', e.target.checked)} required />
            <label htmlFor="privacidad">Acepto la política de privacidad</label>
          </div>
          <button type="submit" className="boton-registro">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;

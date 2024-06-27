import React, { useState } from 'react';
import logo from "./imagenes/logo/logo principal.png";
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={logo} alt="Logo" style={{ width: '100px', display: 'block', margin: '0 auto 20px' }} />
        <h1>Bienvenido a EventoMania</h1>
        <form onSubmit={handleSubmit} className='form-registro'>
          <div className="form-group">
            <input
              className="input-nombre"
              type="text"
              placeholder="Nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
            <input
              className="input-apellido"
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input-dni"
              type="text"
              placeholder="DNI"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
            />
            <input
              className="input-telefono"
              type="text"
              placeholder="Telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input-email"
              type="email"
              placeholder="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="input-email"
              type="email"
              placeholder="Repetir correo electrónico"
              name="repetirEmail"
              value={formData.repetirEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input-contraseña"
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <select
              className="select-pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
            >
              <option value="Perú">País</option>
              {/* Agrega más opciones de países si es necesario */}
            </select>
            <select
              className="select-ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
            >
              <option value="Lima">Ciudad</option>
              {/* Agrega más opciones de ciudades si es necesario */}
            </select>
          </div>
          <div className="form-group">
            <select
              className="select-genero"
              name="genero"
              placeholder = "sexo"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="Mujer">Mujer</option>
              <option value="Hombre">Hombre</option>
              <option value="Otro">Prefiero no decirlo</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                className="checkbox-terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                required
              />
              He leído y acepto los Términos y Condiciones.
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-privacidad"
                name="privacidad"
                checked={formData.privacidad}
                onChange={handleChange}
                required
              />
              Usted ha leído y acepta los términos y condiciones para el tratamiento de sus datos personales contenidos en la Política de Privacidad Web.
            </label>
          </div>
          <button type="submit" className='boton-registro'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;

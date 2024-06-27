import React, { useState } from 'react';
import logo from "./imagenes/logo/logo principal.png";
import './sesion.css'; // Asegúrate de que esta importación sea correcta

const Sesion = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',
    terminos: false,
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
    <div className="modal1">
      <div className="modal-content1">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={logo} alt="Logo" style={{ width: '100px', display: 'block', margin: '0 auto 20px' }} />
        <p class="title">Bienvenido a EventoMania</p>
        <form class="form-sesion" onSubmit={handleSubmit}>
          <input className='correo'
            type="email"
            class="input"
            placeholder="Correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input className='contraseña'
            type="password"
            class="input"
            placeholder="Contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
          <p class="page-link">
            <span class="page-link-label">¿Has olvidado tu contraseña?</span>
          </p>
          <button class="form-btn" type="submit">Iniciar sesión</button>
        </form>
        <p class="sign-up-label">
          ¿No tienes una cuenta?   <span class="sign-up-link">Registrate</span>
        </p>
        <div class="buttons-container">
          <div className="facebook-login-button">
            <svg  
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              className="facebook-icon"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.5 0h-19C1.121 0 0 1.121 0 2.5v19C0 22.879 1.121 24 2.5 24h9.938v-9.294H9.593v-3.625h2.844V8.906c0-2.824 1.724-4.363 4.239-4.363 1.188 0 2.214.089 2.514.129v2.94h-1.72c-1.353 0-1.613.643-1.613 1.584v2.077h3.225l-.422 3.625h-2.803V24H21.5c1.379 0 2.5-1.121 2.5-2.5v-19C24 1.121 22.879 0 21.5 0z"></path>
            </svg>
            <span>Iniciar sesión con Facebook</span>
            </div>
            <div class="google-login-button">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <span>Iniciar sesión con Google</span>
            </div>
          </div>
        </div>
      </div>
      );
};

      export default Sesion;

import React from 'react';
import "../estilos/footer.css"; // Asegúrate de ajustar la ruta al archivo de estilos del footer si es diferente
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../imagenes/logo/logo principal.png"; // Importa tu logo aquí

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="Logo EventConnect" className="footer-logo" /> {/* Aquí se muestra el logo */}
        <div className="grid">
          <div className="footer-section">
            <h3 className="footer-heading">Acerca de:</h3>
            <p className="text-gray-300">Somos una plataforma en línea para crear, gestionar y unirse a eventos y comunidades, con un enfoque en la personalización y la interacción social.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Enlaces rápidos</h3>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Comunidades</a></li>
              <li><a href="#">Venta de entradas</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Redes sociales</h3>
            <ul className="social-icons">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} EventConnect. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

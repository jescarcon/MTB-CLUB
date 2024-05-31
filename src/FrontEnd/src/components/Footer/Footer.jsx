import React from 'react';
import './Footer.css'; // Archivo CSS para los estilos

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a >La empresa</a>
        <a >Redes sociales</a>
        <a >Sobre Nosotros</a>
        <a >Contacto</a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import './Navbar.css'; // Archivo CSS para los estilos

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const handleLoginClick = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a >ELEMENTOS</a></li>
        <li><a >PRODUCTOS</a></li>
        <li><a >PERSONALIZADOS</a></li>
        <li><a >SOBRE NOSOTROS</a></li>
      </ul>
      <div className="navbar-login">
       
          <div>
            <a onClick={handleLoginClick}>Control de Sesion </a>
              {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/login">Iniciar Sesion</a></li>
                <li><a href="/register">Registrarse</a></li>
                <li><a href="/logout">Cierra Sesion</a></li>

              </ul>
              )}
          </div>
        


        
      </div>
    </nav>
  );
}

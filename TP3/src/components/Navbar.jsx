import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Estilos CSS para el navbar


export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/presentacion" activeClassName="active">Presentación</NavLink>
        </li>
        <li>
          <NavLink to="/contador" activeClassName="active">Contador</NavLink>
        </li>
        <li>
          <NavLink to="/colores" activeClassName="active">Colores</NavLink>
        </li>
        <li>
          <NavLink to="/emojis" activeClassName="active">Emojis</NavLink>
        </li>
        <li>
          <NavLink to="/adivinar" activeClassName="active">Adivinar</NavLink>
        </li>
      </ul>
    </div>
    
  )
}

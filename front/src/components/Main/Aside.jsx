import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="bi bi-person-circle"></i>
        </div>

        <div className="sidebar-brand-text mx-3">Portafolio</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <NavLink to="/Dashboard/">
          <a className="nav-link" href="Inicio">
            <i className="bi bi-align-start"></i>
            <span>Inicio</span>
          </a>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Proyectos</div>

      <li className="nav-item">
        <NavLink to="Proyectos">
          <a className="nav-link collapsed">
            <i className="bi bi-building"></i>
            <span> Proyectos</span>
          </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/Dashboard/CrearProyecto">
          <a
            className="nav-link collapsed"
          >
            <i className="bi bi-pencil-square"></i>
            <span>Crear Proyecto</span>
          </a>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Estudios</div>

      <li className="nav-item">
        <NavLink to="/Dashboard/Estudios">
          <a
            className="nav-link collapsed"
          >
            <i className="bi bi-marker-tip"></i>
            <span>Estudios</span>
          </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/Dashboard/CrearEstudio">
          <a className="nav-link collapsed">
            <i className="bi bi-pencil-square"></i>
            <span>Añadir Estudios</span>
          </a>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />

      <li className="nav-item">
        <NavLink to="/Dashboard/Salir">
          <a className="nav-link" href="Registrarse">
            <i className="bi bi-box-arrow-right"></i>
            <span>Salir</span>
          </a>
        </NavLink>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default Aside;

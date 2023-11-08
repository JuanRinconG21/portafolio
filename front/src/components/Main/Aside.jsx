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
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>

            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <NavLink to="/Dashboard/CrearProyecto">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="bi bi-pencil-square"></i>
            <span>Crear Proyecto</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>

              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Estudios</div>

      <li className="nav-item">
        <NavLink to="/Dashboard/Estudios">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="bi bi-marker-tip"></i>
            <span>Estudios</span>
          </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/Dashboard/CrearEstudio">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="bi bi-pencil-square"></i>
            <span>Añadir Estudios</span>
          </a>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <NavLink to="/">
          <a className="nav-link" href="Login">
            <i className="bi bi-box-arrow-in-left"></i>
            <span>Log in</span>
          </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/Registrarse">
          <a className="nav-link" href="Registrarse">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sing up</span>
          </a>
        </NavLink>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default Aside;

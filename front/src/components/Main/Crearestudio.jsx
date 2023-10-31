import React, { Component } from "react";

const Crearproyecto = () => {
  return (
    <div id="wrapper">
      {/* ----------------------------dashboard------------------------------- */}
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
          <a className="nav-link" href="index.html">
            <i className="bi bi-align-start"></i>
            <span>Inicio</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Proyectos</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="bi bi-building"></i>
            <span>Proyectos</span>
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
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
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
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Estudios</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="bi bi-marker-tip"></i>
            <span>Estudios</span>
          </a>
          
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
          <i className="bi bi-pencil-square"></i>
            <span>añadir Estudios</span>
          </a>
          
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="bi bi-box-arrow-in-left"></i>
            <span>Log in</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="bi bi-box-arrow-right"></i>
            <span>sing up</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* ----------------------------navbar------------------------------- */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            <htmlForm className="d-none d-sm-inline-block htmlForm-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="htmlForm-control bg-light border-0 small"
                  placeholder="Search htmlFor..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </htmlForm>

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    usuario
                  </span>
                  <img className="img-profile rounded-circle"
                                    src="../../src/assets/images/undraw_profile.svg"></img>
                </a>
              </li>
            </ul>
          </nav>
          {/*-----------------------------aside-----------------------------------*/}
          <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          añadir Estudio
                        </h1>
                      </div>
          <div className="container">
            <div className="">
              <div className="card-body p-0">
                <div className="row">
                 
                  <div className="col-lg-11">
                    <div className="p-5">
                      
                      <form className="user">
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Tipo"
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Persona"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Detalles"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Detalles"
                          />
                        </div>
                        
                        <hr />
                        
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Agregar
                        </a>
                      </form>
                      <hr />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crearproyecto;
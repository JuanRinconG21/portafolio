import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Proyectos = () => {
    const { form, cambiar } = HelperForm({});

    const AgregarProyecto = async (e) => {
        e.preventDefault();
        let formulario = form;

        //guardar en la api

        const request = await fetch(Global.url + "proyectos/crear", {
            method: "POST",
            body: JSON.stringify(formulario),
            headers: {
                "Content-Type": "application/json",
                Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNkMTIyOTg2ODIxMzA1ZjM2NzVlNDUiLCJlbWFpbCI6ImpvdGFAZ21haWwuY29tIiwiaWF0IjoxNjk4ODQ1NTQ1LCJleHAiOjE2OTg5MzE5NDV9.7OuS3GfXRlyIB-O5VD0u3lz9cm88cwP32iTFgCZWYxM`,
            },
        });
        const data = await request.json();
        if (data.id == 200) {
            let titulo = data.Encabezado;
            let mensaje = data.mensaje;
            MySwal.fire({
                title: <strong> {titulo}</strong>,
                html: <i>{mensaje}</i>,
                icon: "success",
            });
        } else {
            let titulo = data.Encabezado;
            let mensaje = data.mensaje;
            MySwal.fire({
                title: <strong> {titulo}</strong>,
                html: <i>{mensaje}</i>,
                icon: "error",
            });
        }
    };
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
                    <a className="nav-link" href="Inicio">
                        <i className="bi bi-align-start"></i>
                        <span>Inicio</span>
                        <a href=""></a>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Proyectos</div>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="Proyectos"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                        <i className="bi bi-building"></i>
                        <span> Proyectos</span>
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
                        href="Crearproyecto"
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
                        href="Estudios"
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
                        href="Crearestudio"
                        data-toggle="collapse"
                        data-target="#collapsePages"
                        aria-expanded="true"
                        aria-controls="collapsePages"
                    >
                        <i className="bi bi-pencil-square"></i>
                        <span>Añadir Estudios</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />
                <li className="nav-item">

                    <a className="nav-link" href="Login">
                        <i className="bi bi-box-arrow-in-left"></i>
                        <span>Log in</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="Registrarse">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sing up</span>
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

                        <form className="d-none d-sm-inline-block htmlForm-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="htmlForm-control bg-light border-0 small"
                                    placeholder="Search For..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>

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
                                        Usuario
                                    </span>
                                    <img
                                        className="img-profile rounded-circle"
                                        src="../../src/assets/images/undraw_profile.svg"
                                    ></img>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/*-----------------------------aside-----------------------------------*/}

                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Proyectos</h1>

                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            
                                <div className="col-3">
                                    <div className="card shadow mb-4">

                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Nombre Usuario</h6>
                                        </div>

                                        <div className="card-body">
                                            <div className="chart-pie pt-4">
                                                <canvas id="myPieChart"></canvas>
                                            </div>
                                            <hr />
                                            Styling for the donut chart can be found in the
                                            <code>/js/demo/chart-pie-demo.js</code> file.
                                        </div>
                                    </div>
                                </div>
                           
                            <div className="col-lg-9">

                                <div className="card mb-4 py-3 border-left-primary">
                                    <div className="card-body">
                                        .border-left-primary
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-secondary">
                                    <div className="card-body">
                                        .border-left-secondary
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-success">
                                    <div className="card-body">
                                        .border-left-success
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-info">
                                    <div className="card-body">
                                        .border-left-info
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-warning">
                                    <div className="card-body">
                                        .border-left-warning
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-danger">
                                    <div className="card-body">
                                        .border-left-danger
                                    </div>
                                </div>

                                <div className="card mb-4 py-3 border-left-dark">
                                    <div className="card-body">
                                        .border-left-dark
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

export default Proyectos;
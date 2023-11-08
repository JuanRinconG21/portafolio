import React, { useEffect, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Editarestudio from "./Editarestudio";
//import { editar } from "../../../../back/controllers/proyectos";
const MySwal = withReactContent(Swal2);

const Estudios = () => {
  const token = localStorage.getItem("token");
  const eliminarEstudio = (id, nombre) => {
    // console.log("ENTRO");
    //console.log("EL ID ES" + id);

    MySwal.fire({
      title: `¿ Quieres Eliminar El Estudio de ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(Global.url + `estudios/borrar/${id}`, {
          method: "DELETE", // Método de solicitud (puede ser GET, POST, etc.)
          headers: {
            Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.id == 200) {
              MySwal.fire({
                title: <strong>Eliminado</strong>,
                html: <i>Estudio Eliminado Correctamente</i>,
                icon: "success",
              });
            }
          });
      } else if (result.isDenied) {
        MySwal.fire("Se Cancelo la Eliminacion", "", "info");
      }
    });
  };
  //const { form, cambiar } = HelperForm({});

  const [estudios, setEstudios] = useState(null);
  const [Editar, setEditar] = useState(null);
  //const [proyectosMap, setProyectosMap] = useState(null);

  fetch(Global.url + "estudios/listar/1", {
    method: "GET", // Método de solicitud (puede ser GET, POST, etc.)
    headers: {
      Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Realiza alguna operación con los datos de la respuesta (data)
      if (data.perfiles.length == 0) {
        console.log("ACA ESTA");
        setEstudios(null);
      } else {
        setEstudios(data.perfiles);
      }

      //console.log("DATA PERFILES", data.perfiles);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });

  //console.log(JSON.stringify(request));
  //const data = request.json();
  //console.log(data);

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

          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <p className="m-0 font-weight-bold text-primary">
                      Nombre Usuario
                    </p>
                    <img
                      className="img-profile rounded-circle "
                      style={{ with: "70px", height: "70px" }}
                      src="../../src/assets/images/undraw_profile.svg"
                    ></img>
                  </div>
                  <div
                    className="div"
                    style={{ marginTop: "5px", marginLeft: "10px" }}
                  >
                    <p>Nombre:</p>
                    <br />
                    <p>Telefono</p>
                    <br />
                    <p>direccion</p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-lg-9">
                {estudios != null ? (
                  estudios.map((estudio) => {
                    return (
                      <div className="card mb-4 py-3 border-left-primary">
                        <div className="card-body">
                          <span style={{ fontWeight: "bold" }}>Tipo: </span>{" "}
                          {estudio.tipo}
                        </div>
                        <hr />
                        <div className="card-body">
                          <span style={{ fontWeight: "bold" }}>Detalle: </span>{" "}
                          {estudio.detalle}
                        </div>
                        <hr />
                        <div className="card-body">
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Fecha de finalizacion:
                          </span>
                          {estudio.fechaFin.slice(0, 10)}
                        </div>
                        <hr />
                        <div className="card-body">
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Notas:{" "}
                          </span>{" "}
                          {estudio.notas}
                        </div>
                        <hr />
                        <h1 className="text-center">
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{ marginRight: "2%" }}
                            onClick={() => {
                              eliminarEstudio(estudio._id, estudio.detalle);
                            }}
                          >
                            <i class="bi bi-trash3-fill"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => {
                              setEditar(estudio._id);
                            }}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </button>
                        </h1>
                        {Editar === estudio._id && (
                          <Editarestudio
                            detalle={estudio.detalle}
                            setEditar={setEditar}
                            id={Editar}
                          ></Editarestudio>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <h1 className="text-center">NO HAY ESTUDIOS DISPONIBLES</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estudios;

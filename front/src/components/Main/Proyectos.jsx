import React, { Component, useState, useEffect } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import Editarproyecto from "./Editarproyecto";
import ModalEditar from "./EditarProyPrub";
const MySwal = withReactContent(Swal2);

const Proyectos = () => {
  useEffect(() => {
    listarProyectos();
  }, []);
  const token = localStorage.getItem("token");
  const eliminarProyecto = (id, nombre) => {
    MySwal.fire({
      title: `¿ Quieres Eliminar El Proyecto de ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(Global.url + `proyectos/borrar/${id}`, {
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
                html: <i>Proyecto Eliminado Correctamente</i>,
                icon: "success",
              });
              listarProyectos();
            }
          });
      } else if (result.isDenied) {
        MySwal.fire("Se Cancelo la Eliminacion", "", "info");
      }
    });
  };
  //const { form, cambiar } = HelperForm({});

  const [proyectos, setProyectos] = useState(null);
  const [Editar, setEditar] = useState(0);
  const [page, setPage] = useState(1);
  const [totalp, setTotalp] = useState(null);
  //const [proyectosMap, setProyectosMap] = useState(null);
  /*   fetch(Global.url + "proyectos/listar/1", {
    method: "GET", // Método de solicitud (puede ser GET, POST, etc.)
    headers: {
      Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.perfiles.length > 0) {
        setProyectos(data.perfiles);
      } else {
        setProyectos(null);
      }
      // Realiza alguna operación con los datos de la respuesta (data)

      //console.log("DATA PERFILES", data.perfiles);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    }); */

  const listarProyectos = async (nextpages = 1) => {
    const obtnerProyectos = await fetch(
      Global.url + "proyectos/listar/" + nextpages,
      {
        method: "GET", // Método de solicitud (puede ser GET, POST, etc.)
        headers: {
          Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
        },
      }
    );
    const proyectos2 = await obtnerProyectos.json();
    setTotalp(proyectos2.totalPaginas);
    if (proyectos2.perfiles.length == 0) {
      setProyectos(null);
    } else {
      setProyectos(proyectos2.perfiles);
    }
  };
  const NextPage = () => {
    if (page >= totalp) {
      MySwal.fire({
        icon: "error",
        title: "Oppss..",
        text: "No hay mas informacion\npara mostrar",
      });
    } else {
      let next = page + 1;
      setPage(next);
      listarProyectos(next);
    }
  };
  const AntPage = () => {
    if (page == 1) {
      MySwal.fire({
        icon: "error",
        title: "Oppss..",
        text: "Ya estas en la Primera Pagina",
      });
    } else {
      let next = page - 1;
      setPage(next);
      listarProyectos(next);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-lg-8">
          {proyectos != null ? (
            proyectos.map((proyecto) => {
              return (
                <div
                  className="card mb-4 py-3 border-left-primary"
                  key={proyecto._id}
                >
                  <div className="card-body">
                    <span style={{ fontWeight: "bold" }}>Nombre: </span>
                    {proyecto.nombre}
                  </div>
                  <hr />
                  <div className="card-body">
                    <span style={{ fontWeight: "bold" }}>Detalle: </span>{" "}
                    {proyecto.detalle}
                  </div>
                  <hr />
                  <div className="card-body">
                    <span style={{ fontWeight: "bold" }}>Link: </span>
                    {proyecto.link}
                  </div>
                  <h1 className="text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginRight: "2%" }}
                      onClick={() => {
                        eliminarProyecto(proyecto._id, proyecto.nombre);
                      }}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        setEditar(proyecto._id);
                        handleShow();
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </h1>
                  {Editar === proyecto._id && (
                    <ModalEditar
                      show={show}
                      handleClose={handleClose}
                      id={proyecto._id}
                      nombre={proyecto.nombre}
                      descripcion={proyecto.detalle}
                      link={proyecto.link}
                      setEditar={setEditar}
                      listarProyectos={listarProyectos}
                    ></ModalEditar>
                  )}
                </div>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>
              NO HAY PROYECTOS DISPONIBLES
            </h1>
          )}
        </div>
        <div className="col-2"></div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <button id="anterior" onClick={AntPage} class="page-link">
                Anterior
              </button>
            </li>
            <li class="page-item">
              <button
                id="siguiente"
                onClick={NextPage}
                class="page-link"
                href="#"
              >
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Proyectos;

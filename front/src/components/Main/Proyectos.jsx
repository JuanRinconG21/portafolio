import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Editarproyecto from "./Editarproyecto";
const MySwal = withReactContent(Swal2);

const Proyectos = () => {
  const token = localStorage.getItem("token");
  const eliminarProyecto = (id, nombre) => {
    // console.log("ENTRO");
    //console.log("EL ID ES" + id);

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
  //const [proyectosMap, setProyectosMap] = useState(null);
  fetch(Global.url + "proyectos/listar/1", {
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
    });
  //console.log(JSON.stringify(request));
  //const data = request.json();
  //console.log(data);
  return (
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
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        setEditar(proyecto._id);
                      }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </h1>
                  {Editar === proyecto._id && (
                    <Editarproyecto
                      nombre={proyecto.nombre}
                      detalle={proyecto.detalle}
                      link={proyecto.link}
                      id={proyecto._id}
                      setEditar={setEditar}
                    ></Editarproyecto>
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
      </div>
    </div>
  );
};

export default Proyectos;

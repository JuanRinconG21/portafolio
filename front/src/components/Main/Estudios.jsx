import React, { useEffect, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import Editarestudio from "./Editarestudio";
//import { editar } from "../../../../back/controllers/proyectos";
import ModalEditarEstu from "./EditarEstuPrub";
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                    <span style={{ fontWeight: "bold" }}>Notas: </span>{" "}
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
                        handleShow();
                      }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </h1>
                  {Editar === estudio._id && (
                    <ModalEditarEstu
                      show={show}
                      handleClose={handleClose}
                      id={estudio._id}
                    ></ModalEditarEstu>
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
  );
};

export default Estudios;

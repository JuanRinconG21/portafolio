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
  const [estudios, setEstudios] = useState(null);
  const [Editar, setEditar] = useState(null);
  const [page, setPage] = useState(1);
  const [totalp, setTotalp] = useState(null);
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
              listarEstudios();
            }
          });
      } else if (result.isDenied) {
        MySwal.fire("Se Cancelo la Eliminacion", "", "info");
      }
    });
  };
  //const { form, cambiar } = HelperForm({});
  useEffect(() => {
    listarEstudios();
  }, []);

  //const [proyectosMap, setProyectosMap] = useState(null);
  const btnSiguiente = document.getElementById("siguiente");
  const btnAnterior = document.getElementById("anterior");
  const listarEstudios = async (nextpages = 1) => {
    const obtenerEstuidos = await fetch(
      Global.url + "estudios/listar/" + nextpages,
      {
        method: "GET", // Método de solicitud (puede ser GET, POST, etc.)
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
        },
      }
    );
    const estudios = await obtenerEstuidos.json();
    setTotalp(estudios.totalPaginas);
    if (estudios.perfiles.length == 0) {
      setEstudios(null);
    } else {
      setEstudios(estudios.perfiles);
    }

    /*   await fetch(Global.url + "estudios/listar/" + nextpages, {
      method: "GET", // Método de solicitud (puede ser GET, POST, etc.)
      headers: {
        Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        // Realiza alguna operación con los datos de la respuesta (data)
        if (data.perfiles.length == 0) {
          setEstudios(null);
        } else {
          setEstudios(data.perfiles);
        }
        //console.log("DATA PERFILES", data.perfiles);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });  */
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
      listarEstudios(next);
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
      listarEstudios(next);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //console.log(JSON.stringify(request));
  //const data = request.json();
  //console.log(data);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-lg-8">
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
                      detalle={estudio.detalle}
                      setEditar={setEditar}
                      listarEstudios={listarEstudios}
                    ></ModalEditarEstu>
                  )}
                </div>
              );
            })
          ) : (
            <h1 className="text-center">NO HAY ESTUDIOS DISPONIBLES</h1>
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

export default Estudios;

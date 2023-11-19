import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Crearestudio = () => {
  const inputdetalle = document.getElementById("detalle");
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const AgregarEstudio = async (e) => {
    e.preventDefault();
    let formulario = form;

    //guardar en la api

    const request = await fetch(Global.url + "estudios/crearEstudio", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
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
      inputdetalle.value = "";
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
    <>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Añadir Estudio</h1>
      </div>
      <div className="container">
        <div className="">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-11">
                <div className="p-5">
                  <form className="user" onSubmit={AgregarEstudio}>
                    <div className="form-group">
                      <label htmlFor="tipo" style={{ marginLeft: "49%" }}>
                        Tipo de Estudio
                      </label>
                      <select
                        name="tipo"
                        className="form-control form-control-"
                        id="tipo"
                        onChange={cambiar}
                        style={{ borderRadius: "50px", fontSize: "100%" }}
                      >
                        <option value="TECNICO">Tecnico</option>
                        <option value="TECNOLOGO">Tecnologo</option>
                        <option value="PROFESIONAL">Profesional</option>
                        <option value="ESPECIALIZACION">Especializacion</option>
                        <option value="MAESTRIA">Maestria</option>
                        <option value="DOCTORADO">Doctorado</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="detalle"
                        name="detalle"
                        placeholder="Detalles"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Detalles"
                        name="fechaFin"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tipo" style={{ textAlign: "center" }}>
                        Notas
                      </label>
                      <select
                        name="notas"
                        className="form-control form-control-"
                        id="notas"
                        onChange={cambiar}
                        style={{ borderRadius: "50px", fontSize: "100%" }}
                      >
                        <option value="APROBADO">Aprobado</option>
                        <option value="NO APROBADO">No Aprobado</option>
                        <option value="EN PROCESO">En Proceso</option>
                        <option value="DESERCION">Desercion</option>
                      </select>
                    </div>

                    <hr />

                    <button
                      type="submit"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      Agregar
                    </button>
                  </form>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crearestudio;

import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Crearproyecto = () => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const AgregarProyecto = async (e) => {
    e.preventDefault();
    let formulario = form;

    //guardar en la api

    const request = await fetch(Global.url + "proyectos/crear", {
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
        <h1 className="h4 text-gray-900 mb-4">Crear Proyecto</h1>
      </div>
      <div className="container">
        <div className="">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-11">
                <div className="p-5">
                  <form className="user" onSubmit={AgregarProyecto}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id=""
                        placeholder="Nombre"
                        name="nombre"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control form-control-user"
                        id=""
                        placeholder="Descripcion"
                        name="detalle"
                        onChange={cambiar}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        className="form-control form-control-user"
                        id=""
                        placeholder="Link"
                        name="link"
                        onChange={cambiar}
                      />
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

export default Crearproyecto;

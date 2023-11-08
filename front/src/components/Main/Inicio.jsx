import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Inicio = () => {
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
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Bienvenido</h6>
        <div className="dropdown no-arrow">
          <a
            className="dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
        </div>
      </div>

      <div className="card-body">
        <p>
          me 
        </p>
      </div>
    </div>
  );
};

export default Inicio;

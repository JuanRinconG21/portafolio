import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Editarproyecto = ({ detalle, setEditar, id }) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const Editar = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch(Global.url + `proyectos/editar/${id}`, {
      method: "PUT",
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
      setEditar(0);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
    <form className="user" onSubmit={Editar}>
      <div className="form-group">
        <label htmlFor="tipo" style={{ marginLeft: "49%" }}>
          Tipo de Estudio
        </label>
        <div className="form-group">
        <input
          type="text"
          className="form-control form-control-user"
          id="exampleInputEmail"
          name="detalle"
          placeholder="Nombre"
          onChange={cambiar}
          defaultValue={nombre}
        />
      </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-user"
          id="exampleInputEmail"
          name="detalle"
          placeholder="Descripcion"
          onChange={cambiar}
          defaultValue={detalle}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-user"
          id="exampleInputEmail"
          placeholder="link"
          name="link"
          onChange={cambiar}
        />
      </div>
      

      <hr />

      <button type="submit" className="btn btn-facebook btn-user btn-block">
        Editar
      </button>
    </form>
  );
};

export default Editarproyecto;
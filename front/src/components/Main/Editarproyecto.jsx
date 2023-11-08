import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Editarproyecto = ({ nombre, detalle, link, id, setEditar }) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const Editar = async (e) => {
    e.preventDefault();
    const inputNombre = document.querySelector("#nombre").value;
    const inputDetalle = document.querySelector("#detalle").value;
    const inputLink = document.querySelector("#link").value;
    let formulario = form;
    if (
      inputNombre.length > 0 &&
      inputDetalle.length > 0 &&
      inputLink.length > 0
    ) {
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
    } else {
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"No deje Campos Vacios"}</i>,
        icon: "error",
      });
    }
  };
  return (
    <form className="user" onSubmit={Editar}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-user"
          id="nombre"
          placeholder="Nombre"
          name="nombre"
          onChange={cambiar}
          defaultValue={nombre}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control form-control-user"
          id="detalle"
          placeholder="Descripcion"
          name="detalle"
          onChange={cambiar}
        >
          {detalle}
        </textarea>
      </div>
      <div className="form-group">
        <input
          type="url"
          className="form-control form-control-user"
          id="link"
          placeholder="Link"
          name="link"
          onChange={cambiar}
          defaultValue={link}
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

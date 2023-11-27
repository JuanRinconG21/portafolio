import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const ModalEditar = ({
  show,
  handleClose,
  id,
  nombre,
  descripcion,
  link,
  setEditar,
  listarProyectos,
}) => {
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
      listarProyectos();
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form className="user" onSubmit={Editar}>
            <div className="form-group">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  name="nombre"
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
                defaultValue={descripcion}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                id="exampleInputEmail"
                placeholder="Link"
                name="link"
                onChange={cambiar}
                defaultValue={link}
              />
            </div>

            <hr />
            <button
              type="submit"
              className="btn btn-facebook btn-user btn-block"
            >
              Editar
            </button>
          </form>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditar;

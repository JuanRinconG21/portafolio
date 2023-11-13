import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-router-dom";
const MySwal = withReactContent(Swal2);

//login del usuario
const Registrarse = () => {
  const { form, cambiar } = HelperForm({});
  /*   const MySwal = withReactContent(Swal); */
  const IrLogin = (e) => {
    e.preventDefault();
    let url = window.location.href;
    let NewUrl = url.replace("Registrarse", "");
    window.location.href = NewUrl;
  };
  const guardarPerfil = async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const direccion = document.getElementById("direccion");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const telefono = document.getElementById("telefono");
    if (
      telefono.value == "" ||
      password.value == "" ||
      email.value == "" ||
      direccion.value == "" ||
      fechaNacimiento.value == "" ||
      apellidos.value == "" ||
      nombre.value == ""
    ) {
      MySwal.fire({
        title: <strong> {"ERROR"}</strong>,
        html: <i>{"No deje Campos Vacios"}</i>,
        icon: "error",
      });
    } else {
      let nuevaPersona = form;

      //guardar en la api

      const request = await fetch(Global.url + "personales/registrar", {
        method: "POST",
        body: JSON.stringify(nuevaPersona),
        headers: {
          "Content-Type": "application/json",
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
        telefono.value = "";
        password.value = "";
        email.value = "";
        direccion.value = "";
        fechaNacimiento.value = "";
        apellidos.value = "";
        nombre.value = "";
      } else {
        const email = document.getElementById("email");
        email.value = "";
        let titulo = data.Encabezado;
        let mensaje = data.mensaje;
        MySwal.fire({
          title: <strong> {titulo}</strong>,
          html: <i>{mensaje}</i>,
          icon: "error",
        });
      }
    }
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="../src/assets/images/img-01.png" alt="IMG" />
            </div>

            <form
              className="login100-form validate-form"
              onSubmit={guardarPerfil}
              style={{ marginTop: "-20%" }}
            >
              <span className="login100-form-title">Registrate</span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombres"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-person-fill"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Apellidos"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="bi bi-person-fill"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="date"
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  placeholder="Fecha de Nacimiento"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="direccion"
                  id="direccion"
                  placeholder="Direccion"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-signpost-split-fill"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Correo valido es requerido: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Contraseña es requerida"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-lock-fill"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="number"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="bi bi-telephone-fill"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Registrate
                </button>
              </div>
              <div className="text-center p-t-25">
                <button className="login100-form-btn" onClick={IrLogin}>
                  Iniciar Session <br />
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrarse;

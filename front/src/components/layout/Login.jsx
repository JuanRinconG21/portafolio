import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const IrRegistro = (e) => {
  e.preventDefault();
  let url = window.location.href;
  window.location.href = url + "Registrarse";
};

//login del usuario
const Login = () => {
  const { form, cambiar } = HelperForm({});

  const Loguin = async (e) => {
    e.preventDefault();
    let formulario = form;

    //guardar en la api

    const request = await fetch(Global.url + "personales/login", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.id == 200) {
      let titulo = data.Encabezado;
      let mensaje = data.mensaje;
      let token2 = data.user.token;
      console.log(token2);
      MySwal.fire({
        title: <strong> {titulo}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        let url = window.location.href;
        window.location.href = url + "Crearproyecto";
      }, 3000);
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
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img
                src="../src/assets/images/img-01.png"
                alt="IMG"
                style={{ marginTop: "-35%" }}
              />
            </div>

            <form style={{ marginTop: "-15%" }} onSubmit={Loguin}>
              <span className="login100-form-title">Iniciar Session</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="bi bi-envelope-at-fill"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="bi bi-lock-fill"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Ingresar
                </button>
              </div>

              <div className="text-center p-t-25">
                <button className="login100-form-btn" onClick={IrRegistro}>
                  Crear tu Cuenta <br /> <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

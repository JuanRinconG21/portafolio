import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthProvider } from "../../context/AuthProvider";
import useAuth from "../../helpers/UseAuth";
const MySwal = withReactContent(Swal2);

const Inicio = () => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  const iduser = userObj.id;
  const nombreuser = userObj.nombre;
  const { Autenticado } = useAuth();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <center>
                <img
                  className="img-profile rounded-circle "
                  style={{ height: "30%", width: "30%" }}
                  src="../../src/assets/images/undraw_profile.svg"
                ></img>
              </center>
            </div>
            <div
              className="div"
              style={{ marginTop: "5px", marginLeft: "10px" }}
            >
              <p style={{ fontSize: "250%" }}>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Nombre:
                </span>
                {Autenticado.nombre}
              </p>
              <br />
              <p style={{ fontSize: "250%" }}>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Telefono:
                </span>{" "}
                {Autenticado.telefono}
              </p>
              <br />
              <p style={{ fontSize: "250%" }}>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Direccion:
                </span>{" "}
                {Autenticado.direccion}
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Inicio;

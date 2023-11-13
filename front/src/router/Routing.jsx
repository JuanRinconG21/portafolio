import React from "react";
//import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/layout/Login";
import Registrarse from "../components/layout/Registrarse";
import Crearproyecto from "../components/Main/Crearproyecto";
import Crearestudio from "../components/Main/Crearestudio";
//import Editarproyecto from "../components/Main/Editarproyecto";
//import Editarestudio from "../components/Main/Editarestudio";
import Inicio from "../components/Main/Inicio";
import Proyecto from "../components/Main/Proyectos";
import Estudios from "../components/Main/Estudios";
import Dashboard from "../components/Main/Dashboard";
import LayaoutPublico from "../components/layout/LayaoutPublico";
import Error from "../components/Error/Error";
import { AuthProvider } from "../context/AuthProvider";
import Salir from "../components/Main/Salir";
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LayaoutPublico />}>
            <Route index element={<Login />} />
            <Route path="/Registrarse" element={<Registrarse />} />
          </Route>

          <Route path="/Dashboard/" element={<Dashboard />}>
            <Route index element={<Inicio />}></Route>
            <Route
              path="CrearEstudio"
              element={<Crearestudio></Crearestudio>}
            ></Route>
            <Route
              path="CrearProyecto"
              element={<Crearproyecto></Crearproyecto>}
            ></Route>
            <Route path="Estudios" element={<Estudios></Estudios>}></Route>
            <Route path="Proyectos" element={<Proyecto></Proyecto>}></Route>
            <Route path="Salir" element={<Salir></Salir>}></Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;

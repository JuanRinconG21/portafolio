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
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Registrarse" element={<Registrarse />} />

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
        </Route>
        <Route path="/EstudiosPrueba" element={<Estudios></Estudios>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

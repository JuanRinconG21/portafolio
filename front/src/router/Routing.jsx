import React from "react";
//import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/layout/Login";
import Registrarse from "../components/layout/Registrarse";
import Crearproyecto from "../components/Main/Crearproyecto";
import Crearestudio from "../components/Main/Crearestudio";
import Editarproyecto from "../components/Main/Editarproyecto";
import Editarestudio from "../components/Main/Editarestudio";
import Inicio from "../components/Main/Inicio";
import Proyecto from "../components/Main/Proyectos";
import Estudios from "../components/Main/Estudios";
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Proyectos" element={<Proyecto/>} />
        <Route path="/Estudios" element={<Estudios/>} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Crearproyecto" element={<Crearproyecto />} />
        <Route path="/Crearestudio" element={<Crearestudio />} />
        <Route path="/Editarproyecto" element={<Editarproyecto />} />
        <Route path="/Editarestudio" element={<Editarestudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

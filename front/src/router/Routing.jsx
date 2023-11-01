import React from "react";
//import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/layout/Login";
import Registrarse from "../components/layout/Registrarse";
import Crearproyecto from "../components/Main/Crearproyecto";
import Crearestudio from "../components/Main/Crearestudio";

const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Crearproyecto" element={<Crearproyecto />} />
        <Route path="/Crearestudio" element={<Crearestudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

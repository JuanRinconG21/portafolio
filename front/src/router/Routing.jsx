import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/layout/Login"; 
import Registrarse from "../components/layout/Registrarse";
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

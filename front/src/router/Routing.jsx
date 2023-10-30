import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/layout/Login"; 
import Registro from "../components/layout/Registro";
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

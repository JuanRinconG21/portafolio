import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";
const LayaoutPublico = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      {!Autenticado._id ? (
        <Outlet></Outlet>
      ) : (
        <Navigate to={"/Dashboard"}></Navigate>
      )}
    </>
  );
};

export default LayaoutPublico;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <style></style>
      <div id="notfound">
        <div class="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Pagina No Encontrada</h2>
          <p>La pagina que Buscaste No Existe Vuelve a Donde Estabas</p>
          <NavLink to={"/"}>
            <a href="#">Volver</a>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;

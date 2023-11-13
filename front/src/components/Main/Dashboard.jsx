import React, { useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";
const Dashboard = () => {
  const { Autenticado } = UseAuth();
  return (
    <div id="wrapper">
      <Aside></Aside>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header></Header>
          {Autenticado._id ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

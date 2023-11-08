import React, { useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div id="wrapper">
      <Aside></Aside>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

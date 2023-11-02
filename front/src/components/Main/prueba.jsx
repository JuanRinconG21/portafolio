import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Crearproyecto = () => {

    return (
        <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
           
            <div className="card-body">
                <div className="chart-pie pt-4">
                    <canvas id="myPieChart"></canvas>
                </div>
                <hr/>
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
    </div>
    );
};

export default Crearproyecto;
const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/portafolio");
    console.log("Conexion Exitosa!!");
  } catch (error) {
    //Recordar que el Trow apaga directo el servidor
    //No usar en producion o con clientes
    console.log("Existe un error en la conexion: ", error.message);
    throw new Error(error.message);
  }
};

module.exports = conexion;

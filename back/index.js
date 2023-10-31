const conexion = require("./models/Conexion");
const express = require("express");
const cors = require("cors");
conexion();
const app = express();
const puerto = 3900;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const rutasPersonales = require("./routes/personales");
const rutasProyectos = require("./routes/proyectos");
const rutasEstudios = require("./routes/estudios");
app.use("/", rutasPersonales);
app.use("/", rutasProyectos);
app.use("/", rutasEstudios);
app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});

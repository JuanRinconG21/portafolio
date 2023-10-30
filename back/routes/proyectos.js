const express = require("express");
const router = express.Router();
const ProyectosController = require("../controllers/proyectos");
const auth = require("../controllers/auth");

router.post("/proyectos/crear", auth, ProyectosController.crearProyecto);
router.get(
  "/proyectos/listar/:pagina?",
  auth,
  ProyectosController.listarProyectos
);
router.get("/proyectos/listarUno/:id", auth, ProyectosController.listarUno);
router.delete("/proyectos/borrar/:id", auth, ProyectosController.borrar);
router.put("/proyectos/editar/:id", auth, ProyectosController.editar);
module.exports = router;

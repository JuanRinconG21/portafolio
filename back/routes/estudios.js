const express = require("express");
const router = express.Router();
const EstudiosController = require("../controllers/estudios");
const auth = require("../controllers/auth");

router.post("/estudios/crearEstudio", auth, EstudiosController.crearEstudio);
router.get("/estudios/listar/:pagina?", auth, EstudiosController.listar);
router.get("/estudios/listarUno/:id", auth, EstudiosController.listarUno);
router.delete("/estudios/borrar/:id", auth, EstudiosController.borrar);
router.put("/estudios/editar/:id", auth, EstudiosController.editar);
module.exports = router;

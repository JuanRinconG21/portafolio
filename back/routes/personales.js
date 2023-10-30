const express = require("express");
const router = express.Router();
const PersoanlesController = require("../controllers/personales");
const auth = require("../controllers/auth");

router.post("/personales/registrar", PersoanlesController.registrar);
router.get("/personales/listar/:pagina?", auth, PersoanlesController.listar);
router.get("/personales/listarUno/:id", auth, PersoanlesController.listarUno);
router.delete("/personales/borrar/:id", auth, PersoanlesController.borrar);
router.put("/personales/editar/:id", auth, PersoanlesController.editar);
router.post("/personales/login", PersoanlesController.login);
module.exports = router;

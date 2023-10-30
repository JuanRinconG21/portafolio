const Personales = require("../models/Personales");
const Proyectos = require("../models/Proyectos");

const crearProyecto = async (req, res) => {
  try {
    let personaPro = req.user.userId;
    let nombrePro = req.body.nombre;
    let detallePro = req.body.detalle;
    let linkPro = req.body.link;
    let crearProyecto = new Proyectos({
      nombre: nombrePro,
      detalle: detallePro,
      link: linkPro,
      Persona: personaPro,
    });
    crearProyecto.save();
    return res.status(200).json({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Proyecto Guardado Correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};
const listarProyectos = async (req, res) => {
  try {
    let pagina;
    if (req.params.pagina) {
      pagina = req.params.pagina;
    }
    pagina = parseInt(pagina);
    let itemsPerPage = 5;
    const options = {
      page: pagina,
      limit: itemsPerPage,
      sort: { _id: 1 },
    };
    Proyectos.paginate({}, options)
      .then((result) => {
        if (!result) {
          return res.status(400).json({
            id: 400,
            Encabezado: "Error",
            mensaje: "No hay Registros Para Mostrar",
          });
        } else {
          return res.status(200).json({
            id: 200,
            Encabezado: "Correcto",
            mensaje: "Lista de Proyectos",
            perfiles: result.docs,
            pagina,
            limite: result.limit,
            totalPaginas: result.totalPages,
            registros: result.totalDocs,
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          id: 400,
          Encabezado: "Error",
          mensaje: "Error al Generar: " + error,
        });
      });
  } catch (error) {
    return res.status(400).json({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};
const listarUno = async (req, res) => {
  try {
    let id = req.params.id;
    consulta = await Proyectos.findById(id).exec();
    return res.status(200).json({
      id: 200,
      Encabezado: "Correcto",
      mensaje: consulta,
    });
  } catch (error) {
    return res.status(400).json({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};
const borrar = async (req, res) => {
  try {
    let idPro = req.params.id;
    consulta = await Proyectos.findOneAndDelete({ _id: idPro }).exec();
    return res.status(200).json({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Eliminado Correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};

const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let nombrePro = req.body.nombre;
    let detallePro = req.body.detalle;
    let linkPro = req.body.link;
    let consulta = await Proyectos.findOneAndUpdate(
      { _id: id },
      { nombre: nombrePro, detalle: detallePro, link: linkPro }
    ).exec();
    return res.status(200).json({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Editado Correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};
module.exports = {
  crearProyecto,
  listarProyectos,
  listarUno,
  borrar,
  editar,
};

const Personales = require("../models/Personales");
const Estudios = require("../models/Estudios");

const crearEstudio = async (req, res) => {
  try {
    let tipoEstu = req.body.tipo;
    let detalleEstu = req.body.detalle;
    let fechaFin = req.body.fechaFin;
    let notas = req.body.notas;
    let personaEstu = req.user.userId;

    let crearEstudio = new Estudios({
      tipo: tipoEstu,
      detalle: detalleEstu,
      fechaFin: fechaFin,
      notas: notas,
      Persona: personaEstu,
    });
    crearEstudio.save();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Estudio Guardado Correctamente",
    });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.message,
    });
  }
};

const listar = async (req, res) => {
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
    Estudios.paginate({}, options)
      .then((result) => {
        if (!result) {
          return res.status(400).send({
            id: 400,
            Encabezado: "Error",
            mensaje: "No hay Registros Para Mostrar",
          });
        } else {
          return res.status(200).send({
            id: 200,
            Encabezado: "Correcto",
            mensaje: "Lista de Personas",
            perfiles: result.docs,
            pagina,
            limite: result.limit,
            totalPaginas: result.totalPages,
            registros: result.totalDocs,
          });
        }
      })
      .catch((error) => {
        return res.status(400).send({
          id: 400,
          Encabezado: "Error",
          mensaje: "Error al Generar: " + error,
        });
      });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};

const listarUno = async (req, res) => {
  try {
    let id = req.params.id;
    consulta = await Estudios.findById(id).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      resultado: consulta,
    });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};

const borrar = async (req, res) => {
  try {
    let id = req.params.id;
    consulta = await Estudios.findOneAndDelete({ _id: id }).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Eliminado Correctamente",
    });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};

const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let tipoEstu = req.body.tipo;
    let detalleEstu = req.body.detalle;
    let fechaFin = req.body.fechaFin;
    let notas = req.body.notas;
    let consulta = await Estudios.findOneAndUpdate(
      { _id: id },
      {
        tipo: tipoEstu,
        detalle: detalleEstu,
        fechaFin: fechaFin,
        notas: notas,
      }
    ).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Editado Correctamente",
    });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};
module.exports = {
  crearEstudio,
  listar,
  listarUno,
  borrar,
  editar,
};

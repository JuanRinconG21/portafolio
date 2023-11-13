let Personales = require("../models/Personales");
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registrar = async (req, res) => {
  try {
    let datos = req.body;
    const personaGuardar = new Personales(datos);
    let consulta = await Personales.find({
      $or: [
        {
          email: personaGuardar.email.toLowerCase(),
        },
      ],
    }).exec();
    if (consulta.length > 0) {
      return res.status(400).send({
        id: 400,
        Encabezado: "Error",
        mensaje: "Ya existe el Email en la Base de Datos",
      });
    } else {
      let password = await bcrypt.hash(personaGuardar.password, 10);
      personaGuardar.password = password;
      personaGuardar.save();
      return res.status(200).send({
        id: 200,
        Encabezado: "Correcto",
        mensaje: "Persona Insertada Correctamente",
      });
    }
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
    console.log(pagina);
    Personales.paginate({}, options)
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
      mensaje: "Error de Consulta: " + error.message,
    });
  }
};

const listarUno = async (req, res) => {
  try {
    let id = req.params.id;
    consulta = await Personales.findById(id).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      mensaje: consulta,
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
    consulta = await Personales.findOneAndDelete({ _id: id }).exec();
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
    let datos = req.body;
    let consulta = await Personales.findOneAndUpdate({ _id: id }, datos).exec();
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

const login = async (req, res) => {
  let data = req.body;

  if (!data.email || !data.password) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Email o Contraseña Vacio",
    });
  }

  let consulta = await Personales.findOne({ email: data.email }).exec();
  if (consulta == null) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "El Usuario no existe en la Base de Datos",
    });
  } else {
    let password = bcrypt.compareSync(data.password, consulta.password);
    if (!password) {
      return res.status(400).send({
        id: 400,
        Encabezado: "Error",
        mensaje: "Contraseña Incorrecta",
      });
    } else {
      const token = jwt.sign(
        {
          userId: consulta._id,
          email: consulta.email,
        },
        "Jota&Andres21",
        {
          expiresIn: "1d",
        }
      );
      return res.status(200).send({
        id: 200,
        Encabezado: "Correcto",
        mensaje: "Ingreso Exitoso",
        user: {
          id: consulta._id,
          email: consulta.email,
        },
        token: token,
      });
    }
  }
};

module.exports = {
  registrar,
  listar,
  listarUno,
  borrar,
  editar,
  login,
};

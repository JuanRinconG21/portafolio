const { Schema, model, Collection } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const PersonalesSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: false,
      default: "",
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
  },
  { collection: "personales" }
);
PersonalesSchema.plugin(mongoosePaginate);
module.exports = model("Personales", PersonalesSchema, "personales");

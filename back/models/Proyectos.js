const { Schema, model, Collection } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const ProyectosSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: true,
    },
    Persona: {
      type: Schema.ObjectId,
      ref: "Personales",
    },
  },
  { collection: "proyectos" }
);
ProyectosSchema.plugin(mongoosePaginate);
module.exports = model("Proyectos", ProyectosSchema, "proyectos");

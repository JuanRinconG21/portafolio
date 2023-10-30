const { Schema, model, Collection } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const EstudiosSchema = Schema(
  {
    tipo: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: false,
      default: "N/A",
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    notas: {
      type: String,
      required: false,
      default: "N/A",
    },
    Persona: {
      type: Schema.ObjectId,
      ref: "Personales",
    },
  },
  { collection: "estudios" }
);
EstudiosSchema.plugin(mongoosePaginate);
module.exports = model("Estudios", EstudiosSchema, "estudios");

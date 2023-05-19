import { model, Schema } from "mongoose";

const UsuarioSchema = new Schema(
  {
    usuario: {
      required: true,
      type: String,
    },
    senha: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("usuarios", UsuarioSchema);

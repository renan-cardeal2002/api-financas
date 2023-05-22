import { model, Schema } from "mongoose";

const ContaSchema = new Schema(
  {
    nome_conta: {
      required: true,
      type: String,
    },
    id_usuario_admin: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("contas", ContaSchema);

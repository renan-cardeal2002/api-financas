import { model, Schema } from "mongoose";

const MovimentoSchema = new Schema(
  {
    tipo_movimento: {
      required: true,
      type: String,
    },
    descricao: {
      required: true,
      type: String,
    },
    valor: {
      required: true,
      type: Number,
    },
    data_movimento: {
      required: true,
      type: Date,
    },
    id_conta: {
      required: true,
      type: String,
    },
    id_usuario: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("movimento", MovimentoSchema);

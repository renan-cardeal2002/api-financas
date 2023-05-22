import { model, Schema } from "mongoose";

const UsuarioSchema = new Schema(
  {
    cpf: {
      required: true,
      type: String,
    },
    usuario: {
      required: true,
      type: String,
    },
    senha: {
      required: true,
      type: String,
    },
    nome: {
      required: true,
      type: String,
    },
    data_nasc: {
      required: true,
      type: Date,
    },
    foto_perfil: {
      required: true,
      type: String,
    },
    situacao: {
      required: true,
      type: String,
    },
    endereco: {
      cep: {
        required: true,
        type: String,
      },
      logradouro: {
        required: true,
        type: String,
      },
      bairro: {
        required: true,
        type: String,
      },
      uf: {
        required: true,
        type: String,
      },
      numero: {
        required: true,
        type: String,
      },
      complemento: {
        required: false,
        type: String,
      },
      required: true,
      type: Object,
    },
    email: {
      required: true,
      type: String,
    },
    telefone: {
      required: true,
      type: String,
    },
    profissao: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("usuarios", UsuarioSchema);

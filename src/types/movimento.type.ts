export interface MovimentoType {
  tipo_movimento: string;
  descricao: string;
  valor: number;
  data_movimento: Date;
  id_conta: string;
  id_usuario: string;
}

import { Request, Response } from "express";
import { MovimentoService } from "../services/movimento.service";
import { MovimentoType } from "../types/movimento.type";

class MovimentoController {
  public async buscarMovimentos(req: Request, res: Response): Promise<Response> {
    try {
      const service = new MovimentoService();
      const { idConta } = req.query;
      const conta = await service.findMovimento({ id_conta: idConta });

      return res.status(200).json(conta);
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  }
  public async incluirMovimento(req: Request, res: Response): Promise<Response> {
    try {
      const uService = new MovimentoService();
      const { tipoMovimento, descricao, valor, dataMovimento, idConta, idUsuario } = req.body;
      const newMovimento: MovimentoType = {
        tipo_movimento: tipoMovimento,
        descricao,
        valor,
        data_movimento: new Date(),
        id_conta: idConta,
        id_usuario: idUsuario,
      };

      await uService.create(newMovimento);

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
export default new MovimentoController();

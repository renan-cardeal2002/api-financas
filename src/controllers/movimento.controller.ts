import { Request, Response } from "express";
import { MovimentoService } from "../services/movimento.service";
import { MovimentoType } from "../types/movimento.type";

class MovimentoController {
  public async buscarMovimentos(req: Request, res: Response): Promise<Response> {
    try {
      const service = new MovimentoService();
      const conta = await service.findMovimento();

      return res.status(200).json({ conta });
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
        data_movimento: dataMovimento,
        id_conta: idConta,
        id_usuario: idUsuario,
      };

      await uService.create(newMovimento);

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  public async excluirConta(req: Request, res: Response): Promise<Response> {
    try {
      const uService = new MovimentoService();
      const idConta = parseInt(req.query.idConta as string);
      await uService.remove(idConta);

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new MovimentoController();

import { Request, Response } from "express";
import { ContaService } from "../services/conta.service";
import { ContaType } from "../types/conta.type";

class ContaController {
  public async buscarConta(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ContaService();
      const conta = await service.findConta();

      return res.status(200).json({ conta });
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  }
  public async salvarConta(req: Request, res: Response): Promise<Response> {
    try {
      const uService = new ContaService();
      const { tipoInclusao, idConta, nomeConta, idUsuarioAdmin } = req.body;
      const newConta: ContaType = {
        nome_conta: nomeConta,
        id_usuario_admin: idUsuarioAdmin,
      };

      if (tipoInclusao === "I") {
        await uService.create(newConta);
      } else if (tipoInclusao === "E") {
        await uService.update(idConta, newConta);
      }

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  public async excluirConta(req: Request, res: Response): Promise<Response> {
    try {
      const uService = new ContaService();
      const idConta = parseInt(req.query.idConta as string);
      await uService.remove(idConta);

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new ContaController();

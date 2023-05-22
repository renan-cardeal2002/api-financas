import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";

class UsuarioController {
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const requisicao = req.query;
      const service = new UsuarioService();

      const login = requisicao.login as string;
      const senha = requisicao.senha as string;

      const logado = await service.findUser({ usuario: login, senha });
      const contas = ""; //buscar contas do usuário

      if (logado.length === 0) {
        return res.status(404).json({ status: "erro", msg: "Usuário não encontrado" });
      }
      const log = JSON.parse(JSON.stringify(logado[0]));

      if (log.ativo === "N") {
        return res.status(401).json({ status: "erro", msg: "Usuário não está ativo" });
      } else if (log.ativo === "S") {
        return res.status(200).json({ status: "ok", dadosLogin: log });
      } else {
        return res.status(404).json({ status: "erro", msg: "Usuário não encontrado" });
      }
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  }
  public async salvarUsuario({ body: { idUsuario, login, senha, tipoInclusao } }: Request, res: Response): Promise<Response> {
    try {
      const uService = new UsuarioService();

      if (tipoInclusao === "I") {
        await uService.create({ usuario: login, senha });
      } else if (tipoInclusao === "E") {
        await uService.update(idUsuario);
      }

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  public async excluirUsuario(req: Request, res: Response): Promise<Response> {
    try {
      const uService = new UsuarioService();
      const requisicao = req.query;
      const idUsuario = parseInt(requisicao.idUsuario as string);

      await uService.remove(idUsuario);

      return res.sendStatus(204);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new UsuarioController();

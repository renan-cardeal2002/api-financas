import { Router } from "express";
import AplicacaoController from "./controllers/AplicacaoController";
import PessoaController from "./controllers/PessoaController";
import TiposPagamentoController from "./controllers/TiposPagamentoController";
import UsuarioController from "./controllers/UsuarioController";

const routes = Router();

routes.get("/login", UsuarioController.login);
routes.post("/cog/salvarUsuario", UsuarioController.salvarUsuario);
routes.delete("/cog/excluirUsuario", UsuarioController.excluirUsuario);

//routes.get("/", contaCon)

routes.get("/cog/buscarAplicacoes", AplicacaoController.buscarAplicacoes);
routes.post("/cog/salvarAplicacao", AplicacaoController.salvarAplicacao);
routes.delete("/cog/excluirAplicacao", AplicacaoController.excluirAplicacao);

routes.get("/cog/buscarTiposPagamento", TiposPagamentoController.buscarTiposPagamento);
routes.post("/cog/salvarTiposPagamento", TiposPagamentoController.salvarTiposPagamento);
routes.delete("/cog/excluirTiposPagamento", TiposPagamentoController.excluirTiposPagamento);

routes.get("/cog/buscarPessoas", PessoaController.buscarPessoas);
routes.post("/cog/salvarPessoa", PessoaController.salvarPessoa);
routes.delete("/cog/excluirPessoa", PessoaController.excluirPessoa);

export default routes;

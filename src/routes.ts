import { Router } from "express";
// import AplicacaoController from "./controllers/AplicacaoController";
// import PessoaController from "./controllers/PessoaController";
// import TiposPagamentoController from "./controllers/TiposPagamentoController";
import usuarioController from "./controllers/UsuarioController";
import movimentoController from "./controllers/movimento.controller";
import contaController from "./controllers/conta.controller";

const routes = Router();

routes.get("/login", usuarioController.login);
routes.post("/cog/salvarUsuario", usuarioController.salvarUsuario);
routes.delete("/cog/excluirUsuario", usuarioController.excluirUsuario);

//routes.get("/", contaCon)
routes.get("/fnc/buscarMovimentos", movimentoController.buscarMovimentos);
routes.post("/fnc/incluirMovimento", movimentoController.incluirMovimento);

routes.get("/cog/buscarConta", contaController.buscarConta);
routes.post("/cog/salvarConta", contaController.salvarConta);
routes.delete("/cog/excluirConta", contaController.excluirConta);

// routes.get("/cog/buscarAplicacoes", AplicacaoController.buscarAplicacoes);
// routes.post("/cog/salvarAplicacao", AplicacaoController.salvarAplicacao);
// routes.delete("/cog/excluirAplicacao", AplicacaoController.excluirAplicacao);

// routes.get("/cog/buscarTiposPagamento", TiposPagamentoController.buscarTiposPagamento);
// routes.post("/cog/salvarTiposPagamento", TiposPagamentoController.salvarTiposPagamento);
// routes.delete("/cog/excluirTiposPagamento", TiposPagamentoController.excluirTiposPagamento);

// routes.get("/cog/buscarPessoas", PessoaController.buscarPessoas);
// routes.post("/cog/salvarPessoa", PessoaController.salvarPessoa);
// routes.delete("/cog/excluirPessoa", PessoaController.excluirPessoa);

export default routes;

import { Router } from 'express';
import Usuario from './aplicacao/models/Usuarios';
import ControledeUsuario from './aplicacao/controles/ControledeUsuarios'
import ControledeSessao from './aplicacao/controles/ControledeSessao';
import tokenapp from './aplicacao/middlewares/auth';
const rotas=new Router();

rotas.post('/usuarios', ControledeUsuario.store);
rotas.post('/sessoes', ControledeSessao.store);
rotas.use(tokenapp);
rotas.put('/usuarios',ControledeUsuario.atualizacao);
export default rotas;
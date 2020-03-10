import { Router } from 'express';
import Usuario from './aplicacao/models/Usuarios'
const rotas=new Router();

rotas.get('/', async (req,res)=>{
    
    const usuario = await Usuario.create({

        nome:'leo',
        email:'teste3@teste.com.br',
        senha_crip:'123234',
      
    });
  
    
    
    return res.json(usuario);
})
export default rotas;
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios';
import auth from '../../config/auth';


class ControledeSessao{
    async store(req,res){

        const {email,senha}=req.body;

        const usuario=await Usuario.findOne(
            {
                where:{
                   
                        email
                   
                }
            }
        );

        if(!usuario){
            return res.status(401).json({
                error:'Usuario nao encontrado'
            });
        }//fim condição usuario
        if(!( await usuario.checkSenha(senha))){
            return res.status(401).json({
                error:'senha invalida'
            });

        }//fim condição checasenha
        const{id,nome}=usuario;
        return res.json({
            usuario:{
                id,
                nome,
                email
            },
            token:jwt.sign({id},auth.segredo,
            {
                expiresIn:auth.expiresIn,
            }),
            
        });

    }//fim store
}
export default new ControledeSessao;
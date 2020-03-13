import Usuario from '../models/Usuarios';


class ControledeUsuario{
    async store(req, res){
        const usuarioExistente=await Usuario.findOne({
            where:{
                email:req.body.email
            }
        });
        if(usuarioExistente){
            return res.status(400).json(
                {
                    error:'Usuario existente'
                }
            );
        }
        const {id,nome,email,prestador}= await Usuario.create(req.body);
        return res.json({
            id,
            nome,
            email,
            prestador
        });
    }
    async atualizacao(req,res){
        res.json({ok:true});
    }
}
export default new ControledeUsuario();
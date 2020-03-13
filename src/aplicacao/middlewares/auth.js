import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import configuracaodeauth from '../../config/auth';


export default async(req,res,next)=>{
    const tokenapp=req.headers.authorization;
   if(!tokenapp){
       return res.status(401).json({error:'nao autorizado'})
   }

   const [,token]= tokenapp.split(' ');
   console.log(token);
   try{
        const decoded = await promisify(jwt.verify)(token,configuracaodeauth.segredo);
        console.log(configuracaodeauth.segredo)

        console.log(decoded)
        return next();
   }catch(err){
       return res.status(401).json({error:'autenticacao invalida'});
   }
   
}
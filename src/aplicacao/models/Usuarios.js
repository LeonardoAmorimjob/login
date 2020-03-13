import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome:  Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_crip: Sequelize.STRING,
        prestador: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
       this.addHook('beforeSave',async(usuario)=>{
        if(usuario.senha){
          usuario.senha_crip=await bcrypt.hash(usuario.senha,8)
        }
       });
       return this;
  }
  checkSenha(senha){
    return bcrypt.compare(senha,this.senha_crip);
  }

 
}

export default Usuario;

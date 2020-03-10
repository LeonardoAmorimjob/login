import Sequelize from 'sequelize';

import Usuario from '../aplicacao/models/Usuarios';
import ConfigBancodedados from '../config/bancodedados';
const models=[Usuario];

class Bancodedados{
    constructor(){
        this.init();
    }
    init(){
        this.connection=new Sequelize(ConfigBancodedados);
        models.map(model=>model.init(this.connection))
    }
}
export default new Bancodedados();

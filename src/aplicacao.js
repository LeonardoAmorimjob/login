import express from'express';
import rotas from'./rotas';
import './bancodedados';
class Aplicacao{
    constructor(){
            this.servidor=express();

            this.middlewares();
            this.rotas();
    }
    middlewares(){
        this.servidor.use(express.json());
    }
    rotas(){
        this.servidor.use(rotas);
    }
}
export default new Aplicacao().servidor;
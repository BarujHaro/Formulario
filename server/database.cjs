const {Pool} = require('pg')


class DatabaseManagment{
    constructor(){

        const config ={
            user: 'postgres',
            host: 'localhost',
            password : 'postgres',
            database: 'postgres',
            port : 5433
        }
        this.pool  = new Pool(config)
    }

    async getMaterias(){
        try{
            const result = await this.pool.query('SELECT * FROM roadmapp.materias');
            return result
        }catch(e){
            return e;
        }
    }

    async getProfesores(){
        try{
            const result = await this.pool.query('SELECT * FROM roadmapp.profesores');
            return result
        }catch(e){
            return e;
        }
    }

    async getNow(){
        try{
            const result = await this.pool.query('SELECT NOW()');
            return result
        }catch(e){
            return e;
        }
    }
}

module.exports = DatabaseManagment;
import { port } from "./config.js";
import  express  from "express";
import router from './routes/task.routes.js'
import  Roadmap  from "./roadmap.js";

const app = express()

app.use(router)

app.listen(port,()=>{
    console.log('Server on port:'+port)
})

//inicializamos la clase con la lista de materias
// const roadmap = new Roadmap(materias);

// const chain = 'CPROSPROCMATCMM1|SMM1EIFICED1SED1|TECOCMM2SMM2CED2SED2|ADMRCALGSALGPYESCBDD|SBDDADSEHIPEIDS1SDS1|CODPSEDIPPINIDS2ESP1|CESOSESOALDDADBDMIDD|OPT1CSBCSSBCCIDDOPT2';

// console.log(roadmap.toSeparateRoadmap(chain));



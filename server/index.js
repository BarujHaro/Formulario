import  express  from "express";
import { port } from "./config.js";
import  Roadmap  from "./roadmap.js";

const app = express()

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });


app.listen(port,()=>{
    console.log('Server on port:'+port)
})

const materias=[
    {
        clave: 'CPRO',
        id:1,
        nombre: 'Programacion'
    },
    {
        clave: 'SPRO',
        id:2,
        nombre: 'Seminario de solucion de problemas de Programacion'
    },
    {
        clave: 'CMAT',
        id:3,
        nombre: 'Matematicas Discretas'
    },
    {
        clave: 'CMM1',
        id:4,
        nombre: 'Metodos matematicos 1'
    },
    {
        clave: 'SMM1',
        id:5,
        nombre: 'Seminario metodos matematicos 1'
    },
    {
        clave: 'EIFI',
        id:6,
        nombre: 'Especializante introduccion a la fisica'
    },
    {
        clave: 'CED1',
        id:7,
        nombre: 'Estructuras de datos I'
    },
    {
        clave: 'SED1',
        id:8,
        nombre: 'Seminario Estructuras de datos I'
   
    },
    {
        clave: 'TECO',
        id:9,
        nombre: 'Teoria de la computacion'
    },
    {
        clave: 'CMM2',
        id:10,
        nombre: 'Metodos matematicos II'
    },
    {
        clave: 'SMM2',
        id:11,
        nombre: 'Seminario metodos matematicos II'
    },
    {
        clave: 'CED2',
        id:12,
        nombre: 'Estructuras de datos II'
    },
    {
        clave: 'SED2',
        id:13,
        nombre: 'Seminario Estructuras de datos II'
    },
    {
        clave: 'ADMR',
        id:14,
        nombre: 'Administracion De Redes'
    },
    {
        clave: 'CALG',
        id:15,
        nombre: 'Algoritmia'
    },
    {
        clave: 'SALG',
        id:16,
        nombre: 'Seminario de Algoritmia'
    },
    {
        clave: 'PYES',
        id:17,
        nombre: 'Estadistica y procesos Estocasticos'
    },
    {
        clave: 'CBDD',
        id:18,
        nombre: 'Bases De Datos'
    },
    {
        clave: 'SBDD',
        id:19,
        nombre: 'Seminario Bases de datos'
    },
    {
        clave: 'ADSE',
        id:20,
        nombre: 'Administracion de servidores'
    },
    {
        clave: 'HIPE',
        id:21,
        nombre: 'Hipermedia'
    },
    {
        clave: 'IDS1',
        id:22,
        nombre: 'Ingenieria De Software'
    },
    {
        clave: 'SDS1',
        id:23,
        nombre: 'Seminario De Ingenieria De Software I'
    },
    {
        clave: 'CODP',
        id:24,
        nombre: 'Control De Proyectos'
    },
    {
        clave: 'SEDI',
        id:25,
        nombre: 'Seguridad De La Informacion'
    },
    {
        clave: 'PPIN',
        id:26,
        nombre: 'Programacion para Internet'
    },
    {
        clave: 'IDS2',
        id:27,
        nombre: 'Ingenieria De Software II'
    },
    {
        clave: 'ESP1',
        id:28,
        nombre: 'Especializante selectiva II'
    },
    {
        clave: 'CESO',
        id:29,
        nombre: 'Uso, adaptacion y explotacion de sistemas operativos'
    },
    {
        clave: 'SESO',
        id:30,
        nombre: 'Seminario de uso, adaptacion y explotacion de sistemas operativos'
    },
    {
        clave: 'ALDD',
        id:31,
        nombre: 'Almacenes de datos'
    },
    {
        clave: 'ADBD',
        id:32,
        nombre: 'Administracion de base de datos'
    },
    {
        clave: 'MIDD',
        id:33,
        nombre: 'Mineria de Datos'
    },
    {
        clave: 'OPT1',
        id:34,
        nombre: 'Optativa abierta'
    },
    {
        clave: 'CSBC',
        id:35,
        nombre: 'Sistemas basados en conocimiento'
    },
    {
        clave: 'SSBC',
        id:36,
        nombre: 'Seminario sistemas basados en conocimiento'
    },
    {
        clave: 'CIDD',
        id:37,
        nombre: 'Clasificacion inteligente de datos'
    },
    {
        clave: 'OPT2',
        id:38,
        nombre: 'Optativa abierta'
    }
]

//inicializamos la clase con la lista de materias
const roadmap = new Roadmap(materias);

const chain = 'CPROSPROCMATCMM1|SMM1EIFICED1SED1|TECOCMM2SMM2CED2SED2|ADMRCALGSALGPYESCBDD|SBDDADSEHIPEIDS1SDS1|CODPSEDIPPINIDS2ESP1|CESOSESOALDDADBDMIDD|OPT1CSBCSSBCCIDDOPT2';

console.log(roadmap.toSeparateRoadmap(chain));



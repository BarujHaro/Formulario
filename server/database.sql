create schema roadmapp;

CREATE TABLE roadmapp.usuarios(
    id  SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    roadmap VARCHAR(255) 
);

CREATE TABLE roadmapp.materias(
    id INTEGER NOT NULL,
    nameM VARCHAR(255) NOT NULL,
    numCredits INT NOT NULL,
    clave VARCHAR(4) NOT NULL
    codigo VARCHAR(5)
);

CREATE TABLE roadmapp.profesores(
    id SERIAL PRIMARY KEY,
    nameP VARCHAR(255) NOT NULL,
    materiaID INTEGER NOT NULL REFERENCES roadmapp.materias(id)
);


INSERT INTO roadmapp.profesores VALUES (1,'Patricia Sanchez Rosario',1);


INSERT INTO roadmapp.materias VALUES (1,'Programacion',8,'CPRO','I5882');
INSERT INTO roadmapp.materias VALUES (2,'Seminario De Programacion',5,'SPRO','I5883');
INSERT INTO roadmapp.materias VALUES (3,'Matematicas Discretas',8,'CMAT','I5892');
INSERT INTO roadmapp.materias VALUES (4,'Metodos matematicos I',8,'CMM1','I5893');
INSERT INTO roadmapp.materias VALUES (5,'Seminario metodos matematicos I',5,'SMM1','I5894');
INSERT INTO roadmapp.materias VALUES (6,'Especializaznte introduccion a la fisica',7,'EIFI','I6123');


INSERT INTO roadmapp.materias VALUES (7,'Estructuras de datos I',8,'CED1','I5886');
INSERT INTO roadmapp.materias VALUES (8,'Seminario Estructuras de datos I',5,'SED1','I5887');
INSERT INTO roadmapp.materias VALUES (9,'Teoria de la computacion',8,'TECO','I5915');
INSERT INTO roadmapp.materias VALUES (10,'Metodos Matematicos II',8,'CMM2','I5895');
INSERT INTO roadmapp.materias VALUES (11,'Seminario Metodos Matematicos II',5,'SMM2','I5896');

INSERT INTO roadmapp.materias VALUES (12,'Estructuras de datos II',8,'CED2','I5888');
INSERT INTO roadmapp.materias VALUES (13,'Seminario Estructuras de datos II',5,'SED2','I5889');
INSERT INTO roadmapp.materias VALUES (14,'Administracion de redes',8,'ADMR','I5907');
INSERT INTO roadmapp.materias VALUES (15,'Algoritmia',8,'CALG','I5884');
INSERT INTO roadmapp.materias VALUES (16,'Seminario de algoritmia',5,'SALG','I5885');
INSERT INTO roadmapp.materias VALUES (17,'Estadistica y procesos estocasticos',8,'PYES','I5897');


INSERT INTO roadmapp.materias VALUES (18,'Bases de datos',8,'CBDD','I5890');
INSERT INTO roadmapp.materias VALUES (19,'Seminario de Bases de datos',5,'SBDD','I5891');
INSERT INTO roadmapp.materias VALUES (20,'Administracion de servidores',8,'ADSE','I5908');
INSERT INTO roadmapp.materias VALUES (21,'Hipermedia',8,'HIPE','I5910');
INSERT INTO roadmapp.materias VALUES (22,'Ingenieria de software I',8,'IDS1','I5898');


INSERT INTO roadmapp.materias VALUES (23,'Seminario de Ingenieria de software I',5,'SDS1','I5899');
INSERT INTO roadmapp.materias VALUES (24,'Control de proyectos',8,'CODP','I5901');
INSERT INTO roadmapp.materias VALUES (25,'Seguridad de la informacion',8,'SEDI','I5905');
INSERT INTO roadmapp.materias VALUES (26,'Programacion para internet',8,'PPIN','I5909');
INSERT INTO roadmapp.materias VALUES (27,'Ingenieria de software II',8,'IDS2','I5900');


INSERT INTO roadmapp.materias VALUES (28,'Especializante selectiva II',9,'ESP1','#####');
INSERT INTO roadmapp.materias VALUES (29,'Uso, adaptacion y explotacion de sistemas operativos',8,'CESO','I5903');
INSERT INTO roadmapp.materias VALUES (30,'Seminario de uso, adaptacion y explotacion de sistemas operativos',5,'SESO','I5904');

INSERT INTO roadmapp.materias VALUES (31,'Almacenes de datos',8,'ALDD','I5906');
INSERT INTO roadmapp.materias VALUES (32,'Administracion de base de datos',8,'ADBD','I5902');
INSERT INTO roadmapp.materias VALUES (33,'Mineria de datos',8,'MIDD','I5911');
INSERT INTO roadmapp.materias VALUES (34,'Optativa abierta',8,'OPT1','#####');

INSERT INTO roadmapp.materias VALUES (35,'Sistemas basados en conocimiento',8,'CSBC','I5913');
INSERT INTO roadmapp.materias VALUES (36,'Seminario sistemas basados en conocimiento',5,'SSBC','I5914');
INSERT INTO roadmapp.materias VALUES (37,'Clasificacion inteligente de datos',8,'CIDD','I5912');
INSERT INTO roadmapp.materias VALUES (38,'Optativa abierta',8,'OPT2','#####');




INSERT INTO roadmapp.profesores VALUES (1,'Patricia Sanchez Rosario',1);






















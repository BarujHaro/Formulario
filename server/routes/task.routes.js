import { Router } from "express";
import DatabaseManagment from "../database.cjs";

const router = Router();
const db = new DatabaseManagment();


export default router.get('/',(req,res)=>{
    res.send('Hello World! desde task routes')
});

router.get('/materias',async (req,res)=>{
    const result = await db.getMaterias();
    res.send(result.rows)
});

router.get('/profesores',async (req,res)=>{
    const result = await db.getProfesores();
    res.send(result.rows)
});

router.get('/now',async (req,res)=>{
    const result = await db.getNow()
    res.send(result.rows)
});


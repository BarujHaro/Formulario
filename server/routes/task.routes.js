const Router = require("express");
const DatabaseManagment = require("../database.js");

const router = Router();
const db = new DatabaseManagment();

router.get("/", (req, res) => {
  res.send("Hello World! desde task routes");
});

router.get("/usuarios", db.getUsers);

router.get("/materias", db.getMaterias);

router.get("/profesores", db.getProfesores);

router.get("/now", db.getNow);

router.get("/user", db.getUserById);

router.get("/roadmap", db.getRoadmapUserById);

router.get("/login", db.searchUser);

module.exports = router;

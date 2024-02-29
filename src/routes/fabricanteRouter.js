const fabricantesrouter = require("express").Router();

const fabricantescontroller = require("../controllers/fabricanteController")


fabricantesrouter.post("/", fabricantescontroller.createFabricante);
fabricantesrouter.get("/", fabricantescontroller.allFabricantes)

module.exports = fabricantesrouter;

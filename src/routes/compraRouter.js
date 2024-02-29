const comprasrouter = require("express").Router();

const comprascontroller = require("../controllers/compraController")

comprasrouter.get("/", comprascontroller.getAll);
comprasrouter.post("/", comprascontroller.createCompra);

module.exports = comprasrouter;

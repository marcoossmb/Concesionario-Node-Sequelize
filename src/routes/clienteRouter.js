const clientesrouter = require("express").Router();

const clientescontroller = require("../controllers/clienteController")


clientesrouter.post("/", clientescontroller.createClient);
clientesrouter.get("/", clientescontroller.searchClients)

module.exports = clientesrouter;

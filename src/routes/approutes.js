const approuter = require("express").Router();

const comprasrouter = require("./compraRouter")
const clientesrouter = require("./clienteRouter")

approuter.use("/clientes", clientesrouter)
approuter.use("/compras", comprasrouter)

module.exports = approuter;
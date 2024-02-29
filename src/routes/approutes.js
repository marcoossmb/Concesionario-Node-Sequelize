const approuter = require("express").Router();

const comprasrouter = require("./compraRouter")
const clientesrouter = require("./clienteRouter")
const vehiculosrouter = require("./vehiculoRouter")
const fabricantesrouter = require("./fabricanteRouter")

approuter.use("/clientes", clientesrouter)
approuter.use("/compras", comprasrouter)
approuter.use("/vehiculos", vehiculosrouter)
approuter.use("/fabricantes", fabricantesrouter)

module.exports = approuter;
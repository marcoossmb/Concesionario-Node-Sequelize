const clientesrouter = require("express").Router();

const Cliente = require("../database/models/Cliente");

clientesrouter.post("/", async (req, res) => {
    const clientes = await Cliente.create(req.body);

    res.json(clientes);
});

module.exports = clientesrouter;

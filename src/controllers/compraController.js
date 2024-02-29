const compraservice = require("../services/compraServices");

const getAll = async (req, res) => {
     const all = await compraservice.getAll()
    res.json(all)
}

const createCompra = async (req, res) => {
    const create = await compraservice.createCompra(req.body)
   res.json(create)
}

module.exports = {
    getAll,
    createCompra
}
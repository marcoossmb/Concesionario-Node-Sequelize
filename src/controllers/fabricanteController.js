const fabricanteservice = require("../services/fabricanteService");

const createFabricante = async (req, res) => {
     const create = await fabricanteservice.createFabricante(req.body)
    res.json(create)
}

const allFabricantes = async (req, res) => {
    const all = await fabricanteservice.allFabricantes()
    res.json(all)
}

module.exports = {
    createFabricante,
    allFabricantes,
}
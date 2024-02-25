const clienteservice = require("../services/clienteService");

const createClient = async (req, res) => {
     const all = await clienteservice.createClient(req.body)
    res.json(all)
}

module.exports = {
    createClient
}
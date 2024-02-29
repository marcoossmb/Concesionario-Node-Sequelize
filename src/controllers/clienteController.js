const clienteservice = require("../services/clienteService");

const createClient = async (req, res) => {
     const all = await clienteservice.createClient(req.body)
    res.json(all)
}

const searchClients = async (req, res) => {
    const allclients = await clienteservice.searchClients()
    res.json(allclients)
}

module.exports = {
    createClient,
    searchClients,
}
const Cliente = require("../database/models/Cliente");

const createClient = async (newclient) => {
    const createdFilm = await Cliente.create(newclient)
    return createdFilm;
}

const searchClients = async () => {
    const clients = await Cliente.findAll()
    return clients
}

module.exports = {
    createClient,
    searchClients
}
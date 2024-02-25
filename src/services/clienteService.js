const Cliente = require("../database/models/Cliente");

const createClient = async (newclient) => {
    const createdFilm = await Cliente.create(newclient)
    return createdFilm;
}


module.exports = {
    createClient
}
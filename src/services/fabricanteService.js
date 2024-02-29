const Fabricante = require("../database/models/Fabricante");

const createFabricante = async (newfabricante) => {
    const createdFilm = await Fabricante.create(newfabricante)
    return createdFilm;
}

const allFabricantes = async () => {
    const fabricante = await Fabricante.findAll()
    return fabricante
}

module.exports = {
    createFabricante,
    allFabricantes
}
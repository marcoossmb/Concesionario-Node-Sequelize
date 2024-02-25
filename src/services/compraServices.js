const Compra = require("../database/models/Compra");

const getAll = async () => {
    const all = await Compra.findAll();

    return all;
}

module.exports = {
    getAll
}
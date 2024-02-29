const Cliente = require("../database/models/Cliente");
const Fabricante = require("../database/models/Fabricante");
const Vehiculo = require("../database/models/Vehiculo");
const Compra = require("../database/models/Compra");

const getAll = async () => {
    const compras = await Compra.findAll({
        include: [
            {
                model: Cliente,
                attributes: ["nombre_cli", "direccion_cli"],
            },
            {
                model: Vehiculo,
                attributes: ["nombre_veh"],
                include: {
                    model: Fabricante,
                    attributes: ["nombre_fab"],
                }
            },
        ],
        attributes: ["fecha_compra", "precio_compra"]
    });

    return compras;
}

const createCompra = async (newcompra) => {
    const createdCompra = await Compra.create(newcompra)
    return createdCompra;
}

module.exports = {
    getAll,
    createCompra
}
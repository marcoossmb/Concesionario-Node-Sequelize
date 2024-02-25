const comprasrouter = require("express").Router();

const Cliente = require("../database/models/Cliente");
const Fabricante = require("../database/models/Fabricante");
const Vehiculo = require("../database/models/Vehiculo");
const Compra = require("../database/models/Compra");

comprasrouter.get("/", async (req, res) => {
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

    res.json(compras);
});

module.exports = comprasrouter;

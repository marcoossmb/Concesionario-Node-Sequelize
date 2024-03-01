const vehiculoservice = require("../services/vehiculoService")

const createVehicles = async (req, res) => {
    const create = await vehiculoservice.createVehicles(req.body)
    res.json(create)
}

const allVehicles = async (req, res) => {
    const all = await vehiculoservice.allVehicles()
    res.json(all)
}

const oneVehicle = async (req, res) => {
    const nombre_veh = req.params.nombre_veh;
    const one = await vehiculoservice.oneVehicle(nombre_veh)
    res.json(one)
}

const modifyVehicle = async (req, res) => {
    const id_veh = req.params.id;
    const mody = await vehiculoservice.modifyVehicle(req.body, id_veh)
    res.json(mody)
}

const deleteVehicle = async (req, res) => {
    const id_veh = req.params.id;
    const del = await vehiculoservice.deleteVehicle(id_veh)
    res.json(del)
}

module.exports = {
    createVehicles,
    allVehicles,
    oneVehicle,
    modifyVehicle,
    deleteVehicle
}
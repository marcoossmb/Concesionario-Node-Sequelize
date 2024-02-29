const Vehiculo = require("../database/models/Vehiculo");

const createVehicles = async (newvehiculo) => {
    const createdVehicle = await Vehiculo.create(newvehiculo)
    return createdVehicle;
}

const allVehicles = async () => {
    const getVehicles = await Vehiculo.findAll()
    return getVehicles;
}

const oneVehicle = async (nombre_veh) => {
    const getOneVehicle = await Vehiculo.findOne(nombre_veh)
    return getOneVehicle;
}

const modifyVehicle = async (newbody, id_veh) => {
    const modifyOneVehicle = await Vehiculo.update(newbody, id_veh)
    return modifyOneVehicle;
}

const deleteVehicle = async (id_veh) => {
    const deleteOneVehicle = await Vehiculo.destroy(id_veh)
    return deleteOneVehicle;
}

module.exports = {
    createVehicles,
    allVehicles,
    oneVehicle,
    modifyVehicle,
    deleteVehicle
}
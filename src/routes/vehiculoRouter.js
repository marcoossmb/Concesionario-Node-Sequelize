const vehiculoscontroller = require("../controllers/vehiculoController");

const vehiculosrouter = require("express").Router();

vehiculosrouter.post("/", vehiculoscontroller.createVehicles)
vehiculosrouter.get("/", vehiculoscontroller.allVehicles)
vehiculosrouter.get("/:nombre_veh", vehiculoscontroller.oneVehicle)
vehiculosrouter.put("/:id", vehiculoscontroller.modifyVehicle)
vehiculosrouter.delete("/:id", vehiculoscontroller.deleteVehicle)

module.exports = vehiculosrouter;
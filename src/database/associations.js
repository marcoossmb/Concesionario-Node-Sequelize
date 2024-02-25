const Cliente = require("./models/Cliente");
const Fabricante = require("./models/Fabricante");
const Usuario = require("./models/Usuario");
const Vehiculo = require("./models/Vehiculo");
const Compra = require("./models/Compra");

Fabricante.hasMany(Vehiculo)
Vehiculo.belongsTo(Fabricante)

Cliente.belongsToMany(Vehiculo, { through: Compra })
Vehiculo.belongsToMany(Cliente, { through: Compra })

Cliente.hasMany(Compra)
Compra.belongsTo(Cliente)

Vehiculo.hasMany(Compra)
Compra.belongsTo(Vehiculo)
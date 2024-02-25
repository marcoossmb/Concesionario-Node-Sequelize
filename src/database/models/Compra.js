const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize");

class Compra extends Model { }

Compra.init(
    {
        fecha_compra: {
            type: DataTypes.DATE,
            primaryKey: true,
            allowNull: false,
        },
        precio_compra: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'compras',
        timestamps: false
    }
);

module.exports = Compra;
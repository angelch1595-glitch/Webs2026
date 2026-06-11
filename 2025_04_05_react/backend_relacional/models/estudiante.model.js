const { DataTypes } = require("sequelize");
const { createSequelize } = require("../config/sequelize.config");

const sequelize = createSequelize();

const Estudiante = sequelize.define(
    "Estudiante",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: "estudiantes",
        timestamps: false
    }
);

module.exports = Estudiante;
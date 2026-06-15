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
            primaryKey: true,
            validate: {
                notNull: { msg: "Id is required" }
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "name is required"
                }
            }
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            notNull: {
                msg: "edad is required"
            }
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            notNull: {
                msg: "url is required"
            }
        }
    },
    {
        tableName: "estudiantes",
        timestamps: false
    }
);

module.exports = Estudiante;
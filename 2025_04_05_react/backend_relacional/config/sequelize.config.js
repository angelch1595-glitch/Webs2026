const { Sequelize } = require("sequelize");
const env = require("../config/env");

module.exports.createSequelize = () => {

    const seq = new Sequelize(
        env.db.name,
        env.db.user,
        env.db.pass,
        {
            host: env.db.host,
            port: env.db.port,
            dialect: env.db.dialect,
            logging: false,
            define: {
                underscored: true,
                freezeTableName: true,
                timestamps: true
            },
            pool: {
                max: 10,
                min: 0,
                acquire: 3000,
                idle: 10000
            }
        }
    );

    return seq;
};
const Estudiante = require("../models/estudiante.model");

module.exports.getAllEstudiantes = (_, response) => {
    Estudiante.findAll()
        .then(estudiantes => response.json(estudiantes))
        .catch(err => response.status(500).json(err));
};
const Estudiante = require("../models/estudiante.model")

module.exports.getAllEstudiantes = (_, response) => {
    Estudiante.find({})
        .then(estudiantes => response.json(estudiantes))
        .catch(err => response.json(err))
}

module.exports.getEstudianteById=(req,res)=>{
    const {id}=req.params
    Estudiante.findOne({id})
    .then(estudiantes=>res.json)
    .catch(err=>res.json(err))
}
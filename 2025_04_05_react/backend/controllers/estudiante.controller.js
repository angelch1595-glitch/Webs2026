const Estudiante = require("../models/estudiante.model")

module.exports.getAllEstudiantes = (_, response) => {
    Estudiante.find({})
        .then(estudiantes => response.json(estudiantes))
        .catch(err => response.json(err))
}

module.exports.getEstudianteById=(req,res)=>{
    const {id}=req.params
    Estudiante.findById(id)
    .then(estudiantes=>res.json(estudiantes))
    .catch(err=>res.json(err))
}

module.exports.createEstudiante=(req,res)=>{
    const {nombre,edad,url}=req.body
    Estudiante.create({nombre,edad,url})
    .then(est=>res.json(est))
    .catch(err=>res.status(500).json(err))
}

module.exports.updateEstudiante=(req,res)=>{
    const {id}=req.params
    const {nombre,edad,url}=req.body
    Estudiante.findOneAndUpdate({_id:id},{nombre,edad,url},{new:true})
    .then(est=>res.json(est))
    .catch(err=>res.status(500).json(err))
}

module.exports.deleteEstudiante=(req,res)=>{
    const {id}=req.params
    Estudiante.deleteOne({_id:id})
    .then(resp=>res.json(resp))
    .catch(err=>res.json(err))
}
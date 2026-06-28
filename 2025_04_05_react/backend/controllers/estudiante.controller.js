const Estudiante = require("../models/estudiante.model")
module.exports.getAllEstudiantes = (_, response) => {
    Estudiante.find({})
        .then(estudiantes => response.json(estudiantes))
        .catch(err => response.status(500).json(err))
}

module.exports.getEstudianteById = (req, res) => {
    const { id } = req.params
    Estudiante.findById(id)
        .then(estudiante => res.json(estudiante))
        .catch(err => res.status(500).json(err))
}

module.exports.createEstudiante = async (req, res) => {
    const { nombre, edad, url } = req.body
    try{
        const est= await Estudiante.create({ nombre, edad, url });
        res.status(201).json(est)
    } catch (err)
    {
        res.status(500).json(err);
    }
}
module.exports.updateEstudiante = (req, res) => {
    const { id } = req.params
    const { nombre, edad, url } = req.body
    Estudiante.findOneAndUpdate({ _id: id }, { nombre, edad, url }, { new: true })
        .then(est => res.json(est))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteEstudiante = (req, res) => {
    const { id } = req.params;
    
    Estudiante.deleteOne({ _id: id })
        .then(resp => {
            if (resp.deletedCount === 0) {
                return res.status(404).json({ message: "Estudiante no encontrado" });
            }
            // ✅ Solo enviar UNA respuesta
            res.json({ 
                message: "Estudiante eliminado correctamente",
                deletedCount: resp.deletedCount 
            });
        })
        .catch(err => {
            // ✅ Solo enviar UNA respuesta de error
            res.status(500).json({ 
                message: "Error al eliminar estudiante",
                error: err.message 
            });
        })};
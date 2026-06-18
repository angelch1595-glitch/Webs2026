const mongoose = require('mongoose')
const EstudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true, "El nombre es requerido"
        ]
    },
    edad: {
        type: Number,
        required: [
            true, "La edad es requerida"
        ]
    },
    url: {
        type: String
    },
    password: {
        type: String,
        required: [
            true, "El password es requerido"
        ]
    },
    email: {
        type: String,
        required: [
            true, "El email es requerido"
        ]
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
module.exports = Estudiante;
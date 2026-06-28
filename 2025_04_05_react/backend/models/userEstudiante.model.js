const mongoose = require('mongoose')
const UserEstudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true, "El nombre es requerido"
        ]
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
    },
    rol:{
        type:String,
        required:[
            true,"El rol esrequerido"
        ]
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
const UserEstudiante = mongoose.model('UserEstudiante', UserEstudianteSchema,'userEstudiantes');
module.exports = UserEstudiante;
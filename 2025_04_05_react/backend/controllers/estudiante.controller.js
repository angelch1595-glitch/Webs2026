const Estudiante = require("../models/estudiante.model")
const bcrypt = require("bcryptjs")

module.exports.getAllEstudiantes = (_, response) => {
    Estudiante.find({})
        .then(estudiantes => response.json(estudiantes))
        .catch(err => response.json(err))
}

module.exports.getEstudianteById = (req, res) => {
    const { id } = req.params
    Estudiante.findById(id)
        .then(estudiantes => res.json(estudiantes))
        .catch(err => res.json(err))
}

module.exports.createEstudiante = async (req, res) => {
    const { nombre, edad, url, password, email } = req.body
    if (!nombre || !email || !edad || !password) {
        res.status(400).json({ message: "missing fields, all are mandatory" })
    }
    else {
        const estudianteFound = await Estudiante.findOne({ email })
        if (estudianteFound) {
            res.status(400).json({ message: "user alredy exits" })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            Estudiante.create({ nombre, edad, url, email, password: hashedPassword })
                .then(est => res.json({ email: est.email, nombre: est.nombre, edad: est.edad, url: est.url, _id: est._id }))
                .catch(err => res.status(500).json(err))
        }

    }

}
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const estudianteFound = await Estudiante.findOne({ email })
    if (estudianteFound && (await bcrypt.compare(password, estudianteFound.password))) {
        res.json({ message: "Login User", email: estudianteFound.email, nombre: estudianteFound.nombre })
    }
    else {
        res.status(400).json({ message: "Login Faild" })
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
    const { id } = req.params
    Estudiante.deleteOne({ _id: id })
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
}
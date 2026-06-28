const UserEstudiante = require("../models/userEstudiante.model")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const generateToken = (id,rol) =>{
return jwt.sign({id,rol}, "1234", {expiresIn: '30d'})
}
module.exports.createUserEstudiante = async (req, res) => {
    const { nombre, password, email,rol } = req.body
    if (!nombre || !email || !password||!rol) {
        res.status(400).json({ message: "missing fields, all are mandatory" })
    }
    else {
        const estudianteFound = await UserEstudiante.findOne({ email })
        if (estudianteFound) {
            res.status(400).json({ message: "user already exits" })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            UserEstudiante.create({ nombre, email, password: hashedPassword,rol:rol })
                .then(est => res.json({ email: est.email, nombre: est.nombre, edad: est.edad, _id: est._id }))
                .catch(err => res.status(500).json(err))
        }

    }

}
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const estudianteFound = await UserEstudiante.findOne({ email })
    if (estudianteFound && (await bcrypt.compare(password, estudianteFound.password))) {
        res.json({ message: "Login User", email: estudianteFound.email, nombre: estudianteFound.nombre,rol:estudianteFound.rol, token:generateToken(estudianteFound._id,estudianteFound.rol) })
    }
    else {
        res.status(400).json({ message: "Login Faild" })
    }
}



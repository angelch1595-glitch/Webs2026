
const jwt = require('jsonwebtoken');
const Estudiante = require('../models/userEstudiante.model');
const UserEstudiante = require('../models/userEstudiante.model');
module.exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //se obtiene el token (p.ej., Bearer DJDHFHFHHFHFHF#%>%)
            token = req.headers.authorization;
            console.log('Token recibido-con Bearer: ', token);
            token = token.split(' ')[1];
            console.log('Token extraído: ', token);
            //se verifica el token
            const decoded = jwt.verify(token, "1234");
            //agregamosa cadapetición información del usuario-excepto elpassword (recuperado con base en el_id 
            //contenidoen el payload del token)
            req.user = await UserEstudiante.findOne({ _id: decoded.id }).select('-password');
            if (!req.user) {
                return res.status(401).json({ message: 'Usuario no encontrado' });
            }
            next();
        } 
        catch (error) {

            return res.status(401).json({ message: 'Not authorized!' });
        }
    }
    //sino se tieneun token de portador, entonces no estará autorizado
    if (!token) {
       return res.status(401).json({ message: 'Not authorized, missed token!' });
    }
}

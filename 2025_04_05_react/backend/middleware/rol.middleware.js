// middleware/rol.middleware.js

// Creamos una función que recibe los roles autorizados (puede ser uno o varios)
module.exports.validRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        // Como 'protect' se ejecuta antes, ya tenemos a req.user disponible
        if (!req.user) {
            return res.status(401).json({ message: 'No autenticado' });
        }

        // Verificamos si el rol del usuario está dentro de los roles permitidos
        if (!rolesPermitidos.includes(req.user.rol)) {
            return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
        }

        next(); // Si tiene el rol, continúa
    };
};
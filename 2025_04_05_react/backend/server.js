const express = require("express");
const app = express();
const puerto = 8000;
require('../backend/config/mongoose.config')
const allEstudiantesRoutes = require('./routes/estudiante.route');
allEstudiantesRoutes(app);
app.listen(puerto, () => console.log("El servidor esta escuchando en el puerto: ", puerto))
const express = require("express");
const app = express();
const puerto = 8000;
const cors = require("cors")
require('../backend/config/mongoose.config')
app.use(cors())
app.use(express.json());

const allEstudiantesRoutes = require('./routes/estudiante.route');
allEstudiantesRoutes(app);
app.listen(puerto, () => console.log("El servidor esta escuchando en el puerto: ", puerto))
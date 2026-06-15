const express = require("express");
const app = express();
const puerto = 8000;
const cors=require("cors")
const Estudiante = require("./models/estudiante.model");
app.use(cors)
app.use(express.json());

const allEstudiantesRoutes = require("./routes/estudiante.route");
allEstudiantesRoutes(app);

Estudiante.sync()
    .then(() => {
        console.log("Tabla sincronizada");

        app.listen(puerto, () => {
            console.log("Servidor escuchando en puerto:", puerto);
        });
    })
    .catch(err => console.log(err));
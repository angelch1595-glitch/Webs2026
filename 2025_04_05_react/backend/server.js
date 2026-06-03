const express = require("express");
const app = express();
const puerto = 8000;

app.get("/", (req, res) => {
    // res.json({ "mensaje": "Hola mundo" })
    //console.log("Ejecutando endpoint")
    res.send("Hola mundo soy angel ")
})
app.get("/estudiantes", (req, res) => {
    res.json({ "mensaje": "Endpoint para obtener lista de estudiantes" })
})
app.get("/estudiantes/:id", (req, res) => {
    const id = req.params.id;
    res.json({ "mensaje": `Endpoint para obtener estudiante con id ${id}` });
});

app.delete("/estudiantes/:id", (req, res) => {
    const id = req.params.id;
    res.json({ "mensaje": `Endpoint para eliminar estudiante con id ${id}` });
});

app.listen(puerto, () => console.log("El servidor esta escuchando en el puerto: ", puerto))
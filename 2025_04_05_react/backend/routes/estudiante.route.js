const EstudianteController=require('../controllers/estudiante.controller');
const UserEstudianteController=require('../controllers/userEstudiante.controller')
const {protect}=require("../middleware/authentication_mw")
const {validRol}=require("../middleware/rol.middleware")
module.exports = function(app){
app.get('/estudiantes',protect,validRol('admin','visualizador'),EstudianteController.getAllEstudiantes)
app.get('/estudiantes/:id',protect,validRol('admin','visualizador'),EstudianteController.getEstudianteById)
app.post('/estudiantes',protect,validRol('admin'),EstudianteController.createEstudiante)
app.put('/estudiantes/:id',protect,validRol('admin'),EstudianteController.updateEstudiante)
app.delete('/estudiantes/:id',protect,validRol('admin'),EstudianteController.deleteEstudiante)
app.post('/userEstudiantes',UserEstudianteController.createUserEstudiante)
app.post('/userEstudiantes/login',UserEstudianteController.loginUser)
}

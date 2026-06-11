const EstudianteController=require('../controllers/estudiante.controller');
module.exports = function(app){
app.get('/api/estudiantes',EstudianteController.getAllEstudiantes)
}

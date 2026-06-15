const EstudianteController=require('../controllers/estudiante.controller');
module.exports = function(app){
app.get('/api/estudiantes',EstudianteController.getAllEstudiantes)
app.get('/api/estudiantes/:id',EstudianteController.getEstudianteById)
app.post('/api/estudiantes',EstudianteController.createEstudiante)
app.put('/api/estudiantes/:id',EstudianteController.updateEstudiante)
app.delete('/api/estudiantes/:id',EstudianteController.deleteEstudiante)
}

import Estudiante from "../components/Estudiante";
//import { useEstudiante } from "../hooks/useEstudiante";
//import listEstudiantes from "../urls/data";
//import EstudianteForm from "../components/EstudianteForm";

const EstudiantePage = (props) => {
  const { estudiantes } = props;
  console.log("Renderizando....");
  return (
    <div>
      <h1>Estudiantes</h1>
      {/*<EstudianteForm onAgregar={agregarEstudiante}></EstudianteForm>*/}
      <hr />
      <div>
        {estudiantes.map((estudiante) => {
          return (
            <Estudiante
              key={estudiante.id}
              id={estudiante.id}
              nombre={estudiante.nombre}
              edad={estudiante.edad}
              url={estudiante.url}
            ></Estudiante>
          );
        })}
      </div>
    </div>
  );
};
export default EstudiantePage;

import { useNavigate } from "react-router-dom";
import Estudiante from "../components/Estudiante";
//import { useEstudiante } from "../hooks/useEstudiante";
//import listEstudiantes from "../urls/data";
//import EstudianteForm from "../components/EstudianteForm";

const EstudiantePage = (props) => {
  const { estudiantes } = props;
  const { onEliminar } = props;
  const navegar = useNavigate();
  console.log("Renderizando....");

  return (
    <div>
      <h1>Estudiantes</h1>
      {/*<EstudianteForm onAgregar={agregarEstudiante}></EstudianteForm>*/}
      <button
        onClick={() => {
          navegar("/nuevo");
        }}
      >
        <strong>+</strong>
      </button>
      <hr />
      <div>
        {estudiantes.map((estudiante) => {
          return (
            <div key={estudiante._id}>
              <Estudiante
                _id={estudiante._id}
                nombre={estudiante.nombre}
                edad={estudiante.edad}
                url={estudiante.url}
              ></Estudiante>
              <button
                onClick={() => navegar(`/estudiantes/${estudiante._id}/detalle`)}
              >
                Detalle
              </button>
              <button onClick={() => onEliminar(estudiante._id)}>  
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EstudiantePage;

import { useState } from "react";
import Estudiante from "../components/Estudiante";
import listEstudiantes from "../urls/data";
import EstudianteForm from "../components/EstudianteForm";
const EstudiantePage = () => {
  const [lstEstudiante, setLstEstudiante] = useState(listEstudiantes);
  console.log("Renderizando....");
  //Paso 1
  const agregarEstudiante = (estudianteNuevo) => {
    const estudianteFinal= {...estudianteNuevo,id:Date.now()}
    setLstEstudiante((prev)=>[...prev,estudianteFinal]) 
    
  };

  return (
    <div>
      <h1>Estudiantes</h1>
      <EstudianteForm onAgregar={agregarEstudiante}></EstudianteForm>
      <hr />
      <div>
        {lstEstudiante.map((estudiante) => {
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

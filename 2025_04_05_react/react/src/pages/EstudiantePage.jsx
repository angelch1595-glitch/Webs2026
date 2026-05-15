import { useEffect, useState } from "react";
import Estudiante from "../components/Estudiante";
//import listEstudiantes from "../urls/data";
import axios from "axios";
import EstudianteForm from "../components/EstudianteForm";
const EstudiantePage = () => {
  const [lstEstudiante, setLstEstudiante] = useState([]);
  console.log("Renderizando....");
  useEffect(() => {
    axios
      .get("http://localhost:8000/estudiantes")
      .then((res) => {
        console.log(res.data);
        setLstEstudiante(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //Paso 1
  const agregarEstudiante = (estudianteNuevo) => {
    const estudianteFinal = { ...estudianteNuevo, id: Date.now() };
    //setLstEstudiante((prev) => [...prev, estudianteFinal]);
    axios
      .post("http://localhost:8000/estudiantes",estudianteFinal)
      .then((res) => {
        setLstEstudiante([...setLstEstudiante, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Estudiantes</h1>
      {/*<EstudianteForm onAgregar={agregarEstudiante}></EstudianteForm>*/}
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

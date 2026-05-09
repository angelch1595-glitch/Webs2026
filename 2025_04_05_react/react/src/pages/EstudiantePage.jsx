import { useState } from "react";
import Estudiante from "../components/Estudiante";
import listEstudiantes from "../urls/data";
const EstudiantePage = () => {
  const [lstEstudiante, setLstEstudiante] = useState(listEstudiantes);
  const [estudianteNuevo, setEstudianteNuevo] = useState({
    id: Date.now(),
    nombre: "",
    edad: 0,
    url: "",
  });
  const [idEditar, setIdEditar] = useState(0);

  const agregarEstudiante = (event) => {
    event.preventDefault();
    if (idEditar !== 0) {
      setLstEstudiante(
    lstEstudiante.map((est) => {
          return est.id === idEditar
            ? {
                id: estudianteNuevo.id,
                nombre: estudianteNuevo.nombre,
                edad: estudianteNuevo.edad,
                url:estudianteNuevo.url
              }
            : est;
        }),
      );
    }
    else {
        setLstEstudiante([
            ...lstEstudiante,
            {...estudianteNuevo}
        ])
    }
    setEstudianteNuevo({
        id:Date.now(),
        nombre:"",
        edad:0,
        url:""
    });
    setIdEditar(0);
  };

  const editarEstudiante = (idEstudiante) => {
    const estudianteEncontrado = lstEstudiante.find((estudiante) => {
      return estudiante.id === idEstudiante;
    });

    setEstudianteNuevo({
      id: estudianteEncontrado.id,
      nombre: estudianteEncontrado.nombre,
      edad: estudianteEncontrado.edad,
      url: estudianteEncontrado.url,
    });
    setIdEditar(estudianteEncontrado.id);
  };
  const eliminarEstudiante = (idEstudiante) => {
    setLstEstudiante(
      lstEstudiante.filter((estudiante) => {
        return estudiante.id !== idEstudiante;
      }),
    );
  };
  return (
    <div>
      <h1>Estudiantes</h1>
      <form onSubmit={agregarEstudiante}>
        <div>
          <label htmlFor="txtNombre">Nombre: </label>
          <input
            type="text"
            name="txtNombre"
            id="txtNombre"
            value={estudianteNuevo.nombre}
            onChange={(e) => {
              setEstudianteNuevo({
                ...estudianteNuevo,
                nombre: e.target.value,
              });
            }}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="txtEdad">Edad: </label>
          <input
            type="text"
            name="txtEdad"
            id="txtEdad"
            value={estudianteNuevo.edad}
            onChange={(e) => {
              setEstudianteNuevo({
                ...estudianteNuevo,
                edad: e.target.value,
              });
            }}
            placeholder="Ingresa tu edad"
            required
          />
        </div>
        <div>
          <label htmlFor="txtUrl">Url: </label>
          <input
            type="text"
            name="txtUrl"
            id="txtUrl"
            value={estudianteNuevo.url}
            onChange={(e) => {
              setEstudianteNuevo({
                ...estudianteNuevo,
                url: e.target.value,
              });
            }}
            placeholder="Ingresa la URL"
            required
          />
        </div>
        <div>
          <input type="submit" value="Agregar" />
        </div>
      </form>
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
              eliminarEstudiante={eliminarEstudiante}
              editarEstudiante={editarEstudiante}
            ></Estudiante>
          );
        })}
      </div>
    </div>
  );
};
export default EstudiantePage;

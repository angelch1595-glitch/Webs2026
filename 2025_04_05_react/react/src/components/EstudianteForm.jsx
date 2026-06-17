import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";

const EstudianteForm = (props) => {
  const navegar = useNavigate();
  const { id } = useParams();

  const { onAgregar, onEditar } = props;

  const [errorNombre, setErrorNombre] = useState("");
  const [errorEdad, setErrorEdad] = useState("");

  const [estudianteNuevo, setEstudianteNuevo] = useState({
    nombre: "",
    edad: "",
    url: "",
  });
  useEffect(() => {
    api
      .get(`/estudiantes/${id}`)
      .then((res) => setEstudianteNuevo(res.data))
      .catch((err) => console.log(err));
  },[id]);

  const guardarEstudiante = (e) => {
    e.preventDefault();

    if (estudianteNuevo.nombre.length > 18) {
      setErrorNombre("Maximo 10 caracteres");
      return;
    }

    if (estudianteNuevo.edad <= 18) {
      setErrorEdad("Debes ser mayor de 18 años");
      return;
    }

    setErrorNombre("");
    setErrorEdad("");

    if (id) {
      onEditar(id, estudianteNuevo);
    } else {
      onAgregar(estudianteNuevo);
    }

    navegar("/estudiantes");
  };

  return (
    <form onSubmit={guardarEstudiante}>
      <div>
        <label htmlFor="txtNombre">Nombre: </label>
        <input
          type="text"
          id="txtNombre"
          name="nombre"
          value={estudianteNuevo.nombre}
          onChange={(e) =>
            setEstudianteNuevo({
              ...estudianteNuevo,
              nombre: e.target.value,
            })
          }
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

      <div>{errorNombre}</div>

      <div>
        <label htmlFor="txtEdad">Edad: </label>
        <input
          type="text"
          id="txtEdad"
          name="edad"
          value={estudianteNuevo.edad}
          onChange={(e) =>
            setEstudianteNuevo({
              ...estudianteNuevo,
              edad: e.target.value,
            })
          }
          placeholder="Ingresa tu edad"
          required
        />
      </div>

      <div>{errorEdad}</div>

      <div>
        <label htmlFor="txtUrl">Url: </label>
        <input
          type="text"
          id="txtUrl"
          name="url"
          value={estudianteNuevo.url}
          onChange={(e) =>
            setEstudianteNuevo({
              ...estudianteNuevo,
              url: e.target.value,
            })
          }
          placeholder="Ingresa la URL"
          required
        />
      </div>

      <div>
        <input type="submit" value={id ? "Actualizar" : "Agregar"} />
      </div>
    </form>
  );
};

export default EstudianteForm;

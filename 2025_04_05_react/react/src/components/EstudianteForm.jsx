import { useState } from "react";
const EstudianteForm = (props) => {
  const { onAgregar } = props;
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEdad, setErrorEdad] = useState("");
  const [estudianteNuevo, setEstudianteNuevo] = useState({
    id: Date.now,
    nombre: "",
    edad: "",
    url: "",
  });

  const agregarEstudiante = (e) => {
    e.preventDefault();
    if (estudianteNuevo.nombre.length > 8) {
      setErrorNombre("Maximo 8 caracteres");
    } else if (estudianteNuevo.edad <= 18) {
      setErrorEdad("Debes ser mayor de 18 años");
    } else {
      onAgregar(estudianteNuevo);
      setErrorNombre("");
      setErrorEdad("");
      setEstudianteNuevo({ ...estudianteNuevo, nombre: "", edad: "", url: "" });
    }
  };

  return (
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
      <div>{errorNombre}</div>
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
      <div>{errorEdad}</div>
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
  );
};
export default EstudianteForm;

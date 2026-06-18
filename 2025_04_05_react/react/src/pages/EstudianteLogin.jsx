import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
const EstudianteLogin = (props) => {
  const navegar = useNavigate();
  const { onValidar } = props;
  const [mensajeLogin, setMensajeLogin] = useState("");

  const [estudianteLogin, setEstudianteLogin] = useState({
    email: "",
    password: ""
  });

  const loogearEstudiante = (e) => {
    e.preventDefault();

    onValidar(estudianteLogin) 
      .then((respuesta) => {
        setMensajeLogin(respuesta.message);
      })
      .catch((error) => {
        setMensajeLogin(error.message);
      });
  };
  return (
    <form onSubmit={loogearEstudiante}>
      <div>
        <label htmlFor="txtEmail">Email: </label>
        <input
          type="email"
          id="txtEmail"
          name="email"
          value={estudianteLogin.email}
          onChange={(e) =>
            setEstudianteLogin({
              ...estudianteLogin,
              email: e.target.value,
            })
          }
          placeholder="Ingresa la Email"
          required
        />
      </div>
      <div>
        <label htmlFor="txtPassword">Password: </label>
        <input
          type="password"
          id="txtPassword"
          name="password"
          value={estudianteLogin.password}
          onChange={(e) =>
            setEstudianteLogin({
              ...estudianteLogin,
              password: e.target.value,
            })
          }
          placeholder="Ingresa la password"
          required
        />
      </div>
      <div>
        {mensajeLogin}
      </div>
      <div>
        <input type="submit" value={"Login"} />
      </div>
    </form>
  );
};

export default EstudianteLogin;

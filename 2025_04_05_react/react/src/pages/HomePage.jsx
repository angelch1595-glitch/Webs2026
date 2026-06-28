import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <div>
        <Link to="/userEstudiantes">Crear cuenta</Link>
      </div>
      <div>
        {" "}
        <Link to="/userEstudiantes/login">Iniciar Sesion</Link>
      </div>
    </div>
  );
};
export default HomePage;

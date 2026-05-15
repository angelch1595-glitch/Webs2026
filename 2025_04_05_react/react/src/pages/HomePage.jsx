import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <div>
        <Link to="/estudiantes">Lista de estudiantes</Link>
      </div>
      <div>
        {" "}
        <Link to="/nuevo">Agregar Estudiante</Link>
      </div>
    </div>
  );
};
export default HomePage;

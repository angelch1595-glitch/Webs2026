import EstudianteForm from "./components/EstudianteForm";
import EstudiantePage from "./pages/EstudiantePage";
import HomePage from "./pages/HomePage";
import DetalleEstudiante from "./pages/DetalleEstudiante";
import { useEstudiante } from "./hooks/useEstudiante";
import EstudianteLogin from "./pages/EstudianteLogin";
import UserEstudianteForm from "./components/UserEstudianteFrom";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App=()=>{
  const { estudiantes ,agregarEstudiante,eliminarEstudiante,actualizarEstudiante,validarEstudiante,agregarUserEstudiante}=useEstudiante()
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/estudiantes" element={<EstudiantePage estudiantes={estudiantes} onEliminar={eliminarEstudiante}/>}/>{/* 3 */ }
      <Route path="/nuevo" element={<EstudianteForm onAgregar={agregarEstudiante} />}/>
      <Route path= "/estudiantes/:id/detalle" element= {<DetalleEstudiante/>}></Route>
      <Route path="/estudiantes/:id/editar" element={<EstudianteForm onEditar={actualizarEstudiante}/>}></Route>
      <Route path="/userEstudiantes/login" element={<EstudianteLogin onValidar={validarEstudiante}/>}></Route>
      <Route path="/userEstudiantes" element={<UserEstudianteForm onAgregar={agregarUserEstudiante}/>}></Route>
      <Route path="/" element= {<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;

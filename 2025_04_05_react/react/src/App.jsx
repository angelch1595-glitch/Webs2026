import EstudianteForm from "./components/EstudianteForm";
import EstudiantePage from "./pages/EstudiantePage";
import HomePage from "./pages/HomePage";
import { useEstudiante } from "./hooks/useEstudiante";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App=()=>{
  const { estudiantes ,agregarEstudiante}=useEstudiante()
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/estudiantes" element={<EstudiantePage estudiantes={estudiantes}/>}/>
      <Route path="/nuevo" element={<EstudianteForm onAgregar={agregarEstudiante}/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
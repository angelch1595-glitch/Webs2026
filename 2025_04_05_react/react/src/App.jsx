import EstudianteForm from "./components/EstudianteForm";
import EstudiantePage from "./pages/EstudiantePage";
import HomePage from "./pages/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/estudiantes" element={<EstudiantePage/>}/>
      <Route path="/nuevo" element={<EstudianteForm/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
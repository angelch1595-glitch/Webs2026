import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
const DetalleEstudiante = () => {
  const [estudiante, setEstudiante] = useState({});
  const { id } = useParams(); //use params devuelve?
  const navegar = useNavigate();
  const verDetalles = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        console.log("Loguéate");
        return;
      }
      try {
        const res = await api.get(`/estudiantes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setEstudiante(res.data)
      } catch (err){
        console.log(err)
      }
  }
    
  useEffect(()=>{verDetalles()}, [id]);

  return (
    <div>
      <button onClick={()=>(navegar("/estudiantes"))}>Volver</button>
      <h2>{estudiante.nombre}</h2>
      <h4>{estudiante.email}</h4>
      <h4>Edad: {estudiante.edad}</h4>
      {estudiante.url ? (
        <a href={estudiante.url}>Home Page</a>
      ) : (
        <span>Home Page no disponible</span>
      )}
      <div>
        <button onClick={() => navegar(`/estudiantes/${id}/editar`)}>Editar</button>
      </div>
    </div>
  );
};

export default DetalleEstudiante;

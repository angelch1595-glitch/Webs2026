//Gestionar el estado y las conexiones a la API que afectan a ese estado.
import { useEffect, useState } from "react";
import { api } from "../utils/api";
export const useEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [mensaje,setMensaje]=useState({})
    useEffect(() => {
        api
            .get("/estudiantes")
            .then((res) => {
                setEstudiantes(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const agregarEstudiante = (estudianteNuevo) => {
        const estudianteFinal = { ...estudianteNuevo };
        //setLstEstudiante((prev) => [...prev, estudianteFinal]);
        api
            .post("/estudiantes", estudianteFinal)
            .then((res) => {
                setEstudiantes((prev) => [...prev, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    const actualizarEstudiante=(id,estudiante)=>{
        api.put(`/estudiantes/${id}`,estudiante)
        .then((res)=>{
            setEstudiantes(prev=>prev.map((e)=>e._id===id?res.data:e))
        })
        .catch(err=>console.log(err))
    }
    const eliminarEstudiante = (id) => {
        api.delete(`/estudiantes/${id}`)
            .then(() => setEstudiantes((prev) => prev.filter(e => e._id !== id)))
            .catch(err => console.log(err))

    }
   const validarEstudiante = (estudianteLogin) => {
    return api.post(`/estudiantes/login`, estudianteLogin)
        .then(res => {
            return res.data; 
        })
        .catch(err => {
            if (err.response) {
                throw err.response.data;
            }
            throw { message: "Error de conexión" };
        });
}
    return { estudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante,validarEstudiante }
}
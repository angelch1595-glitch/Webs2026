//Gestionar el estado y las conexiones a la API que afectan a ese estado.
import { useEffect, useState } from "react";
import { api } from "../utils/api";
export const useEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);
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
                setEstudiantes((prev)=>[...prev, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const eliminarEstudiante = (id) => {
        api.delete(`/estudiantes/${id}`)
        .then(()=>setEstudiantes((prev)=>prev.filter(e=>e.id!==id)))
        .catch(err=>console.log(err))

    }
    return { estudiantes ,agregarEstudiante,eliminarEstudiante}
}
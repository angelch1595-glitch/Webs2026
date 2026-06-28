
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export const useEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    const [userEstudiantes, setUserEstudiantes] = useState([]);

    const cargarEstudiantes = async (tokenRecibido) => {
        const token = tokenRecibido || localStorage.getItem("token");

        if (!token) {
            console.log("Loguéate");
            return;
        }

        try {
            const res = await api.get("/estudiantes", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEstudiantes(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        cargarEstudiantes();
    }, []);

    const agregarEstudiante = async (estudianteNuevo) => {
        const token = localStorage.getItem("token")
        const estudianteFinal = { ...estudianteNuevo };
        if(!token){
            console.log("Loogeate")
        }
        try {
            const res = await api.post(`/estudiantes`, estudianteFinal, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setEstudiantes((prev) => [...prev, res.data]);
        } catch (err) {
            console.log(err);
        }
    };

    const actualizarEstudiante = async (id, estudiante) => {
        const token = localStorage.getItem("token")
        if (!token) {
            console.log("loogeate")
        }
        try {
            const res = await api.put(`/estudiantes/${id}`, estudiante, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setEstudiantes(prev => prev.map((e) => e._id === id ? res.data : e));
        }

        catch (err) {
            console.log(err)
        };
    }

    const agregarUserEstudiante = (userEstudianteNuevo) => {
        const userEstudianteFinal = { ...userEstudianteNuevo };
        api.post(`/userEstudiantes`, userEstudianteFinal)
            .then((res) => { setUserEstudiantes((prev) => [...prev, res.data]) })
            .catch(err => console.log(err))
    }


    const eliminarEstudiante = async (id) => {
        const token = localStorage.getItem("token")
        if (!token) {
            console.log("Loogeate")
        }
        try {
            const res = await api.delete(`/estudiantes/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setEstudiantes((prev) => prev.filter(e => e._id !== id))
        }

        catch (err) {
            console.log(err)
        }
    };
    const validarEstudiante = async (estudianteLogin) => {
        try {
            const respuesta = await api.post(`/userEstudiantes/login`, estudianteLogin);
            const token = respuesta.data.token;
            localStorage.setItem("token", token);
            await cargarEstudiantes(token);

            return token;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw { message: "error de conexion" };
        }
    };

    return { estudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante, validarEstudiante, agregarUserEstudiante };
};
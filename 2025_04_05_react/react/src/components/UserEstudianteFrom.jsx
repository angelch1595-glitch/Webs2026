import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";

const UserEstudianteForm = (props) => {
    const navegar = useNavigate();
    const { onAgregar } = props;
    const [errorNombre, setErrorNombre] = useState("");
    const [userEstudianteNuevo, setUserEstudianteNuevo] = useState({
        nombre: "",
        email: "",
        password: "",
        rol: ""
    });

    const guardarUserEstudiante = (e) => {
        e.preventDefault();

        if (userEstudianteNuevo.nombre.length > 18) {
            setErrorNombre("Maximo 10 caracteres");
            return;
        }
        onAgregar(userEstudianteNuevo);
        navegar("/userEstudiantes/login");
        setErrorNombre("");
    };

    return (
        <div>
            <button onClick={() => { navegar("/") }}>Volver</button>
            <form onSubmit={guardarUserEstudiante}>
                <div>
                    <label htmlFor="txtNombre">Nombre: </label>
                    <input
                        type="text"
                        id="txtNombre"
                        name="nombre"
                        value={userEstudianteNuevo.nombre}
                        onChange={(e) =>
                            setUserEstudianteNuevo({
                                ...userEstudianteNuevo,
                                nombre: e.target.value,
                            })
                        }
                        placeholder="Ingresa tu nombre"
                        required
                    />
                </div>

                <div>{errorNombre}</div>
                <div>
                    <label htmlFor="txtEmail">Email: </label>
                    <input
                        type="email"
                        id="txtEmail"
                        name="email"
                        value={userEstudianteNuevo.value}
                        onChange={(e) =>
                            setUserEstudianteNuevo({
                                ...userEstudianteNuevo,
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
                        value={userEstudianteNuevo.password}
                        onChange={(e) =>
                            setUserEstudianteNuevo({
                                ...userEstudianteNuevo,
                                password: e.target.value,
                            })
                        }
                        placeholder="Ingresa la password"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="txtRol">Rol: </label>
                    <select
                        id="txtRol"
                        name="rol"
                        value={userEstudianteNuevo.rol}
                        onChange={(e) =>
                            setUserEstudianteNuevo({
                                ...userEstudianteNuevo,
                                rol: e.target.value,
                            })
                        }
                        required
                    >
                        <option value="">Selecciona un rol</option>
                        <option value="admin">Admin</option>
                        <option value="visualizador">Visualizador</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Crear" />
                </div>
            </form>
        </div>

    );
};

export default UserEstudianteForm;

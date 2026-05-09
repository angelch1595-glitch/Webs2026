const Estudiante = (props) => {
  //{nombre:xxxxedad:00,url:xxxxxxx}
  const { id,nombre, edad, url,eliminarEstudiante,editarEstudiante} = props;
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{edad}</h2>
      <a href={url} target="_blank">
        home
      </a>
      <button onClick={()=>{eliminarEstudiante(id)}}>Eliminar</button>
      <button onClick={()=>{editarEstudiante(id)}}>Editar</button>
    </div>
  );
};
export default Estudiante;

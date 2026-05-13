const Estudiante = (props) => {
  //{nombre:xxxxedad:00,url:xxxxxxx}
  const {nombre, edad, url} = props;
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{edad}</h2>
      <a href={url} target="_blank">
        home
      </a>
    </div>
  );
};
export default Estudiante;

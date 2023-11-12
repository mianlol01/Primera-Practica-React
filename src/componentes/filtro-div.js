import "../styles/filtro.css";
function Filtro(props) {

  return (
    <div className="contenedor-filtro">
      <img
        className="imagen-filtro"
        src={require(`../imagenes/filtro-${props.imagen}.png`)}
        alt = {`imagen de ${props.alt}`}
      />
      <h1 className="categoria-filtro">{props.categoria}</h1>
    </div>
  );
}

export default Filtro;

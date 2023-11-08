import "../styles/Personaje.css";

function Personaje(props) {
  return (
    <div className="contenedor-personaje">
      <img
        className="imagen-personaje"
        src={require(`../imagenes/${props.imagen}.webp`)}
        alt={`${props.alt}`}
      />
      <div class="linea-vertical"></div>
      <div className="contenedor-texto-personaje">
        <p className="nombre-personaje"><strong>{props.nombre}</strong></p>
        <p className="categoria-personaje">{props.categoria}</p>
        <p className="desc-personaje">{props.desc}</p>
      </div>
    </div>
  );
}
export default Personaje;

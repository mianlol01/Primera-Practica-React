import "../styles/Personaje.css";

function Personaje(props) {
  return (
    <div className="contenedor-personaje">
      <div className="contenedor-imagen">
        <img
          className="imagen-personaje"
          src={require(`../imagenes/${props.personaje.imagen}.webp`)}
          alt={`${props.personaje.alt}`}
        />
        <div className="borde-contorno"></div>
      </div>
      <div className="linea-vertical"></div>
      <div className="contenedor-texto-personaje">
        <p className="nombre-personaje">
          <strong>{props.personaje.nombre}</strong>
        </p>
        <p className="categoria-personaje">{props.personaje.categoria}</p>
        <p className="desc-personaje">{props.personaje.desc}</p>
      </div>
    </div>
  );
}
export default Personaje;

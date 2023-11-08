import "./App.css";
import Personaje from "./componentes/Personaje.js";

function App() {
  return (
    <div className="App">
      <div className="titulo">
        <h1>Personajes de Hollow Knight</h1>
      </div>
      <div className="contenedor-principal">
        <Personaje
          imagen="knight"
          alt="Imagen del Caballero"
          nombre="Knight"
          categoria="Principal"
          desc="Es el personaje que el jugador controla a lo largo de la historia principal en Hollow Knight."
        />
        <Personaje
          imagen="hornet"
          alt="Imagen de Hornet"
          nombre="Hornet"
          categoria="NPC"
          desc="Hornet es la misteriosa princesa protectora de las ruinas de Hallownest; y de los personajes principales."
        />
        <Personaje
          imagen="hollow-knight"
          alt="Imagen del Hollow Knight"
          nombre="Hollow Knight"
          categoria="Jefe"
          desc="Es el centro (por decirlo de alguna forma) del viaje del Caballero y la historia de Hallownest."
        />
        <Personaje
          imagen="pale-king"
          alt="Imagen del Rey Pálido"
          nombre="Rey Pálido"
          categoria="NPC"
          desc="El Rey Pálido era el monarca de Hallownest, compañero de la Dama Blanca y gobernante del Palacio Blanco."
        />
        <Personaje
          imagen="white-lady"
          alt="Imagen de la Dama Blanca"
          nombre="Dama Blanca"
          categoria="NPC"
          desc="Se sospecha que se trata de la reina de Hallownest, debido a su localización, diálogo y contexto."
        />
        <Personaje
          imagen="elderbug"
          alt="Imagen del Viejo Indecto"
          nombre="Viejo Insecto"
          categoria="NPC"
          desc="El residente más anciano de Bocasucia, es amable con todos los viajantes que buscan entrar al Reino."
        />
        <Personaje
          imagen="cornifer"
          alt="Imagen de Cornifer"
          nombre="Cornifer"
          categoria="Errante"
          desc="Cornifer se encuentra en todas las zonas donde es posible conseguir un mapa. Los papeles en el suelo y su tarareo revelan su posición."
        />
        <Personaje
          imagen="sly"
          alt="Imagen de Sly"
          nombre="Sly"
          categoria="Comerciante"
          desc="Tras despertarlo hablando con él, vuelve a Bocasucia para abrir su tienda."
        />
        <Personaje
          imagen="quirrel"
          alt="Imagen de Quirrel"
          nombre="Quirrel"
          categoria="Errante"
          desc="Es un viejo explorador que ha olvidado su pasado de forma literal y ahora busca conocer los misterios de Hallownest."
        />
      </div>
    </div>
  );
}

export default App;

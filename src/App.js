import "./App.css";
import Personaje from "./componentes/Personaje.js";
import Color from "./componentes/Color.js";
import FiltroCategoria from "./componentes/Filtro-Categoria.js";
import { useFiltrado } from "./funciones/Funcion-Filtro-Categoria.js";

function App() {
  const { categoriasUnicas, handleCategoriaSeleccionada, personajesFiltrados } =
    useFiltrado();

  return (
    <div className="App">
      <div className="titulo">
        <div>
          <FiltroCategoria
            categorias={categoriasUnicas}
            onCategoriaSeleccionada={handleCategoriaSeleccionada}
          />
          <div></div>
        </div>
        <Color />
      </div>
      <div className="contenedor-principal">
        {personajesFiltrados.map((personaje, index) => (
          <Personaje key={index} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default App;

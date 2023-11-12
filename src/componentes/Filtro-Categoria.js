// FiltroCategoria.js
import React, { useState } from "react";
import "../styles/Filtro-Categoria.css";

const FiltroCategoria = ({ categorias, onCategoriaSeleccionada }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleChange = (event) => {
    const nuevaCategoria = event.target.value;
    setCategoriaSeleccionada(nuevaCategoria);
    onCategoriaSeleccionada(nuevaCategoria);
  };

  return (
    <div className="filtro">
      <h1 className="label">Filtrar</h1>
      <select value={categoriaSeleccionada} onChange={handleChange}>
        <option value="">Todas</option>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroCategoria;

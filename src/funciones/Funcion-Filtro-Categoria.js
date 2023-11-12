import { useState } from 'react';
import { personajesData } from "../objetos/Arreglo-Personajes";

export const useFiltrado = () => {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState("");

  const categoriasUnicas = [
    ...new Set(personajesData.map((personaje) => personaje.categoria)),
  ];

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  const personajesFiltrados = categoriaFiltrada
    ? personajesData.filter(
        (personaje) => personaje.categoria === categoriaFiltrada
      )
    : personajesData;

  return {
    categoriaFiltrada,
    categoriasUnicas,
    handleCategoriaSeleccionada,
    personajesFiltrados,
  };
};
import React, { useEffect, useState } from "react";
import { getPersonajes } from "../../api";
import Tarjetas from "../Tarjetas/Tarjetas";
import "./PersonajeContainer.css";

export default function PersonajeContainer() {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1); // Estado para el número de página actual

  const fetchData = async (pageNumber) => {
    try {
      const data = await getPersonajes(pageNumber);
      if (pageNumber === 1) {
        setPersonajes(data.results); // Si es la página 1, reemplaza los personajes
      } else {
        setPersonajes((prevData) => [...prevData, ...data.results]); // Concatena los nuevos personajes
      }
    } catch (error) {
      console.error("Error al obtener los personajes", error);
    }
  };

  useEffect(() => {
    fetchData(page); // Carga los personajes de la página actual al montar el componente
  }, [page]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <div className="containerPJ">
      {personajes.map((personaje) => (
        <Tarjetas key={personaje.id} Data={personaje} tipo="personaje" />
      ))}
      <div className="button-container">
        <button className="load-more-button" onClick={handleLoadMore}>
          Ver Más
        </button>
      </div>
    </div>
  );
}

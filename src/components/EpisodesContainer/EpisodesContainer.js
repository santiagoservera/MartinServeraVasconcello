import React, { useEffect, useState } from "react";
import { getEpisodios } from "../../api";
import Tarjetas from "../Tarjetas/Tarjetas";
import './EpisodeContainer.css'

export default function EpisodesContainer() {
  const [episodios, setEpisodios] = useState([]);
  const [page, setPage] = useState(1); // Estado para el número de página actual

  const fetchData = async (pageNumber) => {
    try {
      const data = await getEpisodios(pageNumber);
      if (pageNumber === 1) {
        setEpisodios(data.results); // Si es la página 1, reemplaza los episodios
      } else {
        setEpisodios((prevData) => [...prevData, ...data.results]); // Concatena los nuevos episodios
      }
    } catch (error) {
      console.error("Error al obtener los episodios", error);
    }
  };

  useEffect(() => {
    fetchData(page); // Carga los episodios de la página actual al montar el componente
  }, [page]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <div>
      {episodios.map((episodio) => (
        <Tarjetas key={episodio.id} Data={episodio} tipo="episodio" />
      ))}
      <div className="button-container">
        <button className="load-more-button" onClick={handleLoadMore}>Ver Más</button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getEpisodios} from "../../api";
import Tarjetas from "../Tarjetas/Tarjetas";

export default function EpisodesContainer() {
  const [episodios, setEpisodios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await getEpisodios();
        setEpisodios(Data.results);
      } catch (error) {
        console.error("Error al obtener los personajes", error);
      }
    };
    fetchData();
  }, []);

  console.log("Aca vemos los episodios", episodios);

  return (
    <div>
      {episodios.map((episodios) => (<Tarjetas key={episodios.id} Data={episodios} />))}
    </div>
  );
}

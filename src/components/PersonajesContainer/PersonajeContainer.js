import React, { useEffect, useState } from "react";
import { getPersonajes } from "../../api";
import Tarjetas from "../Tarjetas/Tarjetas";

export default function PersonajeContainer() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await getPersonajes();
        setPersonajes(Data.results);
      } catch (error) {
        console.error("Error al obtener los personajes", error);
      }
    };
    fetchData();
  }, []);

  console.log("Aca vemos los pj", personajes);

  return (
    <div>
      {personajes.map((personajes) => (<Tarjetas key={personajes.id} Data={personajes} />))}
    </div>
  );
}

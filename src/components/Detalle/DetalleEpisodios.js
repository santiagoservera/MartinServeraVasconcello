import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisodiosPorId } from '../../api'; 
import './DetalleEpisodio.css';

export default function DetalleEpisodios() {
  const { id } = useParams();
  const [episodio, setPersonaje] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await getEpisodiosPorId(id);
        console.log('Respuesta de la API para el episodio:', Data);
        setPersonaje(Data);
      } catch (error) {
        console.error('Error al obtener el episodio por ID', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="DetalleEpisodios"> {/* Aplica la clase DetalleEpisodios */}
    {episodio ? (
      <div>
        <h1>{episodio.name}</h1>
        <img src={episodio.image} alt={episodio.name} />
        <h2>Fecha de lanzamiento :{episodio.air_date}</h2>
        {/* Mostrar otros detalles del episodio aquí */}
      </div>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
);
}

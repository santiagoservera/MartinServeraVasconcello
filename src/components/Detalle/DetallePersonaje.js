import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonajePorId } from '../../api'; 
import './DetallePersonaje.css'
export default function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await getPersonajePorId(id);
        console.log('Respuesta de la API para el personaje:', Data);
        setPersonaje(Data);
      } catch (error) {
        console.error('Error al obtener el personaje por ID', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="DetallePersonaje" >
    {personaje ? (
      <div>
        <h1>{personaje.name}</h1>
        <img src={personaje.image} alt={personaje.name} />
        <p className="otros-detalles">Género: {personaje.gender}</p>
        <p className="otros-detalles">Especie: {personaje.species}</p>
        
      </div>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
  );
}

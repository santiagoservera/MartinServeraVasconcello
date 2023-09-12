import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener el parámetro de la URL
import { getPersonajes } from '../../api'; // Importa la función para obtener detalles de personaje

export default function DetallePersonaje() {
  const { id } = useParams(); // Obtiene el ID del personaje de la URL
  const [personajes, setPersonaje] = useState(null);

  useEffect(() => {
    // Llama a la función para obtener detalles de personaje usando el ID
    getPersonajes(id)
      .then((Data) => {
        setPersonaje(Data); // Actualiza el estado con los detalles del personaje
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del personaje', error);
      });
  }, [id]);

  return (
    <div>
      {personajes ? (
        <div>
          <h1>{personajes.name}</h1>
          <img src={personajes.image} alt={personajes.name} />
          {/* Mostrar otros detalles del personaje aquí */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}


import React from "react";
import { Link } from 'react-router-dom';
import "./Tarjetas.css";

export default function Tarjetas({ Data, tipo }) {
  const rutaDetalle = tipo === 'personaje' ? `/detallePersonaje/${Data.id}` : `/detalleEpisodio/${Data.id}`;

  return (
    <Link to={rutaDetalle} className="TarjetaEnlace"> {/* Envuelve toda la tarjeta con el enlace */}
      <div className="Tarjeta">
        <h2>{Data.name}</h2>
        <img src={Data.image} alt={Data.name} style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    </Link>
  );
}

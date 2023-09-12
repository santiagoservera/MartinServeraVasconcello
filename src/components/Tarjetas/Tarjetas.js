import React from "react";
import { Link } from 'react-router-dom'; // Importa Link desde React Router
import "./Tarjetas.css";

export default function Tarjetas({ Data }) {
  return (
    <div className="Tarjeta">
      <h2>{Data.name}</h2>
      <Link to={`/detallePersonaje/${Data.id}`}> 
        <img src={Data.image} alt={Data.name} />
      </Link>
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import PersonajeContainer from "./components/PersonajesContainer/PersonajeContainer";
import Navbar from "./components/Navbar/Navbar";
import EpisodesContainer from "./components/EpisodesContainer/EpisodesContainer";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DetallePersonaje from "./components/Detalle/DetallePersonaje";
import DetalleEpisodios from "./components/Detalle/DetalleEpisodios";


function App() {
  // Obtenemos la ubicación actual
  const location = useLocation();

  // Definimos una variable para determinar si se debe mostrar el Navbar
  const showNavbar = location.pathname !== "/";

  return (
    <div>
      {/* Condición para mostrar el Navbar */}
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personajes" element={<PersonajeContainer />} />
        <Route path="/episodios" element={<EpisodesContainer />} />
        <Route path="/detallePersonaje/:id" element={<DetallePersonaje />} />
        <Route path="/detalleEpisodio/:id" element={<DetalleEpisodios />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import PersonajeContainer from "./components/PersonajesContainer/PersonajeContainer";
import Navbar from "./components/Navbar/Navbar";
import EpisodesContainer from "./components/EpisodesContainer/EpisodesContainer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DetallePersonaje from "./components/Detalle/DetallePersonaje";
function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<PersonajeContainer />} />
          <Route path="/episodios" element={<EpisodesContainer />} />
          <Route path="/detallePersonaje/:id" component={<DetallePersonaje/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

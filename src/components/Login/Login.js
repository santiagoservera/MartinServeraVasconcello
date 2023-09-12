import { Link } from 'react-router-dom';
import './Login.css';
import React, {useState} from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleUsuarioChange = (e) => {
      const nuevoUsuario = e.target.value;
      setUsuario(nuevoUsuario);
      console.log("Usuario:", nuevoUsuario);
  }

  const handleContraseñaChange = (e) => {
      const nuevaContraseña = e.target.value;
      setContraseña(nuevaContraseña);
      console.log("Contraseña:", nuevaContraseña);
  }

  return (
      <div className="Logincontainer1">
          <h1>Login</h1>
          <h2>Usuario</h2>
          <input
              className='input'
              type="text"
              onChange={handleUsuarioChange}
          />
          <h2>Contraseña</h2>
          <input
              className='input'
              type="password"
              onChange={handleContraseñaChange}
          />
          <Link to={'/Home'} type="submit" className="button" name="btn">
              Enviar
          </Link>
      </div>
  );
}

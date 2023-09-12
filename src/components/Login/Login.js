import { Link } from 'react-router-dom';
import './Login.css';
import React, {useState} from 'react';

export default function Login() {
    const [usuario, setUsuario]=useState("")
    console.log("Usuario:",usuario)
    const [contraseña, setContraseña]=useState("")
    
    console.log("Contraseña:",contraseña)
  return (
    <div className="Logincontainer1">
      <h1>Login</h1>
      <h2>Usuario</h2>
      <input className='input'
            type="text" 
            onChange={e=> setUsuario(e.target.value)}
          />
        <h2>contraseña</h2>
      <input className='input'
            type="password" 
            onChange={e=> setContraseña(e.target.value)}
          />
          <Link to={'/Home'} type="submit" class="button" name="btn">
            Enviar
          </Link>
          
    </div>
  );
}

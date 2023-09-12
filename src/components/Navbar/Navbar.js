
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar({ onTabChange }) {
  

  return (
    <div className="navbar">
      <h1>Rick and Morty</h1>
      <nav className="tabs">
       
       
       <Link to={'/personajes'}>Personajes</Link>
       <Link to={'/episodios'}>Episodios</Link>
       <Link to={'/Home'}>Inicio</Link>
       <Link to={'/'}>Logout</Link>
      </nav>
    </div>
  );
}

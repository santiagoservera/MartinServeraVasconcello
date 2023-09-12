import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/personajes'>Personajes</Link>
                </li>
                <li>
                <Link to='/episodios'>Episodios</Link>
                </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
}

export default Layout;
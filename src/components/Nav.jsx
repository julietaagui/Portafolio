import { NavLink } from "react-router-dom"
import './home.css';

export default function Nav(){

    return(

        <div>
            <nav className="navbar nav-color">
                    <div className="container d-flex justify-content-between align-items-center">
                      <a className="navbar-brand fw-bold text-white" href="/">Juli</a>
                      <ul className="navbar-nav d-flex flex-row marg-l">
                        <li className="nav-item mx-2">
                          <NavLink to="/" className="nav-link text-white nav-link-hover">
                            Inicio
                          </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                          <NavLink to="/about-me" className="nav-link text-white nav-link-hover">
                            Acerca de mí
                          </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                          <NavLink to="/more-proyects" className="nav-link text-white nav-link-hover">
                            Proyectos
                          </NavLink>
                        </li>
                      </ul>
                      <div className="d-flex">
                          <button className='btn btn-rosa-pri mx-2'>GitHub</button>
                          <button className='btn btn-rosa-pri'>
                            <a href=""><i className="bi bi-arrow-down" style={{color: "white"}}></i></a>
                              Descargar CV
                          </button>
                      </div>
                      
                    </div>
                  </nav>
        </div>
    )
}
import { NavLink } from "react-router-dom"
import './home.css';

export default function Nav(){

    return(
        <div>
            <nav className="navbar shadow-pink nav-color">
                    <div className="container d-flex justify-content-between align-items-center">
                      <a className="navbar-brand fw-bold" href="/"><h4>Juli</h4></a>
                        <ul className="navbar-nav nav-underline d-flex flex-row marg-l">
                          <li className="nav-item mx-2">
                            <NavLink to="/" className="nav-link text-white nav-link-hover">
                              <h5>Inicio</h5>
                            </NavLink>
                          </li>
                          <li className="nav-item mx-2">
                            <NavLink to="/about-me" className="nav-link text-white nav-link-hover">
                              <h5>Acerca de mí</h5>
                            </NavLink>
                          </li>
                          <li className="nav-item mx-2">
                            <NavLink to="/more-proyects" className="nav-link text-white nav-link-hover">
                              <h5>Proyectos</h5>
                            </NavLink>
                          </li>
                        </ul>
                        <div className="d-flex">
                            <a className="none" href="https://www.linkedin.com/in/julieta-aguilera-947231321/" target="_blank">
                                <button className='btn btn-rosa-sec mx-2'>Linkedin</button>
                            </a>
                            <a className="none" href="https://github.com/julietaagui" target="_blank">
                                <button className='btn btn-rosa-sec mx-2'>GitHub</button>
                            </a>
                        </div>
                    </div>
            </nav>
        </div>
    )
}
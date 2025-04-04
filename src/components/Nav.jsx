import { NavLink } from "react-router-dom";
import './home.css';

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-pink nav-color">
                <div className="container">
                    <a className="navbar-brand nav-underline fw-bold" href="/"><h4>Portafolio</h4></a>
                    <button className="navbar-toggler burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"  id="navbarContent">
                        <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0 d-flex flex-lg-row" style={{marginRight: "12rem"}}>
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
                        <div className="d-flex ms-lg-3 mt-lg-0">
                            <a className="none" href="https://www.linkedin.com/in/julieta-aguilera-947231321/" target="_blank" rel="noreferrer">
                                <button className='btn btn-rosa-sec mx-2'>Linkedin</button>
                            </a>
                        </div>
                        <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
                          <a className="none" href="https://github.com/julietaagui" target="_blank" rel="noreferrer">
                                <button className='btn btn-rosa-sec mx-2'>GitHub</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

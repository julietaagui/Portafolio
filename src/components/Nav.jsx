import { NavLink } from "react-router-dom"

export default function Nav(){

    return(

        <div>
            <nav className="navbar nav-link">
                    <div className="container d-flex justify-content-between align-items-center ">
                      <a className="navbar-brand fw-bold text-white" href="/">Juli</a>
                      <ul className="navbar-nav d-flex flex-row">
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
                          <NavLink to="/proyects" className="nav-link text-white nav-link-hover">
                            Proyectos
                          </NavLink>
                        </li>
                      </ul>
                      <a className="btn btn-rosa-pri rounded-pill" href="#"> Contáctame </a>
                    </div>
                  </nav>
        </div>
    )
}
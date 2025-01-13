import './home.css'
import Presentacion from './presentacion';
import AboutMe from './aboutMe';
import HardSkils from './hardSkils';
import Proyects from './proyects';
import Footer from './footer';

export default function Home() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000", color: "#fff" }}>
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="#" style={{ color: "#fff", fontWeight: "bold" }}>Juli</a>
            {/* Botón responsive */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item m-1">
                  <a className="nav-link nav-link-hover text-white" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link nav-link-hover text-white" href="#">
                    Acerca de mí
                  </a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link nav-link-hover text-white" href="#">
                    Proyectos
                  </a>
                </li>
              </ul>
              <a
                className="btn"
                href="#"
                style={{
                  backgroundColor: "#ff0077",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                Contáctame
              </a>
            </div>
          </div>
        </nav>

        <img src="../src/img/banner1.png" className="img-fluid" alt="banner"></img>
        <Presentacion/>
        <AboutMe/>
        <HardSkils/>
        <Proyects/>
        <Footer/>
      </div>
    );
  }
  
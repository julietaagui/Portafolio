import './home.css';
import Presentacion from './presentacion';
import AboutMe from './aboutMe';
import HardSkils from './hardSkils';
import Proyects from './proyects';
import Footer from './footer';

export default function Home() {
  return (
    <div>
      <nav className="navbar nav-link">
        <div className="container d-flex justify-content-between align-items-center ">
          <a className="navbar-brand fw-bold text-white" href="#">Juli</a>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link text-white nav-link-hover" href="#">Inicio</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white nav-link-hover" href="#">Acerca de mí</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white nav-link-hover" href="#">Proyectos</a>
            </li>
          </ul>
          <a className="btn btn-rosa-pri rounded-pill" href="#"> Contáctame </a>
        </div>
      </nav>

      {/* Banner */}
      <div className="container-fluid p-0">
        <img
          src="../src/img/banner1.png"
          className="img-fluid w-100"
          alt="banner"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Secciones */}
      <div className="container mt-5">
        <Presentacion />
        <AboutMe />
        <HardSkils />
        <Proyects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

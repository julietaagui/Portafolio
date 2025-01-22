import './home.css';
import Presentacion from './presentacion';
import Me from './Me';
import HardSkils from './hardSkils';
import Proyects from './proyects';
import Footer from './footer';
import bannerImg from "../img/banner1.png";
import Nav from './nav';
export default function Home() {
  return (
    <div>
      <Nav/>

      {/* Banner */}
      <div className="container-fluid p-0">
        <img
          src={bannerImg}
          className="img-fluid w-100"
          alt="banner"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Secciones */}
      <div className="container mt-5">
        <Presentacion />
        <Me />
        <HardSkils />
        <Proyects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

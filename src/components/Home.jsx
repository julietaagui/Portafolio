import './home.css';
import Me from './Me';
import HardSkils from './HardSkils';
import Proyects from './Proyects';
import Footer from './Footer';
import bannerImg from "../img/banner1.png";
import Nav from './nav';
import Introduce from './Introduce';
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
        <Introduce />
        <Me />
        <HardSkils />
        <Proyects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

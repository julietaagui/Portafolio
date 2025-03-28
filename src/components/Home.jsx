import './home.css';
import Me from './Me';
import HardSkils from './HardSkils';
import Proyects from './proyects';
import Footer from './Footer';
import Nav from './Nav';
import Introduce from './Introduce';

export default function Home() {
  return (
    <div>
      <Nav/>
      <Introduce />
      <div className="container mt-5">
        
        <Me />
        <HardSkils />
        <Proyects />
      </div>

      <Footer />
    </div>
  );
}

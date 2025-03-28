import './home.css';
import Me from './Me';
import Proyects from './proyects';
import Nav from './Nav';
import Introduce from './Introduce';
import HeadSkills from './HeadSkills';

export default function Home() {
  return (
    <div>
      <Nav/>
      <Introduce />
      <div className="container mt-5">
        
        <Me />
        <HeadSkills/>
        <Proyects />
      </div>
    </div>
  );
}

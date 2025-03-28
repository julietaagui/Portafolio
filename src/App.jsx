import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./pages/AboutMe";
import Proyects from "./components/proyects";
import './components/home.css'
import MoreProyects from "./pages/MoreProyects";
import MoreSkills from "./pages/MoreSkills";

export default function App() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/index" />} />
                        <Route path="/index" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/proyects" element={<Proyects />} />
                        <Route path="/more-proyects" element={<MoreProyects />} />
                        <Route path="/more-skills" element={<MoreSkills />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

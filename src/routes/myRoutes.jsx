import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../components/Home")); 
const AboutMe = lazy(() => import("../pages/AboutMe"));
const Proyects = lazy(() => import("../pages/Proyects"))


const MyRoutes = () => {


    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Ruta raíz / redirige a /index */}
                    <Route path="/" element={<Navigate to="/index" />} />
                    
                    <Route path="/index" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/Proyects" element={<Proyects />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default MyRoutes;

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../components/Home")); // Ruta al componente Hola

const MyRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Ruta raíz / redirige a /index */}
                    <Route path="/" element={<Navigate to="/index" />} />
                    
                    {/* Ruta para /index que carga el componente Hola */}
                    <Route path="/index" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default MyRoutes;

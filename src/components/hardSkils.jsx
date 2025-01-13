export default function HardSkils(){

    return(
        <div className="section text-center align-items-center">
            <h1 className="my-5 text-pri">Mis Hard-Skils</h1>
            <div className="d-flex justify-content-center">
                <div className="d-flex">
                    <div className="card m-3 card-color" style={{width: "25.8rem"}}>
                        <div className="card-body">
                            <i className="bi bi-braces" style={{ fontSize: "60px", marginLeft: "1rem", color: "#ff0077" }}></i>
                            <h1 className="card-title text-white">Desarrollo Frontend</h1>
                            <p className="card-text">Con mi experiencia en el desarrollo frontend, tengo una visión clara de cómo crear interfaces intuitivas y atractivas utilizando HTML5, JavaScript y Bootstrap para estructurar, estilizar y dar funcionalidad a las aplicaciones</p>
                        </div>
                    </div>
                    <div className="card m-3 card-color" style={{width: "25.8rem"}}>
                        <div className="card-body">
                            <i className="bi bi-wrench" style={{ fontSize: "50px", marginLeft: "1rem", color: "#ff0077" }}></i>
                            <h1 className="card-title text-white">Herramientas y Colaboración</h1>
                            <p className="card-text">Domino herramientas como Git y GitHub para el control de versiones y colaboración en equipo. Además, tengo experiencia con metodologías ágiles como Scrum, optimizando la entrega de proyectos</p>
                        </div>
                    </div>
                    <div className="card m-3 card-color" style={{width: "25.8rem"}}>
                        <div className="card-body">
                            <i className="bi bi-file-check" style={{ fontSize: "50px", marginLeft: "1rem", color: "#ff0077" }}></i>
                            <h1 className="card-title text-white">Aprendizaje y Adaptabilidad</h1>
                            <p className="card-text">Soy proactiva y flexible, siempre dispuesta a aprender y adaptarme a nuevos desafíos, buscando mejorar continuamente y aportar valor a los proyectos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-container">
                <button className="btn btn-rosa-pri">Ver mas de mis Skils<i className="px-2 bi bi-arrow-right"></i></button>
            </div>
            
            
        </div>
    )
}
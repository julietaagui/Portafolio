export default function HardSkils() {
    return (
      <div className="section text-center align-items-center">
        <h1 className="my-5 text-pri">Mis Hard-Skills</h1>
  
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-color h-100">
                <div className="card-body">
                  <i
                    className="bi bi-braces"
                    style={{ fontSize: "60px", color: "#ff0077" }}
                  ></i>
                  <h1 className="card-title text-white mt-3">Desarrollo Frontend</h1>
                  <p className="card-text">
                    Con mi experiencia en el desarrollo frontend, tengo una visión
                    clara de cómo crear interfaces intuitivas y atractivas
                    utilizando HTML5, JavaScript y Bootstrap para estructurar,
                    estilizar y dar funcionalidad a las aplicaciones.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-color h-100">
                <div className="card-body">
                  <i
                    className="bi bi-wrench"
                    style={{ fontSize: "50px", color: "#ff0077" }}
                  ></i>
                  <h1 className="card-title text-white mt-3">Herramientas y Colaboración</h1>
                  <p className="card-text">
                    Domino herramientas como Git y GitHub para el control de
                    versiones y colaboración en equipo. Además, tengo experiencia
                    con metodologías ágiles como Scrum, optimizando la entrega de
                    proyectos.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-color h-100">
                <div className="card-body">
                  <i
                    className="bi bi-file-check"
                    style={{ fontSize: "50px", color: "#ff0077" }}
                  ></i>
                  <h1 className="card-title text-white mt-3">Aprendizaje y Adaptabilidad</h1>
                  <p className="card-text">
                    Soy proactiva y flexible, siempre dispuesta a aprender y
                    adaptarme a nuevos desafíos, buscando mejorar continuamente y
                    aportar valor a los proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="position-relative">
            <div className="position-absolute top-0 start-50 translate-middle mt-5">
                <button className="btn btn-rosa-pri">
                    Ver más de mis Skills<i className="px-2 bi bi-arrow-right"></i>
                </button>
            </div>
          
        </div>
      </div>
    );
  }
  
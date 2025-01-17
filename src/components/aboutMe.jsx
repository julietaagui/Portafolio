export default function AboutMe() {
    return (
      <div className="section text-center d-flex justify-content-center align-items-center">
        <div className="card mb-3 card-color w-100" style={{ maxWidth: "1300px" }}>
          <div className="row g-0">
            <div className="col-12 col-md-4 p-0">
              <img
                src="../src/img/juli.png"
                className="img-fluid rounded-start"
                alt="Acerca de mí"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="col-12 col-md-8 p-0">
              <div className="card-body">
                <h1 className="card-title my-4 text-pri">Acerca de mí</h1>
                <p className="card-text">
                  Hola! Soy Técnica Universitaria en Programación, orientada al desarrollo de Software con un enfoque en el
                  desarrollo Front-End utilizando React, JS, HTML y Bootstrap. Por otro lado, para el diseño creativo utilizo
                  Figma. Estoy siempre dispuesta a adquirir nuevos conocimientos, tanto trabajando en equipo como de forma
                  autodidacta, lo que me ayuda a seguir aprendiendo y creciendo.
                </p>
                <button className="btn btn-rosa-sec">
                  Más Sobre Mí <i className="px-2 bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
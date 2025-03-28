import { NavLink } from "react-router-dom";

export default function Me() {
    return (
      <div className="section text-center d-flex justify-content-center align-items-center">
        <div className="card mb-3 card-color w-100 shadow-XL border-card" style={{ maxWidth: "1300px" }}>
          <div className="row g-0">
            <div className="col-12 col-md-4 p-0 ">
            <img
                src="/juli.jpg"
                className="img-fluid img-rounded-left"
                alt="Acerca de mí"
                style={{ objectFit: "cover", height: "100%" }}
            />

            </div>
            <div className="col-12 col-md-8 p-0">
              <div className="card-body">
                <h1 className="card-title text-white my-4 text-pri">Acerca de mí</h1>
                <p className="card-text" style={{lineHeight: "1.58"}}>
                  Hola! Soy Técnica Universitaria en Programación, orientada al desarrollo de Software con un enfoque en el
                  desarrollo Front-End utilizando React, JS, HTML y Bootstrap. Por otro lado, para el diseño creativo utilizo
                  Figma. Estoy siempre dispuesta a adquirir nuevos conocimientos, tanto trabajando en equipo como de forma
                  autodidacta, lo que me ayuda a seguir aprendiendo y creciendo.
                </p>
                <NavLink 
                  to={"/about-me"} 
                  className="btn btn-rosa-pri mx-3" 
                  style={{width: '200px'}}
                  onClick={() => window.screen()}
                  >
                  Más Sobre Mí <i className="px-2 bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default function Footer() {
  return (
    <footer className="shadow-pink footer-color py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* Columna izquierda */}
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-white">
            <h4>Portafolio</h4>
            <p className="mb-0">© 2025 Copyright</p>
          </div>

          {/* Columna derecha */}
          <div className="col-12 col-md-6 text-md-end text-white">
            <h6 className="text-uppercase text-pri">Contacto</h6>
            
            <div className="d-flex justify-content-center justify-content-md-end">
              <a
                className="none"
                href="https://www.linkedin.com/in/julieta-aguilera-947231321/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin mx-2" style={{ fontSize: "23px", color: "white" }}></i>
              </a>
              <a
                className="none"
                href="https://github.com/julietaagui"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github mx-2" style={{ fontSize: "23px", color: "white" }}></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

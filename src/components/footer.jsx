export default function Footer() {
    return (
      <footer className="shadow-pink footer-color py-4">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6 text-white">
              <h4>Portafolio</h4>
              <p>© 2025 Copyright</p>
            </div>
  
            <div className="col-md-6 text-md-end text-white">
              <h6 className="text-uppercase text-pri">Contacto</h6>
              <hr className="mb-2 mt-0 d-inline-block mx-auto" />
              <div className="d-flex justify-content-end">
                <a className="none" href="https://www.linkedin.com/in/julieta-aguilera-947231321/" target="_blank">
                    <i className="bi bi-linkedin mx-2" style={{ fontSize: "23px", color: "white" }}></i>
                </a>
                <a className="none" href="https://github.com/julietaagui" target="_blank">
                    <i className="bi bi-github mx-2" style={{ fontSize: "23px", color: "white" }}></i>

                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
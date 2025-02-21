

export default function Footer(){

    return(
    
        <div>
            <footer className="shadow-pink footer-color">
                <section className="pt-1">
                    <div className="text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
                                <h3>Juli</h3>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase text-pri">Inicio</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                <p><a href="#!" className="text-white">Acerca de mi</a></p>
                                <p><a href="#!" className="text-white">Proyectos</a></p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase text-pri">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                <p><a href="#!" className="text-white">Your Account</a></p>
                                <p><a href="#!" className="text-white">Become an Affiliate</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase text-pri">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                <div className="d-flex text-white">
                                    <i className="bi bi-linkedin m-2" style={{fontSize: "23px"}}></i>
                                    <i className="bi bi-github m-2" style={{fontSize: "23px"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center text-white p-3">© 2025 Copyright</div>
            </footer>
        </div>
    )
}
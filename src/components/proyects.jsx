import { NavLink } from "react-router-dom";

export default function Proyects(){
    const data = [
        {
            id: 1,
            name: "Bloom",
            img: '/proyect1.jpg',
            description: 'Este proyecto esta elaborado con figma, se trata de un proyecto ecommerce sobre Botellas Térmicas con una experiencia de usuario intuitiva.'
        },
        {
            id: 2,
            name: "GymCross Admin",
            img: '/proyect2.jpg',
            description: 'Este es un proyecto diseñado con Figma y se trata de una plataforma admin para el manejo de Gimnasios, convina diseño atractivo y funcionalidad. '
        },
        {
            id: 3,
            name: "Plantitas",
            img: '/proyect3.jpg',
            description: 'Este proyecto se desarrollo con las tecnologias React y Bootstrap, se trata de un Ecommerce que a su vez  integra secciones de blogs interactivos.'
        }
    ]

    return(
        <div>
            <div className="section text-center align-items-center">
                <h1 className="my-5 text-pri">Mis proyectos</h1>
                    <div className="container">
                        <div className="row">
                            {data.map((proyect) => (
                                <div className="col-12 col-md-6 col-lg-4 mb-3" key={proyect.id}>
                                    <div className="card card-color text-light h-100 border-card container d-flex flex-column">
                                        <div className="card position-relative m-2 mt-4" >
                                            <img src={proyect.img} alt={proyect.name} className="img-fluid rounded" style={{marginTop: "0.5rem"}}/>
                                        </div>
                                        <div className="card-m">
                                            <h3 className="text-pri text-center" style={{marginTop: "0.5rem"}}>{proyect.name}</h3>
                                            <h6 className="card-text mt-3 text-center text-white" style={{lineHeight: "1.6"}}>
                                                {proyect.description}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                <div className="buttons-container">
                    <NavLink to={"/more-proyects"} className="btn btn-rosa-pri m-5">
                        Ver mas de mis Proyectos<i className="px-2 bi bi-arrow-right"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
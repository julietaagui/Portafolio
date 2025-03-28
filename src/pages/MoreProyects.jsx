import Nav from "../components/Nav";

export default function MoreProyects(){

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
        },
        {
            id: 4,
            name: "Finanzas Flex",
            img: '/proyect4.jpg',
            description: 'Este proyecto cuenta con un frontend y un backend. Mi participación se centró en el desarrollo del frontend, utilizando React y Bootstrap.'
        },
        {
            id: 5,
            name: "GymCross",
            img: '/proyect5.jpg',
            description: 'Este proyecto es la versión móvil del sistema admin GymCross.Esta hecho con figma y en proceso para desarrollarlo con React Native.'
        }
    ]

    return(
        
        <div>
            <Nav/>
            <div className="mt-6 text-center align-items-center">
                <h1 className="my-5 text-pri">Algunos de mis proyectos</h1>
                    <div className="container">
                        <div className="row">
                            {data.map((proyect) => (
                                <div className="col-12 col-md-6 col-lg-4 mb-3" key={proyect.id}>
                                    <div className="card card-color text-light h-100 border-card">
                                        <div className="card-body position-relative m-3" >
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
                
            </div>
        </div>
        
    )
}
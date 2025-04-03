import Nav from "../components/Nav";

export default function MoreProyects(){

    const data = [
        {
            id: 1,
            name: "Bloom",
            img: '/proyect1.jpg',
            description: 'Este proyecto esta elaborado con figma, se trata de un proyecto ecommerce sobre Botellas Térmicas con una experiencia de usuario intuitiva.',
            url: 'https://www.behance.net/gallery/221107105/Bloom'
        },
        {
            id: 2,
            name: "GymCross Admin",
            img: '/proyect2.jpg',
            description: 'Este es un proyecto diseñado con Figma y se trata de una plataforma admin para el manejo de Gimnasios, convina diseño atractivo y funcionalidad.',
            url: 'https://www.figma.com/proto/zk9fwABZFQQr1eWgYixLBe/GymCross?node-id=14-3159&t=fVRFE1zpLmGri6hA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
            clasname: ''
        },
        {
            id: 3,
            name: "Plantitas",
            img: '/proyect3.jpg',
            description: 'Este proyecto se desarrollo con las tecnologias React y Bootstrap, se trata de un Ecommerce que a su vez  integra secciones de blogs interactivos.',
            url: 'https://plantitas-ec.netlify.app/',
            clasname: 'mb-3'
        },
        {
            id: 4,
            name: "Finanzas Flex",
            img: '/proyect4.jpg',
            description: 'Este proyecto cuenta con un frontend y un backend. Mi participación se centró en el desarrollo del frontend, utilizando React y Bootstrap.',
            url: '',
            clasname: ''
        },
        {
            id: 5,
            name: "GymCross",
            img: '/proyect5.jpg',
            description: 'Este proyecto es la versión móvil del sistema admin GymCross.Esta hecho con figma y en proceso para desarrollarlo con React Native.',
            url: 'https://www.figma.com/proto/ONSKp030LtUdt6Y5AvTCCQ/GymCross?node-id=1-1173&t=dp8njr2wru4TNOQr-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
            clasname: ''
        },
        {
            id: 6,
            name: "Landing Page",
            img: '/proyect6.jpg',
            description: 'Landing Page moderna y funcional, creada para impactar y captar la atención del usuario.',
            url: 'https://landin-page-prop.netlify.app/',
            clasname: ''
        }
    ]

    return(
        
        <div>
            <Nav/>
            <div className="text-center align-items-center bottom-x">
                <h1 className="my-5 text-pri">Algunos de mis proyectos</h1>
                    <div className="container">
                        <div className="row">
                        {data.map((proyect) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-3" key={proyect.id}>
                                <div className="card card-color text-light h-100 border-card container d-flex flex-column">
                                    <div className="card position-relative m-2 mt-4">
                                        <img src={proyect.img} alt={proyect.name} className="img-fluid rounded"/>
                                    </div>
                                    <div className="card-m flex-grow-1">
                                        <h3 className="text-pri text-center">{proyect.name}</h3>
                                        <h6 className={`card-text text-center text-white ${proyect.clasname}`} style={{lineHeight: "1.6"}}>
                                            {proyect.description}
                                        </h6>
                                    </div> 
                                    <div className="mt-auto container d-grid mb-3">
                                        <a className="none" href={proyect.url} target="_blank">
                                            <button className='btn btn-rosa-pri w-100'>Ver Proyecto</button>
                                        </a>
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
import Footer from '../components/Footer';
import '../components/home.css'
import Nav from "../components/Nav"

export default function AboutMe(){

    const data = [
        {
            id: 1,
            name: 'JavaScript',
            description: 'Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.',
            icon: 'bi bi-code-slash',
        },
        {
            id: 2,
            name: 'React JS',
            description: 'Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.',
            icon: `
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    >
                    <path
                        fill="currentColor"
                        d="M14.448 16.24a22 22 0 0 1-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884c.863-.498.982-2.225.413-4.484c-.853.19-1.779.334-2.757.424m-1.31.087a28 28 0 0 1-2.275 0c.376.492.758.948 1.137 1.363q.571-.623 1.138-1.364m5.04-7.894c2.665.764 4.406 2.034 4.406 3.567s-1.74 2.803-4.405 3.567c.67 2.69.44 4.832-.887 5.598c-1.327.767-3.297-.105-5.292-2.031c-1.994 1.925-3.964 2.798-5.291 2.031s-1.557-2.908-.887-5.598C3.157 14.803 1.417 13.533 1.417 12s1.74-2.803 4.405-3.567c-.67-2.69-.44-4.832.887-5.599c1.327-.766 3.297.106 5.291 2.032c1.995-1.926 3.965-2.798 5.292-2.032c1.327.767 1.557 2.909.887 5.599m-.973-.248c.57-2.26.45-3.986-.413-4.485c-.863-.498-2.418.262-4.09 1.885a22 22 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425m-10.41 7.63c-.569 2.26-.45 3.986.414 4.484c.863.498 2.418-.261 4.09-1.884a22 22 0 0 1-1.746-2.176a22 22 0 0 1-2.757-.425m4.068-8.142a28 28 0 0 1 2.275 0A21 21 0 0 0 12 6.31q-.57.625-1.137 1.364m-1.31.087a22 22 0 0 1 1.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485c.853-.19 1.779-.334 2.757-.425m4.34 7.52A25.4 25.4 0 0 0 15.788 12a25.4 25.4 0 0 0-1.893-3.28a25.4 25.4 0 0 0-3.787 0A25.4 25.4 0 0 0 8.213 12a25.4 25.4 0 0 0 1.894 3.28a25.4 25.4 0 0 0 3.787 0m1.285-.132q.924-.12 1.75-.303a21 21 0 0 0-.612-1.667a28 28 0 0 1-1.137 1.97M8.823 8.851q-.924.121-1.75.304q.255.806.613 1.667a28 28 0 0 1 1.137-1.97m-1.75 5.994q.826.182 1.75.303a28 28 0 0 1-1.137-1.97a21 21 0 0 0-.613 1.667m-.978-.245c.262-.834.6-1.708 1.01-2.6a22 22 0 0 1-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6M16.93 9.155q-.827-.183-1.75-.304a28 28 0 0 1 1.137 1.97q.357-.86.613-1.666m.977.245c-.26.834-.6 1.708-1.01 2.6c.41.892.75 1.766 1.01 2.6c2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6M12 13.879a1.88 1.88 0 1 1 0-3.758a1.88 1.88 0 0 1 0 3.758"
                    ></path>
                    </svg>
                    `,
        },
        {
            id: 3,
            name: 'Bootstrap',
            description: 'Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto.',
            icon: 'bi bi-bootstrap',
        },
        {
            id: 4,
            name: 'HTML y CSS',
            description: 'Tengo conocimientos basicos y bien fundamentados de html y css, lo que me permite tener un panorama mas claro a la hora de tomar mis decisiones de diseño para los desarrolladores.',
            icon: 'bi bi-file-code',
        },
        {
            id: 5,
            name: 'Git',
            description: 'Puedo mantener comunicación  con el equipo de desarrollo, atento a cualquier inquietud que se presente con el fin de llevar el proyecto de manera correcta.',
            icon: 'bi bi-git',
        },
        {
            id: 6,
            name: 'GitHub',
            description: 'Soy capaz de iterar recibiendo e interpretando el feedback que me sea proporcionado con el fin de mejorar la calidad del producto que esté diseñando.',
            icon: 'bi bi-github',
        },
    ];


    return(
        <div>
            <Nav/>
            <div className="container mt-6 text-center">
                <h1 className="my-5 text-pri">Acerca de mí</h1>
                <div className="text-center d-flex justify-content-center align-items-center">
                        <div className="row g-0">
                            <div className="col-12 col-md-4">
                                <img
                                    src="../src/img/juli.png"
                                    className="img-fluid"
                                    alt="Acerca de mí"
                                    style={{ objectFit: "cover", height: "100%", borderRadius: "1rem"}}
                                />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="container text-md-start">
                                    <h5 className="card-text text-white" style={{ lineHeight: "1.6", marginLeft: "5.5rem" }}>
                                    Hola! Soy Técnica Universitaria en Programación,  orientada al desarrollo de Software con un enfoque en el desarrollo Front-End utilizando React, JS, HTML y Bootstrap, por otro lado para el diseño creativo utilizo Figma. <br/>Estoy siempre dispuesta a adquirir nuevos conocimientos, tanto trabajando en equipo como de forma autodidacta, lo que me ayuda a seguir aprendiendo y creciendo.<br/>
                                    Me gusta trabajar en equipo porque creo que es una excelente manera de aprender nuevas habilidades y aportar mis conocimientos para mejorar la productividad y calidad en el desarrollo de productos digitales.<br/>
                                    Mi objetivo es diseñar experiencias que no solo sean visualmente agradables, sino que también sean accesibles, funcionales y fáciles de usar.<br/> Para mí, el feedback es una herramienta clave que ayuda a perfeccionar cada detalle y asegura que el diseño cumpla con las expectativas de los usuarios.
                                    </h5>
                                </div>
                            </div>
                        </div>
                 </div>
            </div>
                <section className="section text-center align-items-center">
                    <h1 className="my-5 text-pri">Mis Hard-Skills</h1>
                    <div className="container">
                        <div className="row">
                            {data.map((skil) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-3" key={skil.id}>
                                <div className="card card-color text-light h-100 border-card">
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            {skil.icon.includes('<svg') ? (
                                                <div
                                                    className="icon-style d-flex justify-content-center align-items-center p-3"
                                                    aria-label={`Ícono de ${skil.name}`}
                                                    dangerouslySetInnerHTML={{ __html: skil.icon }}
                                                ></div>
                                            ) : (
                                                <i
                                                    className={`icon-style rounded d-flex justify-content-center align-items-center p-3 ${skil.icon}`}
                                                    aria-label={`Ícono de ${skil.name}`}
                                                ></i>
                                            )}
                                        </div>
                                        <h3 className="card-title mb-0">{skil.name}</h3>
                                        <p className="card-text mt-3 mb-3" style={{ lineHeight: "1.6" }}>
                                            {skil.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            <section className="container section text-center  mb-5">
                <h1 className="my-5 text-pri">Software de diseño que manejo</h1>
                <div className="container card card-color mt-5 border-card" style={{width: "26rem"}}>
                    <div className="card-body mt-5 position-relative mb-4">
                        <svg
                            className="icon-figma position-absolute start-50 translate-middle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1.1em"
                        >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m6-3h3a3 3 0 0 1 0 6h-3z"></path>
                            <path d="M12 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0m0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"></path>
                        </g>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-pri text-center">Figma</h3>
                        <h6 className="text-center text-white" style={{lineHeight: "1.8"}}>
                            Figma, es una de mis herramientas de diseño preferidas.
                        </h6>
                    </div>
                    <div className='container text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='svg' viewBox="0 0 300 60">
                            <defs>
                                <linearGradient id="grad">
                                    <stop offset="100%" stopColor="#A4036F" />
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#grad)"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(10, 10) scale(0.8)"
                            />
                            <path
                                fill="url(#grad)"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(50, 10) scale(0.8)"
                            />
                            <path
                                fill="url(#grad)"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(90, 10) scale(0.8)"
                            />
                            <path
                                fill="#1F1F21"
                                stroke="#A4036F"
                                strokeWidth="2"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(130, 10) scale(0.8)"
                            />
                            <path
                                fill="#1F1F21"
                                stroke="#A4036F"
                                strokeWidth="2"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(170, 10) scale(0.8)"
                            />
                            <path
                                fill="#1F1F21"
                                stroke="#A4036F"
                                strokeWidth="2"
                                d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                                l11.547-1.2L16.026,0.6L20.388,10.918z"
                                transform="translate(210, 10) scale(0.8)"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <section className="section text-center align-items-center" style={{marginBottom: "15rem"}}>
                <div className="container">
                <h1 className="my-5 text-pri">Experiencia de trabajo y educación</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="d-flex justify-content-start align-items-center mb-3 p-3">
                                <div className="container card card-color mt-5 border-card" style={{width: "26rem"}}>
                                    <div className="card-body mt-5 position-relative mb-4">
                                        <i className="bi bi-code-slash icon-large"></i>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-white text-center ">UTN</h3>
                                        <h6 className="text-center text-white mb-5" style={{lineHeight: "1.8"}}>
                                            Estudié la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional, donde adquirí conocimientos en desarrollo con Python, Java y JavaScript.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="d-flex justify-content-start align-items-center mb-3 p-3">
                                <div className="container card card-color mt-5" style={{width: "26rem"}}>
                                    <div className="card-body mt-5 position-relative mb-4">
                                        <i className="bi bi-code-slash icon-large"></i>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-white text-center ">No Country</h3>
                                        <h6 className="text-center text-white mb-5" style={{lineHeight: "1.8"}}>
                                            Trabajé en equipo en una simulación laboral desarrollando un proyecto frontend con React y Bootstrap, colaborando en la implementación de interfaces dinámicas y funcionales.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="d-flex justify-content-start align-items-center mb-3 p-3">
                                <div className="container card card-color mt-5" style={{width: "26rem"}}>
                                    <div className="card-body mt-5 position-relative mb-4">
                                        <i className="bi bi-code-slash icon-large"></i>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-white text-center ">Freelancer</h3>
                                        <h6 className="text-center text-white mb-5" style={{lineHeight: "1.8"}}>
                                             Me desempeño como freelancer en el diseño y desarrollo de páginas web, combinando creatividad y funcionalidad para ofrecer soluciones atractivas y eficientes.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    ) 
} 




      
   
  

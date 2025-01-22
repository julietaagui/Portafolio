import Nav from "../components/nav"
import { Fragment } from 'react';
import '../App.css'

export default function AboutMe(){

    const data = [
        {
            id: 1,
            name: 'JavaScript',
            description: 'Tengo manejo de sistemas de diseño...',
            icon: 'bi bi-code-slash',
        },
        {
            id: 2,
            name: 'React JS',
            description: 'Trato de ser un activo valioso...',
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
            description: 'Con mi experiencia en patrones de diseño...',
            icon: 'bi bi-bootstrap',
        },
        {
            id: 4,
            name: 'HTML y CSS',
            description: 'Tengo conocimientos básicos...',
            icon: 'bi bi-file-code',
        },
        {
            id: 5,
            name: 'Git',
            description: 'Puedo mantener comunicación...',
            icon: 'bi bi-git',
        },
        {
            id: 6,
            name: 'GitHub',
            description: 'Soy capaz de iterar recibiendo feedback...',
            icon: 'bi bi-github',
        },
    ];


    return(
        <div>
            <Nav/>
            <div className="container section text-center">
            <h1 className="my-5 text-pri">Acerca de mí</h1>

              <div className="text-center d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-12 col-md-4">
                            <img
                                src="../src/img/juli.png"
                                className="img-fluid rounded-start "
                                alt="Acerca de mí"
                                style={{ objectFit: "cover", width: "100%", }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="container text-md-start">
                                <h5 className="card-text text-white" style={{ lineHeight: "1.5" }}>
                                Hola! Soy Técnica Universitaria en Programación,  orientada al desarrollo de Software con un enfoque en el desarrollo Front-End utilizando React, JS, HTML y Bootstrap, por otro lado para el diseño creativo utilizo Figma. Estoy siempre dispuesta a adquirir nuevos conocimientos, tanto trabajando en equipo como de forma autodidacta, lo que me ayuda a seguir aprendiendo y creciendo.
                                Me gusta trabajar en equipo porque creo que es una excelente manera de aprender nuevas habilidades y aportar mis conocimientos para mejorar la productividad y calidad en el desarrollo de productos digitales.
                                Mi objetivo es diseñar experiencias que no solo sean visualmente agradables, sino que también sean accesibles, funcionales y fáciles de usar. Para mí, el feedback es una herramienta clave que ayuda a perfeccionar cada detalle y asegura que el diseño cumpla con las expectativas de los usuarios.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            <Fragment>
                <div className="section text-center align-items-center">
                    <h1 className="my-5 text-pri">Mis Hard-Skills</h1>
                    <div className="container">
                        <div className="row">
                        {data.map((skil) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={skil.id}>
                            <div className="card bg-dark text-light h-100">
                                <div className="card-body">
                                {skil.icon.includes('<svg') ? (
                                <div
                                    className="icon-style "
                                    aria-label={`Ícono de ${skil.name}`}
                                    dangerouslySetInnerHTML={{ __html: skil.icon }}
                                ></div>
                                ) : (
                                <i className={`icon-style  ${skil.icon}`} aria-label={`Ícono de ${skil.name}`}></i>
                                )}
                                    <h3 className="card-title mt-3">{skil.name}</h3>
                                    <p className="card-text">{skil.description}</p>
                                </div>
                            </div>
                        </div>
                        ))}


                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    )
    
} 

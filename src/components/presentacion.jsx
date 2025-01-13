import './home.css'

export default function Presentacion(){

    return(

        <div className='section text-center'>
            <div>
                <h1>Soy Julieta Aguilera</h1>
                <h1>Desarrolladora Web</h1>
            </div>
            <div>
                <h4 className='mt-5'>Este es mi portafolio y CV hecho en Figma, acá puedes <br/> ver mi GitHub y descargar mi CV.</h4>
                <h4>¡Espero te guste!</h4>
            </div>
            <div className='buttons-container'>
                <button className='btn btn-rosa-pri'>Ver Proyectos</button>
                <button className='btn btn-rosa-sec'>
                <a href=""><i className="bi bi-arrow-down" style={{color: "white"}}></i></a>
                    Descargar CV
                </button>
            </div>

        </div>
    )
}

export default function Proyects(){

    return(

        <div className="section text-center align-items-center">
            <h1 className="my-5 text-pri">Algunos de mis proyectos</h1>
            <div className="d-flex justify-content-center">
                <div className="d-flex">
                    <div className="card m-3" style={{width: "25.8rem"}}>
                        <img src="../src/img/img2.png" className="card-img-top" alt="..."/>
                        <div className="card-footer">
                            <p className="text-body-secondary">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card m-3" style={{width: "25.8rem"}}>
                    <img src="../src/img/img2.png" className="card-img-top" alt="..."/>
                    <div className="card-footer">
                        <p className="text-body-secondary">Last updated 3 mins ago</p>
                    </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card m-3" style={{width: "25.8rem"}}>
                    <img src="../src/img/img2.png" className="card-img-top" alt="..."/>
                    <div className="card-footer ">
                    <p className="text-body-secondary">Last updated 3 mins ago</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="buttons-container">
                <button className="btn btn-rosa-pri">Ver mas de mis Proyectos<i className="px-2 bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}
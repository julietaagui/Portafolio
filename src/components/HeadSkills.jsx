
export default function HeadSkills() {
  const data = [
    {
      id: 1,
      name: "Desarrollo Frontend",
      icon: "bi bi-braces icon-pri mx-3",
      description: "Con mi experiencia en el desarrollo frontend, tengo una vision clara de cómo crear interfaces intuitivas y atractivas utilizando HTML5, JavaScript y Bootstrap para estructurar, estilizar y dar funcionalidad a las aplicaciones."
    },
    {
      id: 2,
      name: "Herramientas y Colaboración",
      icon: "bi bi-wrench icon-pri mx-3",
      description: "Domino herramientas como Git y GitHub para el control de versiones y colaboración en equipo. Además, tengo experiencia con metodologías ágiles como Scrum, optimizando la entrega de proyectos."
    },
    {
      id: 3,
      name: "Aprendizaje y Adaptabilidad",
      icon: "bi bi-file-check icon-pri mx-3",
      description: "Soy proactiva y flexible, siempre dispuesta a aprender y adaptarme a nuevos desafíos, buscando mejorar continuamente y aportar valor a los proyectos."
    }
  ]
    return (
      <div className="section text-center align-items-center">
        <h1 className="my-5 text-pri">Mis Skills</h1>
        <div className="container">
          <div className="row">
            {data.map((skill) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={skill.id}>
              <div className="card card-color text-light h-100 border-card">
                <div className="card-body position-relative mb-3">
                  <i className={skill.icon}></i>
                  <h3 className="card-title  mb-0" style={{marginTop: "2rem"}}>{skill.name}</h3>
                  <p className="card-text mt-3" style={{lineHeight: "1.6"}}>{skill.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home__avatar">
        <img src="/images/avatar.png" alt="Clever Amaya" />
      </div>

      <div className="home__content">
        <p className="home__greeting">Hola, soy</p>
        <h1 className="home__name">Clever Amaya</h1>
        <h2 className="home__role">Frontend Developer <span>| Fullstack en formación</span></h2>

        <p className="home__bio">
          Tengo 18 años y soy aprendiz del SENA con un fuerte enfoque en el desarrollo de software.
          Me especializo en el diseño de interfaces web y la resolución de problemas algorítmicos,
          siempre aplicando buenas prácticas de programación.
        </p>

        <p className="home__bio">
          Mi stack incluye <strong>HTML, CSS, JavaScript y React</strong> en el frontend,
          y <strong>Python, Java y Django</strong> en el backend. Me apasiona seguir creciendo,
          aprender nuevas tecnologías y adaptarme a diferentes proyectos y necesidades.
        </p>

        <div className="home__badges">
          <span className="badge">SENA</span>
          <span className="badge">18 años</span>
          <span className="badge">Colombia</span>
          <span className="badge">Disponible para prácticas</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
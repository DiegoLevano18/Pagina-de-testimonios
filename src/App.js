import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
        <h1>Esto es lo que dicen los profecionales sobre los cursos en línea</h1>
        <button className="modoOscuro"></button>
        <Testimonio 
          nombre="Sofia Chang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Google"
          imagen="1"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de las cientos de horas de lecciones en línea de Pluralsight. Dentro de un año, conseguí un trabajo en Google como ingeniera de software. Pluralsight cambió mi vida."
        />
        <Testimonio 
          nombre="Juan García"
          pais="México"
          cargo="Desarrollador Web"
          empresa="ChatDesk"
          imagen="2"
          testimonio="Siempre me apasionó el diseño, pero sentía curiosidad por el mundo de la programación. Gracias a Treehouse y su plataforma interactiva, pude aprender a programar desde cero. Ahora, como desarrollador web independiente, puedo combinar mis habilidades de diseño con la programación para crear proyectos asombrosos. ¡Treehouse me brindó las herramientas necesarias para lograrlo!"
        />
        <Testimonio 
          nombre="Ahmed Khan"
          pais="Pakistán"
          cargo="Ingeniero de Software"
          empresa="Spotify"
          imagen="3"
          testimonio="Mi camino hacia la programación se iluminó gracias a Coursera. Sus cursos en línea, impartidos por expertos de renombre, me brindaron los conocimientos y las habilidades necesarias para comenzar mi carrera como desarrollador de software. A través de Coursera, pude ampliar mi comprensión de la informática y obtener una valiosa experiencia práctica"
        />
        <Testimonio 
          nombre="Ana Rodríguez"
          pais="Francia"
          cargo="Desarrolladora Movil"
          empresa="IBM"
          imagen="4"
          testimonio="uando decidí cambiar de profesión y adentrarme en el mundo del desarrollo de aplicaciones móviles, encontré en Udemy una fuente inagotable de recursos de aprendizaje. Sus cursos y tutoriales de alta calidad me permitieron adquirir los conocimientos necesarios para convertirme en desarrolladora de aplicaciones móviles. Estoy agradecida por la plataforma y su enfoque práctico"
        />
        <Testimonio 
          nombre="Carlos Sánchez"
          pais="España"
          cargo="Ingeniero de Software"
          empresa="Google"
          imagen="5"
          testimonio="A medida que avanzaba en mi carrera universitaria en Ingeniería Informática, me beneficié enormemente de los cursos y la plataforma educativa de edX. Sus cursos en línea, ofrecidos por instituciones de renombre, me brindaron una perspectiva amplia y profunda de la informática y me ayudaron a perfeccionar mis habilidades. Gracias a edX, me siento más preparado para enfrentar los desafíos de la industria tecnológica"
        />
      </div>
    </div>
  );
}

export default App;

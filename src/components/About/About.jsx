import styles from "./About.module.css";

// Sección About: breve descripción, stack y exploración
const About = () => (
  <section className={styles.aboutSection} id="about">
    <h2>Sobre mí</h2>
    <p>
      Soy un desarrollador web apasionado por crear experiencias digitales modernas, accesibles y de alto rendimiento. Mi formación en React, Node.js y Express me ha permitido especializarme tanto en frontend como en backend, desarrollando aplicaciones robustas y escalables que priorizan la usabilidad y la optimización.<br /><br />
      A lo largo de mi trayectoria, he trabajado en proyectos que integran APIs REST, bases de datos MongoDB y despliegues en la nube, aplicando buenas prácticas de seguridad, CI/CD y pruebas automatizadas. Me destaco por mi enfoque en la mejora continua, la resolución de problemas y la adaptación a nuevas tecnologías, así como por mi capacidad para trabajar en equipo y liderar iniciativas técnicas.<br /><br />
      He colaborado en la creación de plataformas sociales, aplicaciones de búsqueda y selección de datos, y sitios web empresariales, siempre buscando que cada solución sea intuitiva, eficiente y visualmente atractiva. Además, cuento con experiencia en la gestión de procesos y soporte técnico, lo que me ha dado una visión integral del ciclo de vida de los productos digitales.<br /><br />
      Actualmente, sigo perfeccionando mis habilidades en inglés y explorando nuevas áreas como la inteligencia artificial y la ciberseguridad, convencido de que la tecnología es una herramienta poderosa para conectar personas y transformar realidades.
    </p>
    <div className={styles.stackBox}>
      <h3>Stack favorito:</h3>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>CSS Modules</li>
        <li>JavaScript (ES6+)</li>
      </ul>
    </div>
    <div className={styles.exploreBox}>
      <h3>Explorando ahora:</h3>
      <ul>
        <li>TypeScript</li>
        <li>Testing Library</li>
        <li>Animaciones con Framer Motion</li>
      </ul>
    </div>
  </section>
);

export default About;

import styles from "./About.module.css";

// Sección About: breve descripción, stack y exploración
const About = () => (
  <section className={styles.aboutSection} id="about">
    <h2>Sobre mí</h2>
    <p>
      ¡Hola! Soy <b>Axel Cisneros</b>, desarrollador frontend enfocado en crear interfaces limpias, accesibles y modernas. Me encanta aprender nuevas tecnologías y compartir lo que descubro.
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

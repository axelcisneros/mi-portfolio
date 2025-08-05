import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./About.module.css";
import { fetchGitHubProfile } from "../../utils/githubAPI";

const About = () => {
  const githubUser = "axelcisneros";
  const [profile, setProfile] = useState(null);
  const sectionRef = useRef(null);

  // 1. useScroll rastrea el progreso de scroll de la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // La animación empieza cuando la parte de arriba de la sección llega al
    // tope de la pantalla, y termina cuando la parte de abajo llega al tope.
    offset: ["start start", "end start"],
  });

  // 2. Mapea el progreso del scroll (de 0 a 1) a estilos CSS.
  // A medida que la sección se va, su opacidad va de 1 a 0.
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // También se mueve un poco hacia arriba para un efecto más suave.
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);

  useEffect(() => {
    fetchGitHubProfile(githubUser)
      .then(setProfile)
      .catch(() => setProfile(null)); // Manejo de error básico
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection} id="about">
      <motion.div className={styles.contentWrapper} style={{ opacity, y }}>
        <img
          src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/99311637?v=4"}
          alt="Foto de perfil de Axel Cisneros"
          className={styles.profilePic}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.name}>{profile?.name || "Axel Cisneros"}</h1>
          <h2 className={styles.title}>{profile?.bio || "Desarrollador Frontend"}</h2>
          <p>
            Soy un desarrollador web apasionado por crear experiencias digitales modernas, accesibles y de alto rendimiento. Mi formación en React, Node.js y Express me ha permitido especializarme tanto en frontend como en backend.
          </p>
          <div className={styles.boxesContainer}>
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
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

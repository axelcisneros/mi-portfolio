import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./About.module.css";
import { fetchGitHubProfile } from "../../utils/githubAPI";

const About = () => {
  const githubUser = "axelcisneros";
  const [profile, setProfile] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Cambiado para que la animación dure más tiempo en pantalla
  });

  // Ajustado el rango para que no desaparezca tan rápido
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["10%", "0%", "0%", "-10%"]);

  useEffect(() => {
    fetchGitHubProfile(githubUser)
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection} id="about">
      <motion.div className={styles.contentWrapper} style={{ opacity, y }}>
        
        {/* Tarjeta de Perfil (Izquierda) */}
        <motion.div 
          className={styles.profileCard}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/99311637?v=4"}
            alt="Foto de perfil de Axel Cisneros"
            className={styles.profilePic}
          />
          <h1 className={styles.name}>{profile?.name || "Axel Cisneros"}</h1>
          <h2 className={styles.title}>Fullstack Engineer</h2>
        </motion.div>

        {/* Contenedor Derecho (Grid interno) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Info Principal */}
          <motion.div 
            className={styles.mainInfoCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className={styles.greeting}>Hola, soy Axel 👋</span>
            <h3 className={styles.headline}>
              Construyo experiencias digitales que <span>funcionan</span> y <span>destacan</span>.
            </h3>
            <p className={styles.description}>
              Desarrollador web apasionado por crear interfaces modernas, accesibles y de alto rendimiento. 
              Mi formación en el stack MERN (React, Node.js, Express, MongoDB) me permite construir 
              soluciones completas, desde el diseño UI hasta la arquitectura de la API.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className={styles.skillsContainer}>
            <motion.div 
              className={styles.skillBox}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h3>Stack Principal</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillTag}>React 19</li>
                <li className={styles.skillTag}>Node.js</li>
                <li className={styles.skillTag}>Express</li>
                <li className={styles.skillTag}>MongoDB</li>
                <li className={styles.skillTag}>JavaScript (ES6+)</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.skillBox}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <h3>Herramientas & UI</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillTag}>Vite</li>
                <li className={styles.skillTag}>Framer Motion</li>
                <li className={styles.skillTag}>CSS Modules</li>
                <li className={styles.skillTag}>Git / GitHub</li>
                <li className={styles.skillTag}>Figma</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;

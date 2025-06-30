import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { fetchGitHubProfile } from "../../utils/githubAPI";
import { Link, useLocation } from "react-router-dom";
import cvFile from "../../assets/Axel-Cisneros-Web-Developer.pdf";

// Header con sección Hero: nombre, título, frase y foto
const Header = () => {
  const githubUser = "axelcisneros"; // Usa el mismo usuario que en App.jsx
  const [profile, setProfile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchGitHubProfile(githubUser)
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>{profile?.name || githubUser}</h1>
        <h2 className={styles.title}>{profile?.bio || "Desarrollador Frontend"}</h2>
        <p className={styles.phrase}>
          &quot;Apasionado por crear experiencias web modernas y accesibles.&quot;
        </p>
        <div className={styles.ctaBtns}>
          <a href={cvFile} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">CV</a>
          <Link to="/projects" className={`${styles.ctaBtn} ${location.pathname === "/projects" ? styles.active : ""}`}>Proyectos</Link>
          <Link to="/about" className={`${styles.ctaBtn} ${location.pathname === "/about" ? styles.active : ""}`}>Sobre mí</Link>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/123456?v=4"}
          alt="Foto de perfil"
          className={styles.heroImg}
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;

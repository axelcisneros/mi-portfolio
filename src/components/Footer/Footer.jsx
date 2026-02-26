
import styles from "./Footer.module.css";
import { fetchGitHubProfile } from "../../utils/githubAPI";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const GITHUB_USER = "axelcisneros";

// Footer con links a redes y contacto
const Footer = ({ openContactModal }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchGitHubProfile(GITHUB_USER)
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  const linkedin = profile?.blog && profile.blog.includes("linkedin.com")
    ? profile.blog
    : `https://linkedin.com/in/${GITHUB_USER}`;

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerRow}>
        <div className={styles.links}>
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" aria-label="Visitar mi perfil de GitHub">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visitar mi perfil de LinkedIn">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            aria-label="Abrir formulario de contacto"
          >
            <FaEnvelope size={20} />
            <span>Correo</span>
          </a>
        </div>
        <button
          className={styles.scrollTopBtn}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Volver al inicio de la página"
        >
          <span>Volver arriba</span>
          <FaArrowUp size={14} />
        </button>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} {profile?.name || "Axel Cisneros"}. Construido con React + Vite.
      </div>
    </footer>
  );
};

export default Footer;

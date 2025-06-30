import { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";

// Modal de detalles del proyecto
const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef();
  const repo = project?.repoData;

  // Cierra el modal al hacer click fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">×</button>
        <img src={project.image} alt={project.repo} className={styles.image} />
        <h2 className={styles.title}>{repo?.name || project.repo}</h2>
        <p className={styles.desc}>{repo?.description || "Sin descripción."}</p>
        <div className={styles.techList}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
        </div>
        {repo && (
          <div className={styles.links}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">Demo</a>
            )}
          </div>
        )}
        {repo && (
          <div className={styles.repoStats}>
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            <span>📝 {repo.language}</span>
            <span>🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;

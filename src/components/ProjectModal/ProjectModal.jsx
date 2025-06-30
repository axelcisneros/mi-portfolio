import { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";

// Resolver imágenes igual que en ProjectCard
const images = import.meta.glob("../../assets/images/*", { eager: true });
function getProjectImage(imgPath) {
  const fileName = imgPath.split('/').pop();
  const match = Object.entries(images).find(([key]) => key.endsWith(fileName));
  return match ? match[1].default : '';
}

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
        <img src={getProjectImage(project.img)} alt={project.repo} className={styles.image} />
        <h2 className={styles.title}>{project.repo}</h2>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.links}>
          {project.web && (
            <a href={project.web} target="_blank" rel="noopener noreferrer">Demo</a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </div>
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

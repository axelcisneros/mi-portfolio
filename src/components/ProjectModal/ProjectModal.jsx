import { motion } from "framer-motion";
import styles from "./ProjectModal.module.css";
import { IoClose, IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

// Resolver imágenes igual que en projectData.js
const images = import.meta.glob("../../assets/images/*", { eager: true });
function getProjectImage(imgPath) {
  if (!imgPath) return '';
  const fileName = imgPath.split('/').pop();
  const match = Object.entries(images).find(([key]) => key.endsWith(fileName));
  return match ? match[1].default : '';
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
};

const modalVariants = {
  hidden: { y: -50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      delay: 0.1,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

// Modal de detalles del proyecto
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
      >
        <img src={getProjectImage(project.img)} alt={`Vista previa de ${project.repo}`} className={styles.modalImage} />

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.repo}</h2>
          <div className={styles.links}>
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub">
                <IoLogoGithub size={24} />
              </a>
            )}
            {project.web && (
              <a href={project.web} target="_blank" rel="noopener noreferrer" aria-label="Ver sitio en vivo">
                <FaExternalLinkAlt size={22} />
              </a>
            )}
          </div>
        </div>

        <p className={styles.modalDescription}>{project.desc}</p>

        <div className={styles.techList}>
          {project.tech?.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>

        <button onClick={onClose} className={styles.closeButton} aria-label="Cerrar modal">
          <IoClose size={30} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;

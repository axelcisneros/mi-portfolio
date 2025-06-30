
import styles from "./ProjectCard.module.css";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub, FaGitAlt, FaJs, FaExchangeAlt } from "react-icons/fa";
import { SiVite, SiMongodb, SiFigma, SiExpress, SiPostman, SiGooglecloud, SiJsonwebtokens } from "react-icons/si";


// Normalización de nombres y mapeo de tecnologías a íconos
const techIcons = {
  "React": <FaReact color="#61DAFB" title="React" />,
  "Vite": <SiVite color="#646CFF" title="Vite" />,
  "Node.js": <FaNodeJs color="#339933" title="Node.js" />,
  "CSS3": <FaCss3Alt color="#1572B6" title="CSS3" />,
  "HTML5": <FaHtml5 color="#E34F26" title="HTML5" />,
  "JavaScript": <FaJs color="#F7DF1E" title="JavaScript" />,
  "GitHub": <FaGithub color="#181717" title="GitHub" />,
  "Git Bash": <FaGitAlt color="#F05032" title="Git Bash" />,
  "GitHub Pages": <FaGithub color="#181717" title="GitHub Pages" />,
  "MongoDB": <SiMongodb color="#47A248" title="MongoDB" />,
  "MongoDB Compass": <SiMongodb color="#47A248" title="MongoDB Compass" />,
  "Express": <SiExpress color="#000" title="Express" />,
  "Figma": <SiFigma color="#F24E1E" title="Figma" />,
  "Postman": <SiPostman color="#FF6C37" title="Postman" />,
  "Google Cloud": <SiGooglecloud color="#4285F4" title="Google Cloud" />,
  "JWT": <SiJsonwebtokens color="#000" title="JWT" />,
  "API's": <FaExchangeAlt color="#888" title="API" />,
  // Agrega más tecnologías e íconos según lo necesites
};

// Función para normalizar nombres de tecnologías
function normalizeTechName(name) {
  const map = {
    "NodeJS": "Node.js",
    "Node.js": "Node.js",
    "CSS": "CSS3",
    "CSS3": "CSS3",
    "HTML5 semántico": "HTML5",
    "HTML5": "HTML5",
    "JavaScript (ES6+)": "JavaScript",
    "JAVASCRIPT": "JavaScript",
    "JAVASCRIPT JSX": "JavaScript",
    "GITHUB": "GitHub",
    "GIT BASH": "Git Bash",
    "GITHUB PAGES": "GitHub Pages",
    "MongoDBCompass": "MongoDB Compass",
    // Puedes agregar más equivalencias aquí
  };
  return map[name] || name;
}

// Card de proyecto individual
const ProjectCard = ({ project, onClick }) => (
  <div className={styles.card} onClick={onClick} tabIndex={0} role="button" aria-label={`Ver detalles de ${project.repo}`}
    onKeyDown={e => (e.key === "Enter" ? onClick() : null)}>
    <img src={project.image} alt={project.repo} className={styles.image} loading="lazy" />
    <div className={styles.info}>
      <h3 className={styles.title}>{project.repo}</h3>
      <div className={styles.techList}>
        {project.tech.map((t) => {
          const norm = normalizeTechName(t);
          return (
            <span key={norm} className={styles.tech} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3em' }}>
              {techIcons[norm] ? techIcons[norm] : null}
              {norm}
            </span>
          );
        })}
      </div>
    </div>
  </div>
);

export default ProjectCard;

import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import cvFile from "../../assets/Axel-Cisneros-Web-Developer.pdf";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Instructor",
    company: "Triple Ten",
    date: "Noviembre 2025 - Presente",
    description: "Revisión de código con detección de errores. Apoyo a estudiantes para entender instrucciones y uso de BRIEFS. Resolución de dudas sobre lecciones y código.",
  },
  {
    id: 2,
    type: "work",
    title: "Desarrollador Web",
    company: "Elo Forge",
    date: "Febrero 2026 - Presente",
    description: "Desarrollar características nuevas a base de tareas estilo KANBAN.",
  },
  {
    id: 3,
    type: "work",
    title: "Desarrollador Web",
    company: "King's Nail's",
    date: "Febrero 2025 - Presente",
    description: "Creación de página web responsiva. Uso de JavaScript, React, Vite y Vercel para rendimiento y escalabilidad. Integración de backend con Node.js, Express y MongoDB.",
  },
  {
    id: 4,
    type: "education",
    title: "Web Development Bootcamp",
    company: "TripleTen",
    date: "Septiembre 2024 - Junio 2025",
    description: "Desarrollo frontend y backend con React, Node.js, Express y Google Cloud. Implementación de pruebas automatizadas y optimización de rendimiento.",
  },
  {
    id: 5,
    type: "work",
    title: "Asesor Telefónico",
    company: "Binomia - Bait",
    date: "Mayo 2025 - Diciembre 2025",
    description: "Gestión de incidentes con Oracle, asegurando documentación y resolución eficiente. Comunicación efectiva y trabajo en equipo.",
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experiencia">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Trayectoria</h2>
          <p>Mi recorrido profesional y académico</p>
        </motion.div>

        <div className={styles.timeline}>
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.timelineIcon}>
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <h4 className={styles.company}>{item.company}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>¿Quieres conocer todos los detalles de mi experiencia?</p>
          <a 
            href={cvFile} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cvButton}
            aria-label="Abrir mi currículum en formato PDF"
          >
            <span>Ver CV Completo (PDF)</span>
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
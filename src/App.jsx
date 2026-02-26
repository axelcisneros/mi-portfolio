import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer";
import { fetchGitHubRepos, findRepoByName } from "./utils/githubAPI";
import projectData from "./utils/projectData";
import styles from "./styles/App.module.css";

// Lazy loading para los modales (Optimización de Bundle)
const ProjectModal = lazy(() => import("./components/ProjectModal/ProjectModal"));
const ContactModal = lazy(() => import("./components/ContactModal/ContactModal"));

function Projects({ repos, openModal }) {
  // useMemo para evitar recalcular el filtrado y ordenamiento en cada render
  const orderedProjects = useMemo(() => {
    return projectData
      .filter(p => repos.some(r => r.name.toLowerCase() === p.repo.toLowerCase()))
      .sort((a, b) => b.index - a.index);
  }, [repos]);

  return (
    <section className={styles.projectsSection} id="proyectos">
      <h2>Proyectos Destacados</h2>
      <div className={styles.projectsGrid}>
        {orderedProjects.map((project, index) => (
          <motion.div
            key={project.repo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              delay: index * 0.1 // Animación escalonada
            }}
            viewport={{ once: true, amount: 0.2 }} // once: true mejora el rendimiento
          >
            <ProjectCard
              project={project}
              onClick={() => openModal(project)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function App() {
  // Estado para el modal y el proyecto seleccionado
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [repos, setRepos] = useState([]);
  const githubUser = "axelcisneros";

  // Cargar los repositorios de GitHub al montar
  useEffect(() => {
    let isMounted = true; // Prevenir actualizaciones de estado si el componente se desmonta

    fetchGitHubRepos(githubUser)
      .then(reposData => {
        if (!isMounted) return;
        
        const filtered = reposData.filter(repo => {
          const year = new Date(repo.created_at).getFullYear();
          const excluded = [
            githubUser.toLowerCase(),
            "acordeon-sc900",
            "2034-logica-programacion-1",
            "frontend-authorization-demo-es",
            "web_project_around-7",
            "web_project_around_8",
            "web_project_around-9",
            "web_project_around-10",
            "web_project_around-11",
            "mi-portfolio"
          ];
          return year >= 2024 && !excluded.includes(repo.name.toLowerCase());
        });
        setRepos(filtered);
      })
      .catch(error => {
        console.error("Error fetching repos:", error);
        if (isMounted) setRepos([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Abrir modal con el repo seleccionado
  const openModal = (project) => {
    const repoData = findRepoByName(repos, project.repo);
    const projectWithData = {
      ...project,
      repoData: repoData,
    };
    setSelectedProject(projectWithData);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Abrir/Cerrar modal de contacto
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    const isAnyModalOpen = isModalOpen || isContactModalOpen;
    document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";
  }, [isModalOpen, isContactModalOpen]);

  // Observador para la sección activa
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');

    const observerOptions = {
      root: null,
      rootMargin: '-85% 0px -15% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [repos]);

  return (
    <div className={styles.appContainer}>
      <Header activeSection={activeSection} />
      <main>
        <About />
        <Experience />
        <Projects repos={repos} openModal={openModal} />
      </main>
      <Footer openContactModal={openContactModal} />
      
      <Suspense fallback={null}>
        <AnimatePresence>
          {isModalOpen && <ProjectModal project={selectedProject} onClose={closeModal} />}
          {isContactModalOpen && <ContactModal onClose={closeContactModal} />}
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;

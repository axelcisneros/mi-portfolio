import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { fetchGitHubRepos } from "./utils/githubAPI";
import projectData from "./utils/projectData";
import styles from "./styles/App.module.css";

function Projects({ repos, openModal }) {
  // Ordenar y mapear los repos a los datos enriquecidos de projectData
  const orderedProjects = projectData
    .filter(p => repos.some(r => r.name.toLowerCase() === p.repo.toLowerCase()))
    .sort((a, b) => b.index - a.index);

  return (
    <section className={styles.projectsSection} id="proyectos">
      <h2>Proyectos</h2>
      <div className={styles.projectsGrid}>
        {orderedProjects.map((project) => (
          <ProjectCard
            key={project.repo}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  // Estado para el modal y el proyecto seleccionado
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repos, setRepos] = useState([]);
  const githubUser = "axelcisneros"; // Cambia por tu usuario real

  // Cargar los repositorios de GitHub al montar
  useEffect(() => {
    fetchGitHubRepos(githubUser)
      .then(repos => {
        const filtered = repos.filter(repo => {
          const year = new Date(repo.created_at).getFullYear();
          // Excluye el repo de presentación y los repos específicos
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
          return (
            year >= 2024 &&
            !excluded.includes(repo.name.toLowerCase())
          );
        });
        setRepos(filtered);
      })
      .catch(() => setRepos([]));
  }, []);

  // Abrir modal con el repo seleccionado
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <Router>
      <div className={styles.appContainer}>
        <ThemeToggle />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/projects" element={<Projects repos={repos} openModal={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
        <Footer />
        {isModalOpen && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </Router>
  );
}

export default App;

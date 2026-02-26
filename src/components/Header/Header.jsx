import styles from "./Header.module.css";

const Header = ({ activeSection }) => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          href="#about"
          className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
          onClick={handleSmoothScroll}
        >
          Sobre Mí
        </a>
        <a
          href="#experiencia"
          className={`${styles.navLink} ${activeSection === 'experiencia' ? styles.active : ''}`}
          onClick={handleSmoothScroll}
        >
          Experiencia
        </a>
        <a
          href="#proyectos"
          className={`${styles.navLink} ${activeSection === 'proyectos' ? styles.active : ''}`}
          onClick={handleSmoothScroll}
        >
          Proyectos
        </a>
        <a
          href="#footer"
          className={`${styles.navLink} ${activeSection === 'footer' ? styles.active : ''}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;

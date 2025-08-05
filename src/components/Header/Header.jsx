import styles from "./Header.module.css";
import cvFile from "../../assets/Axel-Cisneros-Web-Developer.pdf";

const Header = () => {
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
        <a href="#about" className={styles.navLink} onClick={handleSmoothScroll}>Sobre Mí</a>
        <a href="#proyectos" className={styles.navLink} onClick={handleSmoothScroll}>Proyectos</a>
        <a href={cvFile} className={styles.navLink} target="_blank" rel="noopener noreferrer">CV</a>
        <a
          href="#footer"
          className={styles.navLink}
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

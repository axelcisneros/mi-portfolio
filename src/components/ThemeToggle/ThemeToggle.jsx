import React, { useEffect, useState } from "react";
import { saveTheme, getSavedTheme } from "../../utils/themeStorage";
import styles from "./ThemeToggle.module.css";

// Botón para alternar entre modo claro y oscuro
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Al montar, lee el tema guardado o el preferido por el sistema
  useEffect(() => {
    const saved = getSavedTheme();
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Cambia el tema y lo guarda
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    saveTheme(newTheme);
  };

  return (
    <button
      className={styles.toggleBtn}
      aria-label="Cambiar tema"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

// Lista de proyectos con tecnologías extraídas de los README locales
const projects = [
  {
    index: 13,
    repo: "King-s-Nail-s",
    img: "./assets/images/King-s-Nail-s.png",
    tech: [
      "HTML5", "CSS3", "BEM", "Git Bash", "GitHub", "GitHub Pages", "Branch", "JavaScript", "React", "Vite"
    ],
    web: "https://king-s-nail-s.vercel.app/",
    repoUrl: "https://github.com/axelcisneros/King-s-Nail-s",
    desc: "Sitio web moderno y responsivo para un salón de uñas, pensado para que cualquier persona pueda conocer los servicios, productos y precios de forma visual y sencilla. Desarrollado con React y Vite, integra backend con Node.js, Express y MongoDB para una experiencia completa y profesional. Ideal para clientes que buscan información rápida y para quienes desean ver ejemplos de trabajos y contactar fácilmente."
  },
  {
    index: 12,
    repo: "pokedex-backend",
    img: "./assets/images/pokedex-backend.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Winston"],
    web: "https://api-pokedex-20x0.onrender.com",
    repoUrl: "https://github.com/axelcisneros/pokedex-backend",
    desc: "API backend para una Pokedex interactiva. Permite gestionar y consultar información de Pokémon y usuarios, con autenticación segura y endpoints claros. Pensado para desarrolladores que buscan una base robusta y para usuarios que desean una experiencia fluida y confiable al consultar datos de Pokémon."
  },
  {
    index: 11,
    repo: "pokedex-frontend",
    img: "./assets/images/pokedex-frontend.png",
    tech: ["React", "Vite", "CSS3", "JavaScript", "API's"],
    web: "https://pokedex-iosn.onrender.com",
    repoUrl: "https://github.com/axelcisneros/pokedex-frontend",
    desc: "Aplicación web que permite explorar y buscar Pokémon de manera visual e intuitiva. Toda la información se obtiene a través de un backend propio, garantizando seguridad y rapidez. Ideal para fans de Pokémon y para quienes quieren ver una SPA moderna conectada a una API real."
  },
  {
    index: 10,
    repo: "web_project_api_full",
    img: "./assets/images/web_project_api_full.png",
    tech: [
      // Frontend
      "HTML5", "CSS3", "Figma", "Git Bash", "GitHub", "GitHub Pages", "Branch", "JavaScript", "API's", "React", "Vite",
      // Backend
      "Node.js", "MongoDB Compass", "Google Cloud", "Postman", "Express", "Mongoose", "JWT", "Winston", "Bcryptjs", "Celebrate", "Cors", "Dotenv", "Joi", "Validator"
    ],
    web: "https://around.kje.us",
    repoUrl: "https://github.com/axelcisneros/web_project_around_auth",
    desc: "Red social web para compartir momentos y lugares especiales, con frontend y backend integrados. El proyecto destaca por su diseño responsivo, uso de tecnologías modernas y una experiencia pensada tanto para usuarios curiosos como para desarrolladores que buscan buenas prácticas."
  },
  {
    index: 9,
    repo: "web_project_around_auth",
    img: "./assets/images/web_project_around_auth.png",
    tech: ["HTML5", "CSS3", "Figma", "Git Bash", "GitHub", "GitHub Pages", "Branch", "JavaScript", "API's", "React", "Vite"],
    web: "https://web-project-around-auth-eta.vercel.app/",
    repoUrl: "https://github.com/axelcisneros/web_project_around_auth",
    desc: "Versión con autenticación de la red social 'Alrededor de los EE.UU', desarrollada en React y Vite. Permite a los usuarios compartir y explorar experiencias, con seguridad y facilidad de uso. Perfecta para quienes buscan una app social moderna y segura."
  },
  {
    index: 8,
    repo: "web_project_around_express",
    img: "./assets/images/web_project_around_express.png",
    tech: ["Node.js", "Git Bash", "GitHub", "Branch", "API's", "MongoDB Compass", "Postman"],
    repoUrl: "https://github.com/axelcisneros/web_project_around_express",
    desc: "Servidor backend para la red social 'Alrededor de los EE.UU', construido con Node.js y Express. Gestiona datos y usuarios, asegurando una experiencia estable y escalable. Ideal para quienes quieren ver cómo se estructura un backend real para una SPA."
  },
  {
    index: 7,
    repo: "web_project_around_react",
    img: "./assets/images/web_project_around_react.png",
    tech: ["HTML5", "CSS3", "Figma", "Git Bash", "GitHub", "GitHub Pages", "Branch", "JavaScript", "API's", "React", "Vite"],
    web: "https://web-project-around-react-sigma.vercel.app",
    repoUrl: "https://github.com/axelcisneros/web_project_around_react",
    desc: "Versión en React de la red social 'Alrededor de los EE.UU'. Permite compartir y descubrir lugares y experiencias, con una interfaz moderna y responsiva. Pensada para usuarios de cualquier nivel y para mostrar buenas prácticas en React."
  },
  {
    index: 6,
    repo: "web_project_around",
    img: "./assets/images/web_project_around.png",
    tech: ["HTML5", "CSS3", "Figma", "Git Bash", "GitHub", "GitHub Pages", "Branch", "JavaScript", "API's"],
    web: "https://axelcisneros.github.io/web_project_around/",
    repoUrl: "https://github.com/axelcisneros/web_project_around",
    desc: "Galería web para compartir momentos y lugares, con diseño atractivo y navegación sencilla. Ideal para quienes buscan inspiración o quieren ver ejemplos de proyectos web bien estructurados."
  },
  {
    index: 5,
    repo: "web_project_homeland",
    img: "./assets/images/web_project_homeland.png",
    tech: ["HTML5", "CSS3", "Figma", "Git Bash", "GitHub", "GitHub Pages", "Branch"],
    web: "https://axelcisneros.github.io/web_project_homeland/",
    repoUrl: "https://github.com/axelcisneros/web_project_homeland",
    desc: "Galería de arte digital que muestra imágenes y relatos de ciudades natales de colegas. Un proyecto pensado para conectar personas a través de historias visuales, accesible y fácil de explorar para todos."
  },
  {
    index: 4,
    repo: "web_project_coffeeshop",
    img: "./assets/images/web_project_coffeeshop.png",
    tech: ["HTML5", "CSS3", "Git Bash", "GitHub"],
    web: "https://axelcisneros.github.io/web_project_coffeeshop/",
    repoUrl: "https://github.com/axelcisneros/web_project_coffeeshop",
    desc: "Sitio web de cafetería con recetas, reservas y contacto. Pensado para brindar una experiencia cálida y práctica, tanto para clientes como para quienes quieren ver ejemplos de formularios y secciones interactivas en la web."
  },
  {
    index: 3,
    repo: "web_project_library",
    img: "./assets/images/web_project_library.png",
    tech: ["HTML5", "CSS3", "Git Bash", "GitHub"],
    web: "https://axelcisneros.github.io/web_project_library/",
    repoUrl: "https://github.com/axelcisneros/web_project_library",
    desc: "Biblioteca digital creada con HTML y CSS, que permite a los usuarios explorar libros, eventos y registrarse como miembros. Un ejemplo claro de cómo estructurar y presentar información de manera accesible."
  },
  {
    index: 2,
    repo: "About-Me-sprin1-tripleten",
    img: "./assets/images/About-Me-sprin1-tripleten.png",
    tech: ["HTML5", "CSS3", "Git Bash", "GitHub", "GitHub Pages"],
    web: "https://axelcisneros.github.io/About-Me-sprin1-tripleten/",
    repoUrl: "https://github.com/axelcisneros/About-Me-sprin1-tripleten?tab=readme-ov-file",
    desc: "Página personal donde comparto mis gustos, pasiones y hobbies. Refactorizada para ser responsiva y fácil de navegar, es ideal para quienes quieren conocerme mejor y para quienes buscan inspiración en diseño personal."
  },
  {
    index: 1,
    repo: "Control-Gastos-in-AluraLatam",
    img: "./assets/images/Control-Gastos-in-AluraLatam.png",
    tech: [
      "HTML5", "CSS3", "Git Bash", "GitHub", "GitHub Pages", "JavaScript"
    ],
    web: "https://axelcisneros.github.io/Control-Gastos-in-AluraLatam/",
    repoUrl: "https://github.com/axelcisneros/Control-Gastos-in-AluraLatam",
    desc: "Aplicación sencilla para llevar el control de gastos, pensada para quienes quieren organizar sus finanzas sin complicaciones. Su interfaz es clara y amigable, ideal para cualquier usuario."
  },
  {
    index: 0,
    repo: "Generador-Contrasena-in-AluraLatam",
    img: "./assets/images/Generador-Contrasena-in-AluraLatam.png",
    tech: [
      "HTML5", "CSS3", "Git Bash", "GitHub", "GitHub Pages", "JavaScript"
    ],
    web: "https://axelcisneros.github.io/Generador-Contrasena-in-AluraLatam/",
    repoUrl: "https://github.com/axelcisneros/Generador-Contrasena-in-AluraLatam",
    desc: "Herramienta web para generar contraseñas seguras de forma rápida y sencilla. Perfecta para quienes buscan mejorar su seguridad digital sin complicaciones técnicas."
  }
];

export default projects;

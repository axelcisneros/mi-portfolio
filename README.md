# Mi Portfolio Web Personal

<https://axel-cisneros.vercel.app/>

¡Bienvenido/a a mi portfolio! Este proyecto es una SPA desarrollada con React y Vite, diseñada para mostrar mis proyectos de GitHub y mi perfil profesional de una forma moderna, accesible y adaptable a cualquier dispositivo.

## Descripción del proyecto

Imagina un espacio digital donde puedes conocerme, explorar mis proyectos y descubrir las tecnologías que domino, todo en una experiencia visualmente atractiva y fácil de navegar. Este portfolio no solo es una vitrina de mis trabajos, sino también una demostración de buenas prácticas de desarrollo web, accesibilidad y diseño responsivo.

### ¿Qué encontrarás aquí?

- **Presentación personal**: Una sección "Sobre mí" que te cuenta quién soy y qué me motiva, tanto para quienes vienen del mundo tech como para quienes no.
- **Proyectos destacados**: Cards interactivas que muestran mis proyectos más relevantes, extraídos automáticamente desde mi GitHub, filtrando solo los más actuales y relevantes.
- **Modal de detalles**: Al hacer clic en un proyecto, se abre un modal con información ampliada y visuales adaptados a cualquier pantalla.
- **Tecnologías con íconos**: Cada proyecto muestra las tecnologías utilizadas, acompañadas de íconos visuales y nombres normalizados para que cualquier persona pueda identificarlas fácilmente.
- **Animaciones y Navegación Fluida**: Transiciones suaves y un scroll elegante gracias a `framer-motion` para una experiencia de usuario más dinámica.
- **Fondo Personalizado**: Un fondo con un degradado de estilo "azul metálico" que le da un toque único y profesional a la página.
- **Footer y enlaces sociales**: Acceso directo a mis redes y contacto, con íconos y enlaces personalizados.

## Características técnicas

- **React + Vite** para una experiencia SPA rápida y moderna.
- **CSS Modules** y variables CSS para estilos escalables y personalizables.
- **Framer Motion** para animaciones complejas y de alto rendimiento.
- **Extracción automática de tecnologías** desde los README de cada proyecto.
- **Normalización y limpieza de nombres** de tecnologías para evitar redundancias.
- **Íconos de tecnologías** usando `react-icons`, con colores y fondos adaptados al tema.
- **Accesibilidad**: Navegación por teclado, roles ARIA y contraste adecuado.
- **Visuales responsivos**: Se adapta perfectamente a móviles, tablets y escritorio.
- **Filtros avanzados**: Solo se muestran proyectos relevantes, excluyendo repositorios no deseados.

## ¿Cómo se hizo?

- Se creó la estructura base con React y Vite.
- Se implementó un sistema de temas claro/oscuro con persistencia local.
- Se desarrolló una lógica para extraer y normalizar tecnologías desde los README locales.
- Se diseñaron cards y modales accesibles y visualmente coherentes.
- Se integró la API de GitHub para mostrar datos reales de perfil y proyectos.
- Se agregaron filtros para mostrar solo los proyectos más recientes y relevantes.
- Se personalizó el footer con enlaces sociales y correo, usando íconos.
- Se ajustaron los estilos para que los fondos de las tecnologías sean claros en modo claro y gris oscuro en modo oscuro.
- Se realizaron múltiples pruebas y mejoras para asegurar accesibilidad y compatibilidad.

## Instalación y uso

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el proyecto con `npm run dev`.
4. Abre tu navegador en `http://localhost:5173` (o el puerto que indique Vite).

## Tecnologías principales

- React
- Vite
- CSS Modules
- Framer Motion
- React Icons
- Consumo de la API de GitHub

## ¿Por qué este portfolio es diferente?

Este portfolio no solo muestra proyectos, sino que los presenta de forma clara, visual y accesible para cualquier persona, sin importar su experiencia técnica. Cada detalle, desde los íconos hasta los filtros y la accesibilidad, fue pensado para que la experiencia sea agradable y profesional.

---

¿Tienes preguntas o quieres contactarme? ¡Encuentra mis enlaces en el footer!

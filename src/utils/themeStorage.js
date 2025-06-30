// Helpers para guardar y obtener el tema actual en localStorage
export function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    // Fallback: loguea el error si localStorage falla
    console.error('Error guardando tema en localStorage:', e);
  }
}

export function getSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    console.error('Error obteniendo tema de localStorage:', e);
    return null;
  }
}

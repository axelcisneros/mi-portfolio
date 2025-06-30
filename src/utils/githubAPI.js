// Utilidades para consumir la API pública de GitHub
import axios from "axios";

// Abstracción de cliente HTTP
const httpClient = {
  async get(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }
};

// Obtiene datos de perfil de usuario
export async function fetchGitHubProfile(username) {
  return httpClient.get(`https://api.github.com/users/${username}`);
}

// Obtiene los repos públicos del usuario
export async function fetchGitHubRepos(username) {
  return httpClient.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
}

// Busca un repo por nombre exacto (case-insensitive)
export function findRepoByName(repos, name) {
  return repos.find(r => r.name.toLowerCase() === name.toLowerCase());
}

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // 🔹 Ahora usa la variable de entorno
  timeout: 5000, // 🔹 Tiempo máximo de espera (5s)
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_API_KEY, // 🔹 Se añade la API key a cada petición
  },
});

export default api;

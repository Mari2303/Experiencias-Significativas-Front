import axios from "axios";
import { getToken } from "../Services/Auth";

const api = axios.create({
  baseURL: "https://localhost:7263/api", // 👈 tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// 👉 Interceptor para agregar el token automáticamente
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 👉 Interceptor para manejar expiración de sesión
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {

    }
    return Promise.reject(error);
  }
);

export default api;

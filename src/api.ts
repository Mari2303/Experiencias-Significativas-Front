// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7263/api", // 👈 usa tu backend real
});

// Interceptor para adjuntar token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Login: obtiene el token y lo guarda en localStorage
export const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", { username, password });

  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Registro de usuario normal
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await api.post("/auth/register", { name, email, password });
  return response.data;
};

// Registro de persona (requiere token)
export const registerPerson = async (personData: any) => {
  const response = await api.post("/Person", personData);
  return response.data;
};

export default api;

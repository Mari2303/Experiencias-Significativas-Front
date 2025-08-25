import axios from "axios";
import { getToken } from "../Services/tokenService";

const api = axios.create({
  baseURL: "https://localhost:7263/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken(); // ahora valida expiración
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

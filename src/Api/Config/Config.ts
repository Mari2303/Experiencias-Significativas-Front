import axios from "axios";

// Instancia de Axios
const configApi = axios.create({
  baseURL: "http://localhost:5001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adjuntar token automáticamente
configApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Función para guardar el token en localStorage con expiración
export const saveToken = (token: string, p0: number) => {
  localStorage.setItem("token", token);
};

// Login: obtiene el token y lo guarda en localStorage con expiración
export const login = async (username: string, password: string) => {
  const response = await configApi.post("/auth/login", { username, password });
  const token =
    response.data?.token ||
    response.data?.accessToken ||
    response.data?.jwt ||
    response.data?.data?.token;
  if (token) {
    saveToken(token, 60);
  }
  return response.data;
};

// Registro de usuario normal
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await configApi.post("/auth/register", { name, email, password });
  return response.data;
};



export default configApi;
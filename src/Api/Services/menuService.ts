import axios from "axios";

const API_URL = "https://localhost:7263/api/Menu"; // 👉 cambia por tu endpoint real

// Obtiene el menú desde el backend
export const getMenu = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`, // si usas JWT
    },
  });
  return response.data;
};

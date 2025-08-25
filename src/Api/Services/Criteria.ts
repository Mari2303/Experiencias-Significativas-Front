import axios from "axios";
import { Criteria } from "../Types/Types";

const API_URL = "https://localhost:7263/api/Criteria"; // Cambia al endpoint de tu API

// Función para obtener el token desde localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Configuración de headers con token
const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Obtener todas las criteria
export const getCriterias = async (): Promise<Criteria[]> => {
  try {
    const response = await axios.get<Criteria[]>(`${API_URL}/getAll`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error al obtener criterios:", error);
    return [];
  }
};

// Crear un nuevo criteria
export const addCriteria = async (criteria: Omit<Criteria, "id">): Promise<Criteria | null> => {
  try {
    const response = await axios.post<Criteria>(API_URL, criteria, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error al crear criteria:", error);
    return null;
  }
};

// Actualizar un criteria
export const updateCriteria = async (id: number, updatedData: Partial<Criteria>): Promise<boolean> => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedData, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error al actualizar criteria:", error);
    return false;
  }
};

// Eliminado lógico (inactivar)
export const deleteCriteriaLogical = async (id: number): Promise<boolean> => {
  try {
    await axios.patch(`${API_URL}/${id}/inactivate`, {}, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error al inactivar criteria:", error);
    return false;
  }
};

// Eliminado permanente
export const deleteCriteriaPermanent = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error al eliminar criteria:", error);
    return false;
  }
};

export type { Criteria };

// src/Services/CriteriaService.ts
import configApi from "../Config/Config"; // instancia con interceptor
import { Criteria } from "../Types/Types";

// Obtener todas las criteria
export const getCriterias = async (): Promise<Criteria[]> => {
  try {
    const response = await configApi.get("/Criteria/getAll");

    // Siempre vienen en response.data.data
    if (Array.isArray(response.data.data)) {
      return response.data.data;
    }

    console.error("getCriterias: formato de respuesta inesperado", response.data);
    return [];
  } catch (error) {
    console.error("Error al obtener criterios:", error);
    return [];
  }
};

// Crear un nuevo criteria
export const addCriteria = async (criteria: { name: string; code: string }): Promise<Criteria | null> => {
  try {
    const response = await configApi.post("/Criteria", criteria);

    if (response.data?.status && response.data?.data) {
      return response.data.data; // El criterio creado
    }

    console.error("addCriteria: formato de respuesta inesperado", response.data);
    return null;
  } catch (error) {
    console.error("Error al crear criteria:", error);
    return null;
  }
};

// Actualizar un criteria
export const updateCriteria = async (id: number, updatedData: Partial<Criteria>): Promise<Criteria | null> => {
  try {
    const response = await configApi.put(`/Criteria/${id}`, updatedData);

    if (response.data?.status && response.data?.data) {
      return response.data.data; // El criterio actualizado
    }

    console.error("updateCriteria: formato de respuesta inesperado", response.data);
    return null;
  } catch (error) {
    console.error("Error al actualizar criteria:", error);
    return null;
  }
};

// Eliminado lógico (inactivar)
export const deleteCriteriaLogical = async (id: number): Promise<boolean> => {
  try {
    const response = await configApi.patch(`/Criteria/${id}/inactivate`, {});

    if (response.data?.status) {
      return true;
    }

    console.error("deleteCriteriaLogical: formato de respuesta inesperado", response.data);
    return false;
  } catch (error) {
    console.error("Error al inactivar criteria:", error);
    return false;
  }
};

export const deleteCriteriaPermanent = async (id: number): Promise<boolean> => {
  try {
    const response = await configApi.delete(`/Criteria/${id}`);

    // Caso 1: backend devuelve objeto con status
    if (response.data?.status) {
      return true;
    }

    // Caso 2: backend devuelve 204 No Content
    if (response.status === 204) {
      return true;
    }

    console.error("deleteCriteriaPermanent: respuesta inesperada", response);
    return false;
  } catch (error) {
    console.error("Error al eliminar criteria:", error);
    return false;
  }
};

export type { Criteria };

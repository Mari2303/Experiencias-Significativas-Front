// src/components/Modulo/services/PopulationGroup.ts

export interface PopulationGroup {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const API_URL = "https://localhost:7263/api/PopulationGrade/getAll";

export const getPopulationGroups = async (): Promise<PopulationGroup[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error obteniendo PopulationGroups");
  return await res.json();
};

export const addPopulationGroup = async (data: Omit<PopulationGroup, "id">) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error agregando PopulationGroup");
  return await res.json();
};

export const updatePopulationGroup = async (id: number, data: Partial<PopulationGroup>) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error actualizando PopulationGroup");
};

export const deletePopulationGroupLogical = async (id: number) => {
  await fetch(`${API_URL}/${id}/logical-delete`, { method: "PUT" });
};

export const deletePopulationGroupPermanent = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

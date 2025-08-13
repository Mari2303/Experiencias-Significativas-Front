// src/components/Modulo/services/PopulationGroup.ts
export interface PopulationGroup {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const STORAGE_KEY = "populationGroups";

export const getPopulationGroups = (): PopulationGroup[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addPopulationGroup = (
  group: Omit<PopulationGroup, "id">
): PopulationGroup => {
  const groups = getPopulationGroups();
  const newGroup: PopulationGroup = { id: Date.now(), ...group };
  groups.push(newGroup);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
  return newGroup;
};

export const updatePopulationGroup = (
  id: number,
  updatedData: Partial<PopulationGroup>
) => {
  const groups = getPopulationGroups().map((g) =>
    g.id === id ? { ...g, ...updatedData } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
};

// Eliminado lógico (inactivar)
export const deletePopulationGroupLogical = (id: number) => {
  const groups = getPopulationGroups().map((g) =>
    g.id === id ? { ...g, activo: false } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
};

// Eliminado permanente (remover del array)
export const deletePopulationGroupPermanent = (id: number) => {
  const groups = getPopulationGroups().filter((g) => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
};

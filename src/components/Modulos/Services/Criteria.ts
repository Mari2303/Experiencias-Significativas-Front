// src/components/Modulo/services/Criteria.ts
export interface Criteria {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const STORAGE_KEY = "Criterias";

export const getCriterias = (): Criteria[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addCriteria = (Criteria: Omit<Criteria, "id">): Criteria => {
  const Criterias = getCriterias();
  const newCriteria: Criteria = { id: Date.now(), ...Criteria };
  Criterias.push(newCriteria);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Criterias));
  return newCriteria;
};

export const updateCriteria = (id: number, updatedData: Partial<Criteria>) => {
  const Criterias = getCriterias().map((g) =>
    g.id === id ? { ...g, ...updatedData } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Criterias));
};

// Eliminado lógico (inactivar)
export const deleteCriteriaLogical = (id: number) => {
  const Criterias = getCriterias().map((g) =>
    g.id === id ? { ...g, activo: false } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Criterias));
};

// Eliminado permanente (remover del array)
export const deleteCriteriaPermanent = (id: number) => {
  const Criterias = getCriterias().filter((g) => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Criterias));
};

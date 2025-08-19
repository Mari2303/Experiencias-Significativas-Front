// src/components/Modulo/services/LineThematic.ts
export interface LineThematic {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const STORAGE_KEY = "LineThematics";

export const getLineThematics = (): LineThematic[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addLineThematic = (LineThematic: Omit<LineThematic, "id">): LineThematic => {
  const LineThematics = getLineThematics();
  const newLineThematic: LineThematic = { id: Date.now(), ...LineThematic };
  LineThematics.push(newLineThematic);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(LineThematics));
  return newLineThematic;
};

export const updateLineThematic = (id: number, updatedData: Partial<LineThematic>) => {
  const LineThematics = getLineThematics().map((g) =>
    g.id === id ? { ...g, ...updatedData } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(LineThematics));
};

// Eliminado lógico (inactivar)
export const deleteLineThematicLogical = (id: number) => {
  const LineThematics = getLineThematics().map((g) =>
    g.id === id ? { ...g, activo: false } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(LineThematics));
};

// Eliminado permanente (remover del array)
export const deleteLineThematicPermanent = (id: number) => {
  const LineThematics = getLineThematics().filter((g) => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(LineThematics));
};

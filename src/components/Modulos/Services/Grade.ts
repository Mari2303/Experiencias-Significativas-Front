// src/components/Modulo/services/Grade.ts
export interface Grade {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const STORAGE_KEY = "grades";

export const getGrades = (): Grade[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addGrade = (grade: Omit<Grade, "id">): Grade => {
  const grades = getGrades();
  const newGrade: Grade = { id: Date.now(), ...grade };
  grades.push(newGrade);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
  return newGrade;
};

export const updateGrade = (id: number, updatedData: Partial<Grade>) => {
  const grades = getGrades().map((g) =>
    g.id === id ? { ...g, ...updatedData } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
};

// Eliminado lógico (inactivar)
export const deleteGradeLogical = (id: number) => {
  const grades = getGrades().map((g) =>
    g.id === id ? { ...g, activo: false } : g
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
};

// Eliminado permanente (remover del array)
export const deleteGradePermanent = (id: number) => {
  const grades = getGrades().filter((g) => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
};

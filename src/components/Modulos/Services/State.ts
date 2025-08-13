// src/components/Modulo/services/State.ts
export interface IState {
  id: number;
  nombre: string;
  codigo: string;
  activo: boolean;
}

const STORAGE_KEY = "states";

export const getStates = (): IState[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addState = (state: Omit<IState, "id">): IState => {
  const states = getStates();
  const newState: IState = { id: Date.now(), ...state };
  states.push(newState);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
  return newState;
};

export const updateState = (id: number, updatedData: Partial<IState>): void => {
  const states = getStates().map((s) =>
    s.id === id ? { ...s, ...updatedData } : s
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
};

export const deleteStateLogical = (id: number): void => {
  const states = getStates().map((s) =>
    s.id === id ? { ...s, activo: false } : s
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
};

export const deleteStatePermanent = (id: number): void => {
  const states = getStates().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
};

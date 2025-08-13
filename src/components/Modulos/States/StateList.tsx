import React from "react";
import {
  IState,
  getStates,
  deleteStateLogical,
  deleteStatePermanent,
} from "../Services/State";

interface StateListProps {
  setEditing: (state: IState) => void;
  refreshFlag: boolean;
  refresh: () => void;
}

export default function StateList({ setEditing, refreshFlag, refresh }: StateListProps) {
  const states: IState[] = getStates();

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Código</th>
          <th className="border p-2">Activo</th>
          <th className="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {states.length === 0 && (
          <tr>
            <td colSpan={4} className="text-center p-4">
              No hay states registrados
            </td>
          </tr>
        )}
        {states.map((s) => (
          <tr key={s.id}>
            <td className="border p-2">{s.nombre}</td>
            <td className="border p-2">{s.codigo}</td>
            <td className="border p-2">{s.activo ? "Sí" : "No"}</td>
            <td className="border p-2">
              <button
                className="bg-yellow-400 px-2 py-1 mr-2 rounded"
                onClick={() => setEditing(s)}
              >
                Editar
              </button>
              <button
                className="bg-orange-500 px-2 py-1 mr-2 rounded text-white"
                onClick={() => {
                  deleteStateLogical(s.id);
                  refresh();
                }}
              >
                Inactivar
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white"
                onClick={() => {
                  deleteStatePermanent(s.id);
                  refresh();
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

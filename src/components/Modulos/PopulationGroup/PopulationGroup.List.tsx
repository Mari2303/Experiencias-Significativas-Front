// src/components/Modulo/lists/PopulationGroupList.tsx
import React from "react";
import {
  getPopulationGroups,
  deletePopulationGroupLogical,
  deletePopulationGroupPermanent,
  PopulationGroup,
} from "../Services/PopulationGroup";

interface Props {
  setEditing: (group: PopulationGroup) => void;
  refreshFlag: boolean;
  refresh: () => void;
}

export default function PopulationGroupList({
  setEditing,
  refreshFlag,
  refresh,
}: Props) {
  const populationGroups = getPopulationGroups();

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
        {populationGroups.length === 0 && (
          <tr>
            <td colSpan={4} className="text-center p-4">
              No hay grupos poblacionales registrados
            </td>
          </tr>
        )}
        {populationGroups.map((g) => (
          <tr key={g.id}>
            <td className="border p-2">{g.nombre}</td>
            <td className="border p-2">{g.codigo}</td>
            <td className="border p-2">{g.activo ? "Sí" : "No"}</td>
            <td className="border p-2 flex gap-2">
              <button
                className="bg-yellow-400 px-2 py-1 rounded"
                onClick={() => setEditing(g)}
              >
                Editar
              </button>
              <button
                className="bg-orange-500 px-2 py-1 rounded text-white"
                onClick={() => {
                  deletePopulationGroupLogical(g.id);
                  refresh();
                }}
              >
                Inactivar
              </button>
              <button
                className="bg-red-600 px-2 py-1 rounded text-white"
                onClick={() => {
                  if (
                    confirm("¿Seguro que deseas eliminar permanentemente?")
                  ) {
                    deletePopulationGroupPermanent(g.id);
                    refresh();
                  }
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

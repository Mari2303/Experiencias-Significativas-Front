import { useEffect, useState } from "react";
import {
  getCriterias,
  deleteCriteriaLogical,
  deleteCriteriaPermanent,
  Criteria,
} from "../../../Api/Services/Criteria";

interface Props {
  setEditing: (criteria: Criteria) => void;
  refreshFlag?: boolean;
}

export default function CriteriaList({ setEditing, refreshFlag }: Props) {
  const [criterias, setCriterias] = useState<Criteria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Cargar datos desde la API
  const fetchData = async () => {
    setLoading(true);
    const data = await getCriterias();
    setCriterias(data || []); // asegura que sea un array
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [refreshFlag]);

  if (loading) {
    return <p className="p-4 text-center">Cargando criterios...</p>;
  }

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
        {criterias.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center p-4">
              No hay criterios registrados
            </td>
          </tr>
        ) : (
          criterias.map((g) => (
            <tr key={g.id}>
              <td className="border p-2">{g.name}</td>
              <td className="border p-2">{g.code}</td>
              <td className="border p-2">{g.state ? "Sí" : "No"}</td>
              <td className="border p-2 flex gap-2">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded"
                  onClick={() => setEditing(g)}
                >
                  Editar
                </button>
                <button
                  className="bg-orange-500 px-2 py-1 rounded text-white"
                  onClick={async () => {
                    await deleteCriteriaLogical(g.id);
                    fetchData();
                  }}
                >
                  Inactivar
                </button>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-white"
                  onClick={async () => {
                    if (confirm("¿Seguro que deseas eliminar permanentemente?")) {
                      await deleteCriteriaPermanent(g.id);
                      fetchData();
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

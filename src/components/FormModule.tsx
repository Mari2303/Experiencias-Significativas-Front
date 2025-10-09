const AddFormModule: React.FC<{ onClose: () => void; onCreated: () => void }> = ({ onClose, onCreated }) => {
	const [form, setForm] = useState<string>("");
	const [module, setModule] = useState<string>("");
	const [state, setState] = useState<boolean>(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		const token = localStorage.getItem("token");
		try {
			await axios.post("/api/FormModule", {
				form,
				module,
				state
			}, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setLoading(false);
			onCreated();
			onClose();
		} catch (err) {
			setError("Error al crear relación");
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
				<h3 className="text-xl font-bold mb-4 text-sky-700">Agregar Relación Formulario-Módulo</h3>
				<label className="block mb-2 font-semibold">Nombre Formulario</label>
				<input type="text" value={form} onChange={e => setForm(e.target.value)} className="w-full mb-4 p-2 border rounded" />
				<label className="block mb-2 font-semibold">Nombre Módulo</label>
				<input type="text" value={module} onChange={e => setModule(e.target.value)} className="w-full mb-4 p-2 border rounded" />
				<label className="block mb-2 font-semibold">Estado</label>
				<select value={state ? "true" : "false"} onChange={e => setState(e.target.value === "true")}
					className="w-full mb-4 p-2 border rounded">
					<option value="true">Activo</option>
					<option value="false">Inactivo</option>
				</select>
				{error && <div className="text-red-500 mb-2">{error}</div>}
				<div className="flex gap-4 justify-end">
					<button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
					<button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">{loading ? "Guardando..." : "Guardar"}</button>
				</div>
			</form>
		</div>
	);
};
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormModule } from "../Api/Types/formModule";


interface EditFormModuleProps {
	formModule: FormModule;
	onClose: () => void;
	onUpdated: () => void;
}

const EditFormModule: React.FC<EditFormModuleProps> = ({ formModule, onClose, onUpdated }) => {
		const [form, setForm] = useState(formModule.form || "");
		const [module, setModule] = useState(formModule.module || "");
		const [formId, setFormId] = useState(formModule.formId);
		const [moduleId, setModuleId] = useState(formModule.moduleId);
	const [state, setState] = useState(formModule.state);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		const token = localStorage.getItem("token");
		try {
			   await axios.put(`/api/FormModule`, {
				   id: formModule.id,
				   formId,
				   moduleId,
				   state,
				   createdAt: formModule.createdAt,
				   deletedAt: formModule.deletedAt,
				   form,
				   module
			   }, {
				   headers: { Authorization: `Bearer ${token}` },
			   });
			setLoading(false);
			onUpdated();
			onClose();
		} catch (err) {
			setError("Error al actualizar relación");
			setLoading(false);
		}
	};

	return (
		   <div className="fixed inset-0 flex items-center justify-center z-50">
			   <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
				   <h3 className="text-xl font-bold mb-4 text-sky-700">Editar Relación Formulario-Módulo</h3>
					  <label className="block mb-2 font-semibold">Nombre Formulario</label>
					  <input type="text" value={form} onChange={e => setForm(e.target.value)} className="w-full mb-4 p-2 border rounded" />
				   <label className="block mb-2 font-semibold">Nombre Módulo</label>
				   <input type="text" value={module} onChange={e => setModule(e.target.value)} className="w-full mb-4 p-2 border rounded" />
				<label className="block mb-2 font-semibold">Estado</label>
				<select value={state ? "true" : "false"} onChange={e => setState(e.target.value === "true")}
					className="w-full mb-4 p-2 border rounded">
					<option value="true">Activo</option>
					<option value="false">Inactivo</option>
				</select>
				{error && <div className="text-red-500 mb-2">{error}</div>}
				<div className="flex gap-4 justify-end">
					<button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
					<button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">{loading ? "Guardando..." : "Guardar"}</button>
				</div>
			</form>
		</div>
	);
};

const FormModuleList: React.FC = () => {
  const [formModules, setFormModules] = useState<FormModule[]>([]);
  const [editFormModule, setEditFormModule] = useState<FormModule | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [onlyActive, setOnlyActive] = useState(true); // Estado para filtrar activos/inactivos

  const fetchFormModules = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/FormModule/getAll", {
        params: { OnlyActive: onlyActive }, // Usar el filtro OnlyActive
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Respuesta de la API:", res.data.data); // Inspeccionar los datos
        if (Array.isArray(res.data.data)) {
          const formModulesNormalized = res.data.data.map((fm: FormModule) => ({
            ...fm,
            state: onlyActive, // Asignar el estado basado en el filtro OnlyActive
          }));
          setFormModules(formModulesNormalized);
        } else {
          setFormModules([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar relaciones");
        setLoading(false);
      });
  };

  const handleDeactivate = async (id: number) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/api/FormModule/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFormModules(); // Refrescar lista
    } catch (err) {
      console.error("Error al desactivar relación:", err);
    }
  };

  useEffect(() => {
    fetchFormModules();
  }, [onlyActive]); // Refrescar cuando cambie el filtro

  if (loading) return <div>Cargando relaciones...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Relaciones Formulario-Módulo</h2>
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          onClick={() => setAddOpen(true)}
        >
          Agregar relación
        </button>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded font-semibold ${
              onlyActive ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"
            }`}
            onClick={() => setOnlyActive(true)} // Mostrar activos
          >
            Mostrar Activos
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold ${
              !onlyActive ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"
            }`}
            onClick={() => setOnlyActive(false)} // Mostrar inactivos
          >
            Mostrar Inactivos
          </button>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide" style={{ maxHeight: "60vh", WebkitOverflowScrolling: "touch" }}>
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-sky-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Formulario</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Módulo</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Estado</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {formModules.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 px-4 text-center text-gray-500">
                  No hay relaciones para mostrar.
                </td>
              </tr>
            ) : (
              formModules.map((fm) => (
                <tr key={fm.id} className="hover:bg-sky-50 transition-colors">
                  <td className="py-2 px-4 border-b">{fm.form}</td>
                  <td className="py-2 px-4 border-b">{fm.module}</td>
                  <td className="py-2 px-4 border-b">{fm.state ? "Activo" : "Inactivo"}</td>
                  <td className="py-2 px-4 border-b flex gap-2">
                    <button
                      className="px-3 py-1 rounded bg-sky-600 text-white hover:bg-sky-700 text-sm"
                      onClick={() => setEditFormModule(fm)}
                    >
                      Editar
                    </button>
                    {fm.state ? (
                      <button
                        className="px-3 py-1 rounded bg-red-500 hover:bg-red-700 text-white text-sm"
                        onClick={() => handleDeactivate(fm.id)}
                      >
                        Desactivar
                      </button>
                    ) : (
                      <span className="text-gray-500 text-sm">Inactivo</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {editFormModule && (
        <EditFormModule
          formModule={editFormModule}
          onClose={() => setEditFormModule(null)}
          onUpdated={() => {
            setLoading(true);
            fetchFormModules();
          }}
        />
      )}
      {addOpen && (
        <AddFormModule
          onClose={() => setAddOpen(false)}
          onCreated={() => {
            setLoading(true);
            fetchFormModules();
          }}
        />
      )}
    </div>
  );
};

export default FormModuleList;

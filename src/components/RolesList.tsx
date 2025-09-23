import React, { useEffect, useState } from "react";
import axios from "axios";

interface Role {
  id: number;
  code: string;
  name: string;
  description: string;
  state?: boolean;
  createdAt?: string;
}

interface EditRoleFormProps {
  role: Role;
  onClose: () => void;
  onUpdated: () => void;
}

const EditRoleForm: React.FC<EditRoleFormProps> = ({ role, onClose, onUpdated }) => {
  const [name, setName] = useState(role.name);
  const [description, setDescription] = useState(role.description);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    try {
      await axios.put(`/api/Role`, {
        id: role.id,
        code: role.code,
        name,
        description,
        state: role.state ?? true,
        createdAt: role.createdAt ?? new Date().toISOString(),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      onUpdated();
      onClose();
    } catch (err) {
      setError("Error al actualizar rol");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-sky-700">Editar Rol</h3>
        <label className="block mb-2 font-semibold">Código</label>
        <input value={role.code} disabled className="w-full mb-4 p-2 border rounded bg-gray-100" />
        <label className="block mb-2 font-semibold">Nombre</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <label className="block mb-2 font-semibold">Descripción</label>
        <input value={description} onChange={e => setDescription(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <div className="flex gap-4 justify-end">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">{loading ? "Guardando..." : "Guardar"}</button>
        </div>
      </form>
    </div>
  );
};


interface AddRoleFormProps {
  onClose: () => void;
  onAdded: () => void;
}

const AddRoleForm: React.FC<AddRoleFormProps> = ({ onClose, onAdded }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    try {
      await axios.post("/api/Role", {
        id: 0,
        code,
        name,
        description,
        state: true,
        createdAt: new Date().toISOString(),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      onAdded();
      onClose();
    } catch (err) {
      setError("Error al agregar rol");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-sky-700">Agregar Rol</h3>
        <label className="block mb-2 font-semibold">Código</label>
        <input value={code} onChange={e => setCode(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
        <label className="block mb-2 font-semibold">Nombre</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
        <label className="block mb-2 font-semibold">Descripción</label>
        <input value={description} onChange={e => setDescription(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <div className="flex gap-4 justify-end">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">{loading ? "Agregando..." : "Agregar"}</button>
        </div>
      </form>
    </div>
  );
};

const RolesList: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [editRole, setEditRole] = useState<Role | null>(null);
  const [addRoleOpen, setAddRoleOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRoles = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/Role/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setRoles(res.data.data);
        } else {
          setRoles([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar roles");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  if (loading) return <div>Cargando roles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Lista de Roles</h2>
      <div className="flex justify-end mb-4">
        <button
          className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 font-semibold"
          onClick={() => setAddRoleOpen(true)}
        >Agregar Rol</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-sky-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Código</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Nombre</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Descripción</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 px-4 text-center text-gray-500">No hay roles para mostrar.</td>
              </tr>
            ) : (
              roles.map((role) => (
                <tr key={role.code} className="hover:bg-sky-50 transition-colors">
                  <td className="py-2 px-4 border-b">{role.code}</td>
                  <td className="py-2 px-4 border-b">{role.name}</td>
                  <td className="py-2 px-4 border-b">{role.description}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="px-3 py-1 rounded bg-sky-600 text-white hover:bg-sky-700 text-sm"
                      onClick={() => setEditRole(role)}
                    >Editar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {editRole && (
        <EditRoleForm
          role={editRole}
          onClose={() => setEditRole(null)}
          onUpdated={() => {
            setLoading(true);
            fetchRoles();
          }}
        />
      )}
      {addRoleOpen && (
        <AddRoleForm
          onClose={() => setAddRoleOpen(false)}
          onAdded={() => {
            setLoading(true);
            fetchRoles();
          }}
        />
      )}
    </div>
  );
};

export default RolesList;

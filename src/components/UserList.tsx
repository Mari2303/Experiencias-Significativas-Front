import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  code: string;
  username: string;
  state?: boolean;
  createdAt?: string;
  deletedAt?: string;
  personId?: number;
}


interface EditUserFormProps {
  user: User;
  onClose: () => void;
  onUpdated: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onClose, onUpdated }) => {
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    try {
      await axios.put(`/api/User`, {
        id: user.id,
        code: user.code,
        username,
        password,
        state: user.state ?? true,
        createdAt: user.createdAt ?? new Date().toISOString(),
        deletedAt: user.deletedAt ?? null,
        personId: user.personId ?? 0,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      onUpdated();
      onClose();
    } catch (err) {
      setError("Error al actualizar usuario");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-sky-700">Editar Usuario</h3>
        <label className="block mb-2 font-semibold">Código</label>
        <input value={user.code} disabled className="w-full mb-4 p-2 border rounded bg-gray-100" />
        <label className="block mb-2 font-semibold">Nombre de Usuario</label>
        <input value={username} onChange={e => setUsername(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <label className="block mb-2 font-semibold">Contraseña</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <div className="flex gap-4 justify-end">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">{loading ? "Guardando..." : "Guardar"}</button>
        </div>
      </form>
    </div>
  );
};


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/User/getAll", {
        params: {
          PageSize: 20,
          PageNumber: 1,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setUsers(res.data.data);
        } else {
          setUsers([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar usuarios");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
    const token = localStorage.getItem("token");
    axios
      .get("/api/User/getAll", {
        params: {
          PageSize: 20,
          PageNumber: 1,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Respuesta de /api/User/getAll:", res.data);
        if (Array.isArray(res.data.data)) {
          setUsers(res.data.data);
        } else {
          setUsers([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar usuarios");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Lista de Usuarios</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-sky-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Código</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Nombre de Usuario</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-6 px-4 text-center text-gray-500">No hay usuarios para mostrar.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.code} className="hover:bg-sky-50 transition-colors">
                  <td className="py-2 px-4 border-b">{user.code}</td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="px-3 py-1 rounded bg-sky-600 text-white hover:bg-sky-700 text-sm"
                      onClick={() => setEditUser(user)}
                    >Editar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {editUser && (
        <EditUserForm
          user={editUser}
          onClose={() => setEditUser(null)}
          onUpdated={() => {
            setLoading(true);
            fetchUsers();
          }}
        />
      )}
    </div>
  );
};

export default UserList;

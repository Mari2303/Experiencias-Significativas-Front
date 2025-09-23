import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
	id: number;
	code: string;
	username: string;
	role?: Role | null;
	roleId?: number;
}

interface Role {
	id: number;
	code: string;
	name: string;
}

const UsersRol: React.FC = () => {
		const [users, setUsers] = useState<User[]>([]);
		const [roles, setRoles] = useState<Role[]>([]);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState<string | null>(null);
		const [assigning, setAssigning] = useState<{ [userId: number]: boolean }>({});
		const [newUserIds, setNewUserIds] = useState<number[]>([]); // IDs de usuarios recién creados

	// Obtener usuarios y roles
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			const token = localStorage.getItem("token");
			try {
				// Obtener usuarios primero
				const usersRes = await axios.get("/api/User/getAll", {
					headers: { Authorization: `Bearer ${token}` },
				});
				const rolesRes = await axios.get("/api/Role/getAll", {
					headers: { Authorization: `Bearer ${token}` },
				});
				let usersData: User[] = usersRes.data.data || [];
				const rolesData: Role[] = rolesRes.data.data || [];
				// Asociar el objeto role si el usuario tiene roleId
				usersData = usersData.map(user => {
					if (!user.role && user.roleId) {
						const foundRole = rolesData.find(r => r.id === user.roleId);
						return { ...user, role: foundRole || null };
					}
					return user;
				});
				setUsers(usersData);
				setRoles(rolesData);
				setLoading(false);
			} catch (err) {
				setError("Error al cargar usuarios o roles");
				setLoading(false);
			}
		};

	useEffect(() => {
		fetchData();
	}, []);

		// Asignar rol a usuario
		const handleAssignRole = async (userId: number, roleId: number) => {
			setAssigning((prev) => ({ ...prev, [userId]: true }));
			const token = localStorage.getItem("token");
			try {
				await axios.post("/api/UserRole", {
					userId,
					roleId,
					state: true,
					createdAt: new Date().toISOString(),
				}, {
					headers: { Authorization: `Bearer ${token}` },
				});
				setNewUserIds(ids => ids.filter(id => id !== userId)); // Quitar de la lista de nuevos
				fetchData();
			} catch (err) {
				setError("Error al asignar rol");
			} finally {
				setAssigning((prev) => ({ ...prev, [userId]: false }));
			}
		};

	if (loading) return <div>Cargando usuarios y roles...</div>;
	if (error) return <div>{error}</div>;

		return (
			<div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
				<h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Usuarios y Roles</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full border border-gray-200 rounded-lg">
						<thead className="bg-sky-100">
							<tr>
								<th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Código</th>
								<th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Usuario</th>
								<th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Rol</th>
								<th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{users.length === 0 ? (
								<tr>
									<td colSpan={4} className="py-6 px-4 text-center text-gray-500">No hay usuarios para mostrar.</td>
								</tr>
							) : (
								users.map((user) => {
									let roleName = "Sin rol asignado";
									if (user.role && user.role.name) {
										roleName = user.role.name;
									} else if (user.roleId) {
										const foundRole = roles.find(r => r.id === user.roleId);
										if (foundRole) roleName = foundRole.name;
									}
									return (
										<tr key={user.id} className="hover:bg-sky-50 transition-colors">
											<td className="py-2 px-4 border-b">{user.code}</td>
											<td className="py-2 px-4 border-b">{user.username}</td>
											<td className="py-2 px-4 border-b">
												{user.role || user.roleId ? (
													<span className="px-2 py-1 rounded bg-sky-100 text-sky-700">{roleName}</span>
												) : (
													newUserIds.includes(user.id) ? (
														<select
															className="p-2 border rounded"
															defaultValue=""
															onChange={e => handleAssignRole(user.id, Number(e.target.value))}
															disabled={assigning[user.id]}
														>
															<option value="" disabled>Selecciona un rol</option>
															{roles.map(role => (
																<option key={role.id} value={role.id}>{role.name}</option>
															))}
														</select>
													) : (
														<span className="text-gray-400">Sin rol asignado</span>
													)
												)}
											</td>
											<td className="py-2 px-4 border-b">
												{/* Aquí podrías agregar acciones extra si lo necesitas */}
											</td>
										</tr>
									);
								})
							)}
						</tbody>
					</table>
				</div>
			</div>
		);
};

export default UsersRol;

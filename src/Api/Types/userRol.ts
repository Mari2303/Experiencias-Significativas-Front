
export interface UserRole {
  id: number;
  userId: number;
  roleId: number;
  state?: boolean; // Estado activo/inactivo
  createdAt?: string;
  deletedAt?: string;
}
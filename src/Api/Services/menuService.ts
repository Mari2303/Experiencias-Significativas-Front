
// Servicio para obtener el menú dinámico usando fetch
export interface MenuItem {
	formId: number;
	form: string;
	path: string;
	icon: string;
	order: number;
	moduleId: number;
	module: string;
}

export async function fetchMenu(userId: number, token: string): Promise<MenuItem[]> {
  const response = await fetch(`/api/User/${userId}/menu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include', // si usas cookies
  });
  if (!response.ok) {
    throw new Error('Error al obtener el menú');
  }
  return response.json();
}

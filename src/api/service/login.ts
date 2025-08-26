import API_BASE_URL from '../config';
import { LoginRequest } from '../types/interfaces';

export async function login(data: LoginRequest) {
  const response = await fetch(`${API_BASE_URL}/Auth/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Error en login');
  }

  return response.json();
}
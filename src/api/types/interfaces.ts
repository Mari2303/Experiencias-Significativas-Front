// Interfaz para la solicitud de inicio de sesión
// se ingresa todas partes que se le envian al backend

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

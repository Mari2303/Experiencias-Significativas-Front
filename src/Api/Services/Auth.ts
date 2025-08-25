import api from "../Config/Config";
import { saveToken } from "./tokenService";

export async function login(username: string, password: string) {
  const res = await api.post("/Auth/login", { username, password });

  if (res.data?.token) {
    saveToken(res.data.token, 30); // guarda por 30 minutos
  }

  return res.data;
}

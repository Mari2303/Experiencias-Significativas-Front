import Swal from "sweetalert2";
import Api from "../Config/Config";
import { person } from "../Types/Types";
import { getToken } from "./Auth"; // función que obtiene el token

export async function registerPerson(personData: person) {
  try {
    const token = getToken(); // obtenemos token del localStorage

    const headers = token
      ? { Authorization: `Bearer ${token}` }
      : undefined;

    // Registrar la persona (incluye username y password)
    const personRes = await Api.post("/Person", personData, { headers });

    const personId = personRes.data.id || personRes.data.Id;
    if (!personId) throw new Error("No se pudo obtener el ID de la persona");

    Swal.fire({
      title: "Registro Exitoso",
      icon: "success",
      text: "Su cuenta ha sido creada correctamente",
      confirmButtonText: "Iniciar sesión",
    });

    return {
      success: true,
      data: personRes.data,
    };
  } catch (err: any) {
    console.error("Error en el registro:", err);
    Swal.fire("Error", "No se pudo registrar la persona", "error");
    return { success: false, error: err };
  }
}

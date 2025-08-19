import Swal from "sweetalert2";
import api from "../Config/Config";
import { person } from "../Types/Types"; // Solo necesitamos person ahora

export async function registerPerson(personData: person) {
  try {
    // Registrar la persona (incluye username y password)
    const personRes = await api.post("/Person", personData);

    // Verificar que se haya creado correctamente
    const personId = personRes.data.id || personRes.data.Id;
    if (!personId) throw new Error("No se pudo obtener el ID de la persona");

    // Notificación solo si se guardó
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

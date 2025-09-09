// Api/Services/Registro.ts
import configApi from "../Config/Config"; // tu instancia de Axios

// Registrar persona
export const registerPerson = async (personPayload: any) => {
  console.log("Payload enviado a /Person/create:", personPayload);
  const response = await configApi.post("/Person/create", personPayload);
  return response.data;
};

// Registrar usuario
export const registerUser = async (userPayload: any) => {
  const response = await configApi.post("/User/register", userPayload);
  return response.data;
};


// src/pages/LoginPage.tsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login, saveToken } from "../Api/Config/Config";


type FormData = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  useEffect(() => {
    // Limpiar token y rol antiguos al entrar a login
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await login(data.username, data.password);
      console.log("Respuesta login:", response);

      // 🔹 Verificar si el login devolvió un token
      const token = response.data?.token || response.accessToken || response.jwt || response.token;
      if (!token) {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
        });
        return;
      }

      // Guardar token con expiración de 60 min usando la función central
      saveToken(token, 60);

      // Guardar rol según username
      const role = data.username.toLowerCase() === "mariaalejan1080@gmail.com" ? "admin" : "teacher";
      localStorage.setItem("role", role);

      Swal.fire({
        title: "Éxito",
        text: "Has iniciado sesión correctamente",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then(() => {
        // Redirigir según rol
        navigate(role === "admin" ? "/dashboard" : "/dashboardTeacher");
      });

    } catch (err: any) {
      Swal.fire({
        title: "Error",
        text: err.response?.data || err.message || "Error desconocido",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-90 h-90">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              placeholder="Correo Electrónico"
              type="email"
              {...register("username", { required: "El Correo Electrónico es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-10"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <input
              placeholder="Contraseña"
              type="password"
              {...register("password", { required: "La contraseña es requerida" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Se te olvidó tu contraseña? <br />
          <a href="/register" className="text-indigo-600 hover:text-indigo-500">
            Crea tu cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

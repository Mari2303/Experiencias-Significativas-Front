// src/pages/LoginPage.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  CorreoElectronico: string;
  Contraseña: string;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100">

    <div className="min-h-screen flex items-center justify-center bg-gray">
      <div className="bg-white p-8 rounded-lg shadow-md w-90 h-90">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>

            <input placeholder="Correo Electrónico"
              type="email"
              {...register("CorreoElectronico", { required: "El Correo Electrónico es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-10"
            />
            {errors.CorreoElectronico && (
              <p className="text-red-500 text-sm">{errors.CorreoElectronico.message}</p>
            )}
          </div>
          <div>
            
            <input placeholder="Contraseña"
              type="Contraseña"
              {...register("Contraseña", {
                required: "La contraseña es requerida",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.Contraseña && (
              <p className="text-red-500 text-sm">{errors.Contraseña.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Se te olvidó tu contraseña?{" "} <br />
          <a href="/register" className="text-indigo-600 hover:text-indigo-500">
            Crea tu cuenta
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

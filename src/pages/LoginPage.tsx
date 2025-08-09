import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import coete from "../img/coete.png";

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
    <div>
      {/* Imagen de fondo */}
      <img
        src={coete}
        alt="Descripción de la imagen"
        className=""
        style={{
          top: "-1%",
          left: "-5%",
          width: "110%",
          height: "160%",
          position: "absolute",
        }}
      />

      {/* Fondo con gradiente */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(50deg, #009CFF 20%, #FFFFFF 80%)",
        }}
      >
        {/* Cuadro principal */}
        <div className="w-[520px] h-[600px] p-10 bg-white/50 backdrop-blur-md rounded-xl shadow-2xl z-10 relative">
          <h2 className="text-5xl font-bold mb-6 text-center pt-10 text-black">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10"
          style={{
              top: "10%",
              position: "relative",
            }}
          >
            <div>
              <input
                placeholder="Correo Electrónico"
                type="email"
                {...register("CorreoElectronico", {
                  required: "El Correo Electrónico es requerido",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] text-black bg-white"
              />
              {errors.CorreoElectronico && (
                <p className="text-red-500 text-sm mt-1">{errors.CorreoElectronico.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Contraseña"
                type="password"
                {...register("Contraseña", {
                  required: "La contraseña es requerida",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] text-black bg-white"
              />
              {errors.Contraseña && (
                <p className="text-red-500 text-sm mt-1">{errors.Contraseña.message}</p>
              )}
            </div>
            <button
              className="w-full text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2"
              style={{ backgroundColor: "#009CFF" }}
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-700"
          style={{
              top: "15%",
              position: "relative",
              
            }}
          >
            ¿Se te olvidó tu contraseña?
            <br />
            <a href="/register" className="text-[#009CFF] hover:underline">
              Crea tu cuenta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

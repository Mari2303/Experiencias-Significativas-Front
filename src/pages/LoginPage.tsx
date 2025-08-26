import React, { useState } from "react"; // 🔹 CAMBIO: agregado useState
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { XCircle } from "lucide-react"; 
import coete from "../img/coete.png";

import { login } from "../api/service/login";
import { LoginRequest } from "../api/types/interfaces";

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

  const [showError, setShowError] = useState(false); // 🔹 CAMBIO: estado del modal

  const onSubmit = async (data: FormData) => {
    try {
      const loginData: LoginRequest = {
        username: data.CorreoElectronico,
        password: data.Contraseña,
      };
      const response = await login(loginData);
       console.log("Login exitoso:", response);
      navigate("/dashboard");
    } catch (error) {
      setShowError(true); // 🔹 CAMBIO: reemplaza al alert()
      // console.error("Error al iniciar sesión:", error);
    }
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

      {/* Fondo del cuadro */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(50deg, #009CFF 20%, #FFFFFF 80%)",
        }}
      >
        {/* Cuadro principal */}
        <div className="w-[450px] h-[530px] p-10 bg-white/50 backdrop-blur-md rounded-xl shadow-2xl z-10 relative">
          <h2 className="text-5xl font-bold mb-6 text-center pt-10 text-black">
            Iniciar Sesión
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-10"
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.CorreoElectronico.message}
                </p>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.Contraseña.message}
                </p>
              )}
            </div>
            <button
              className="w-full text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2"
              style={{ backgroundColor: "#009CFF" }}
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-20 text-center text-sm text-gray-700">
            <Link
              to="/reset-password"
              className="text-[#009CFF] hover:underline"
            >
              ¿Se te olvidó tu contraseña?
            </Link>
            <br />
            <Link to="/register" className="text-[#009CFF] hover:underline">
              Crea tu cuenta
            </Link>
          </p>
        </div>
      </div>
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center">
            <XCircle className="text-red-600 w-16 h-16 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">
              Error de autenticación
            </h2>
            <p className="text-gray-600 mb-6">
              Usuario o contraseña incorrecta
            </p>
            <button
              onClick={() => setShowError(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

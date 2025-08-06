// src/pages/RegisterPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [PrimerNombre, setNombre] = useState("");
  const [SegundoNombre, setSegundoNombre] = useState("");
  const [PrimerApellido, setPrimerApellido] = useState("");
  const [SegundoApellido, setSegundoApellido] = useState("");
  const [TipoDocumento, setTipoDocumento] = useState("");
  const [NumeroDocumento, setNumeroDocumento] = useState("");
  const [CodigoDane, setCodigoDane] = useState("");
  const [NombreUsuario, setNombreUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      TipoDocumento,
      NumeroDocumento,
      CodigoDane,
      NombreUsuario,
      email,
      password,
    });
    navigate("/login");
  };

 
  
      return (
<div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100">

    {/* Imagen del cohete detrás del contenido */}
    <img
      src="/public/images/LogoExperiencia.png"
      alt="Logo experiencia"
      className="absolute -top-20 -left-50 w-[300vw] h-auto opacity-80 z-0 pointer-events-none"
    />

  <img
  src="/ruta/del/cohete2.png"
  alt="Cohete 2"
  className="absolute bottom-0 right-0 w-[60vw] opacity-60 z-0 pointer-events-none"
  />



    {/* Capa translúcida que ocupa toda la pantalla */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-15" />


{/* Sección derecha con formulario */}
      <div className="relative z-20 flex items-center justify-center w-full h-full">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">Registro</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            
     
          {/* Campos individuales */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Primer Nombre:</label>
            <input
              type="text"
              value={PrimerNombre}
              onChange={(e) => setNombre(e.target.value)}
              required
             className="w-70 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-pink-500 focus:border-pink-500"

            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Segundo Nombre:</label>
            <input
              type="text"
              value={SegundoNombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
              required
            className="w-70 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Primer Apellido:</label>
            <input
              type="text"
              value={PrimerApellido}
              onChange={(e) => setPrimerApellido(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Segundo Apellido:</label>
            <input
              type="text"
              value={SegundoApellido}
              onChange={(e) => setSegundoApellido(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Documento:</label>
            <input
              type="text"
              value={TipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Número de Documento:</label>
            <input
              type="text"
              value={NumeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Código DANE:</label>
            <input
              type="text"
              value={CodigoDane}
              onChange={(e) => setCodigoDane(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre de Usuario:</label>
            <input
              type="text"
              value={NombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Estudiantil:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Botón */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-indigo-600 hover:text-indigo-500">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
</div> 
  );
  };

export default RegisterPage;



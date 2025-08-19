// src/pages/RegisterPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import { person } from "../Api/Types/Types";
import { registerPerson } from "../Api/Services/Registro";
import { codigosDane } from "../Api/Config/CodigosDane";

const RegisterPage: React.FC = () => {
  const [PrimerNombre, setNombre] = useState("");
  const [SegundoNombre, setSegundoNombre] = useState("");
  const [PrimerApellido, setPrimerApellido] = useState("");
  const [SegundoApellido, setSegundoApellido] = useState("");
  const [TipoDocumento, setTipoDocumento] = useState<number>(0);
  const [NumeroDocumento, setNumeroDocumento] = useState("");
  const [CodigoDane, setCodigoDane] = useState("");
  const [NombreUsuario, setNombreUsuario] = useState("");
  const [emailInstitucional, setEmailInstitucional] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState<number>(0);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const personPayload: person = {
  FirstName: PrimerNombre,
  MiddleName: SegundoNombre,
  FirstLastName: PrimerApellido,
  SecondLastName: SegundoApellido,
  DocumentType: Number(TipoDocumento), 
  IdentificationNumber: NumeroDocumento,
  CodeDane: CodigoDane,
  Username: NombreUsuario,
  Email: email,
  EmailInstitutional: emailInstitucional,
  Phone: Number(telefono),
  Password: password,
};

    


   try {
    // Llamada al backend para registrar la persona
    const response = await registerPerson(personPayload);

    // Solo mostrar éxito si la persona se guardó correctamente
    if (response.success && (response.data.id || response.data.Id)) {
      Swal.fire({
        title: "Registro Exitoso",
        icon: "success",
        text: "Su cuenta ha sido creada correctamente",
        confirmButtonText: "Iniciar sesión",
      }).then(() => {
        navigate("/login"); // Redirige después de cerrar el alert
      });
    } else {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "No se pudo registrar la persona",
      });
    }
  } catch (err: any) {
    Swal.fire({
      title: "Error",
      icon: "error",
      text: err.response?.data || err.message || "Error desconocido",
    });
  }
};
 

const tiposDocumentoList = [
  { label: "Cédula de ciudadanía", value: 1 },
  { label: "Tarjeta de identidad", value: 2 },
  { label: "Cédula de extranjería", value: 3 },
  { label: "Pasaporte", value: 4 }
];



const emailInstitucionalValues: number[] = [
  1,  2,  3,  4,  5,
  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20,
  21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
  31
];



 
  
      return (

        <div>        
      <img src= "/images/Cohete.png" alt="Descripción de la imagen" className="w-600" 
      style={{
        top: "-20%",
        left: "-12%",
        height: "200%",
        position: "absolute",
        rotate: "10deg",
        
      }} />

    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(50deg, #009CFF 20%, #FFFFFF 80%)",
      }}
    >

{/* Sección derecha con formulario */}
      <div className="relative z-20 flex items-center justify-center w-167 h-full ">
      <div className="bg-white/70 p-10 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-5xl font-bold text-center mb-6">Registro</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            
     
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
            <select
            value={TipoDocumento}
            onChange={(e) => setTipoDocumento(Number(e.target.value))}
            required
          >
            <option value="">Seleccione...</option>
            {tiposDocumentoList.map((tipo) => (
              <option key={tipo.value} value={tipo.value}>
                {tipo.label}
              </option>
            ))}
          </select>
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
            <select
              value={CodigoDane}
              onChange={(e) => setCodigoDane(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Seleccione...</option>
              {codigosDane.map((codigo) => (
                <option key={codigo} value={codigo}>
                  {codigo}
                </option>
              ))}
            </select>
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
            <label className="block text-sm font-medium text-gray-700">Correo Institucional:</label>
            <select
              value={emailInstitucional}
              onChange={(e) => setEmailInstitucional(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Seleccione...</option>
              {emailInstitucionalValues.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Personal:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-70 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
            <input
              type="Number"
              value={telefono}
              onChange={(e) => setTelefono(Number(e.target.value))}
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
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-120 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          <a href="/login" className="text-indigo-600 hover:text-indigo-500">
            ¿Quieres iniciar sesión?
          </a>
        </p>
      </div>
    </div>
</div> 
      </div>
    
  );
  };

export default RegisterPage;



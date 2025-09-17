import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import Evaluation from "./Evaluation";

interface ExperiencesProps {
  onAgregar: () => void;
}

const Experiences = ({ onAgregar }: ExperiencesProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const role = localStorage.getItem("role");

  const experiencias = [
    { id: 1, titulo: "Visitar Experiencia" },
    { id: 2, titulo: "Visitar Experiencia" },
    { id: 3, titulo: "Visitar Experiencia" },
    { id: 4, titulo: "Visitar Experiencia" },
  ];

  const nuevas = [1, 2, 3];

  const handleVisitarClick = () => {
    setShowEvaluation(true);
  };

  const handleCloseEvaluation = () => {
    setShowEvaluation(false);
  };

  const handleAgregarClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="p-8 min-h-screen">
      {/* Cuadros de estadísticas solo para profesor */}
      {role && role.toLowerCase() === "profesor" && (
        <div className="grid grid-cols-3 gap-6 my-6">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 w-full">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 rounded-lg p-2">
                {/* Icono de gráfico circular */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9 9 0 1021 12h-9V3.055z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-gray-600 text-base mb-2">
              Número de experiencias con plan de mejoramiento
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 w-full">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 rounded-lg p-2">
                {/* Icono de documento */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-gray-600 text-base mb-2">
              Número de experiencias registradas en la vigencia
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg w-10 flex items-center justify-center">
                {/* Icono de usuario/persona */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-gray-600 text-base mb-2">
              Participación de eventos SEM
            </div>
          </div>
        </div>
      )}

      <div className="font-bold text-[#00aaff] text-[28.242px] ">
          <p>Actualizar Experiencia</p>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {experiencias.map((exp) => (
          <div
            key={exp.id}
            className="relative border rounded-xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition duration-200 cursor-pointer"
          >
            {/* Icono en la esquina superior derecha */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-500"
              aria-label="Icono"
              onClick={handleVisitarClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </button>
            {/* Resto del contenido de la tarjeta */}
            <img
              src="/images/Experiencias.png"
              alt="icono"
              className="w-40 h-17 mb-4"
            />
            <button className="bg-gray-100 rounded px-4 py-2 mt-2 font-semibold" onClick={handleAgregarClick}>
              Visitar Experiencia
            </button>
          </div>
        ))}
      </div>

      <div className="font-bold text-[#00aaff] text-[28.242px] w-full">
          <p>Registro de Nuevas Experiencias</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {nuevas.map((n) => (
          <div
            key={n}
            onClick={onAgregar}
            className="border-2 border-dashed border-sky-200 bg-sky-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-sky-100 transition"
          >
            <div className="bg-gray-100 rounded-xl p-3 mb-2">
              <span className="text-sky-500 text-2xl font-bold">+</span>
            </div>
            <p className="text-sm text-gray-600">Agregar Nueva Experiencia</p>
          </div>
        ))}
      </div>

      {/* Modal reutilizable para agregar experiencia */}
  <ExperienceModal show={showModal} onClose={handleClose} />
      {/* Modal de Evaluación */}
      {showEvaluation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1100]">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-2 md:mx-0 p-0 relative flex flex-col overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleCloseEvaluation}
              className="absolute top-4 right-4 text-2xl text-[#00aaff] hover:text-sky-800 focus:outline-none"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <Evaluation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;

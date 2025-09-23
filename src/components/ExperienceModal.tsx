import React, { useEffect, useState } from "react";
import axios from "axios";
import { UpdateExperience } from "../Api/Types/updateExperience";

interface ExperienceModalProps {
  show: boolean;
  onClose: () => void;
  experienceId?: number;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ show, onClose, experienceId }) => {
  const [experience, setExperience] = useState<UpdateExperience | null>(null);
  useEffect(() => {
    if (show && experienceId) {
      // Usar /api/Experience/List para obtener la experiencia seleccionada
      const token = localStorage.getItem("token");
      axios.get(`/api/Experience/${experienceId}/detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          // Buscar la experiencia por id
          setExperience(res?.data ?? null);
          console.log(res);
        })
        .catch(() => setExperience(null));
    }
  }, [show, experienceId]);

  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1100] overflow-auto p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-full sm:max-w-2xl mx-auto p-2 sm:p-6 relative flex flex-col"
        style={{ maxHeight: '90vh', minHeight: '400px', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center px-8 pt-8 pb-2">
          <button
            onClick={onClose}
            className="mr-4 text-2xl text-[#00aaff] hover:text-sky-800 focus:outline-none"
            aria-label="Cerrar"
          >
            <svg width="28" height="28" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <span className="ml-2 font-bold text-2xl md:text-2xl text-[#00aaff] tracking-tight">
            ACTUALIZAR / INFORMACIÓN DE LA EXPERIENCIA
          </span>
        </div>
        <form className="px-2 sm:px-4 py-2 sm:py-4 flex-1 flex flex-col w-full">
          {/* Primera columna de inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-4 w-full">
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Título de la experiencia:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el título de la experiencia" value={experience?.experience.nameExperiences || ""} readOnly />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Nombre del establecimiento educativo:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre del establecimiento" value={experience?.institution.name || ""} readOnly />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Nombre Completo del líder:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre completo del líder" value={experience?.experience.nameFirstLeader || ""} readOnly />
            </div>
            <div>
              <label className="block font-semibold mb-1">Departamento:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el departamento" value={experience?.institution.department || ""} readOnly />
            </div>
            <div>
              <label className="block font-semibold mb-1">Fecha:</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="dd/mm/aaaa" value={experience?.experience.developmenttime?.slice(0, 10) || ""} readOnly />
            </div>
            <div>
              <label className="block font-semibold mb-1">Municipio:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el municipio" value={experience?.institution.municipality || ""} readOnly />
            </div>
            <div>
              <label className="block font-semibold mb-1">Criterios evaluados:</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" disabled>
                <option>{experience?.criterias?.join(", ") || "Seleccione los criterios"}</option>
              </select>
            </div>
            {/* Nueva estructura para los 4 campos finales */}
            <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <label className="block font-semibold mb-1">Código DANE:</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el código DANE" value={experience?.institution.codeDane || ""} readOnly />
              </div>
              <div>
                <label className="block font-semibold mb-1">Estado actual:</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el estado actual" value={experience?.experience.stateId || ""} readOnly />
              </div>
              <div>
                <label className="block font-semibold mb-1">Adjuntar PDF</label>
                <div className="flex items-center justify-center border border-gray-300 rounded h-32 bg-gray-50">
                  {experience?.documents[0]?.urlPdf ? (
                    <a href={experience.documents[0].urlPdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {experience.documents[0].urlPdf}
                    </a>
                  ) : (
                    <span className="ml-2 text-2xl font-bold text-gray-400">PDF</span>
                  )}
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Enlace:</label>
                <div className="flex items-center">
                  <input className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Adjuntar Enlaces" value={experience?.documents[0]?.urlLink || ""} readOnly />
                  <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 rounded-r bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656m-3.656-3.656a4 4 0 015.656 0m-7.778 7.778a4 4 0 005.656 0l1.414-1.414a4 4 0 000-5.656m-3.656 3.656a4 4 0 010-5.656" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Botón Listo */}
          <div className="flex justify-end mt-8">
            <button
              type="button"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-10 py-3 rounded-xl shadow text-lg"
              onClick={onClose}
            >
              Listo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceModal;

import React from "react";

interface ExperienciaModalProps {
  show: boolean;
  onClose: () => void;
}

const ExperienciaModal: React.FC<ExperienciaModalProps> = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1100]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-2 md:mx-0 p-0 relative flex flex-col">
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
        <form className="px-8 py-4 flex-1 flex flex-col">
          {/* Primera columna de inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Título de la experiencia:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el título de la experiencia" />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Nombre del establecimiento educativo:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre del establecimiento" />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Nombre Completo del líder:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre completo del líder" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Departamento:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el departamento" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Fecha:</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="dd/mm/aaaa" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Municipio:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el municipio" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Criterios evaluados:</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Seleccione los criterios</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Código DANE:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el código DANE" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tipo de experiencia:</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Seleccione el tipo</option>
              </select>
            </div>
            {/* PDF y Estado/Enlace */}
            <div className="flex flex-col justify-between">
              <label className="block font-semibold mb-1">Adjuntar PDF</label>
              <div className="flex items-center justify-center border border-gray-300 rounded h-32 bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v7M8 16h8M8 12h8" />
                </svg>
                <span className="ml-2 text-2xl font-bold text-gray-400">PDF</span>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Estado actual:</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el estado actual" />
              <label className="block font-semibold mb-1 mt-3">Enlace:</label>
              <div className="flex items-center">
                <input className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Adjuntar Enlaces" />
                <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 rounded-r bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656m-3.656-3.656a4 4 0 015.656 0m-7.778 7.778a4 4 0 005.656 0l1.414-1.414a4 4 0 000-5.656m-3.656 3.656a4 4 0 010-5.656" />
                  </svg>
                </span>
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

export default ExperienciaModal;

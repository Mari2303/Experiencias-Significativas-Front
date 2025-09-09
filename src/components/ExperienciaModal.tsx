import React from "react";

interface ExperienciaModalProps {
  show: boolean;
  onClose: () => void;
}

const ExperienciaModal: React.FC<ExperienciaModalProps> = ({ show, onClose }) => {
  if (!show) return null;
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-1">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-2 md:mx-0 animate-fade-in">
        {/* Header estilo imagen */}
        <div className="flex items-center border-b px-8 py-6">
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
          <span className="ml-2 font-bold text-[1rem] text-[#00aaff] tracking-tight">INFORMACIÓN DE LA EXPERIENCIA</span>
        </div>
        <form className="px-8 py-8">
          <div className="mb-3">
            <label className="block font-medium mb-1">Título de la experiencia</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el título de la experiencia" />
          </div>
          <div className="mb-3">
            <label className="block font-medium mb-1">Nombre del establecimiento educativo</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre del establecimiento" />
          </div>
          <div className="mb-3">
            <label className="block font-medium mb-1">Nombre completo del líder</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el nombre completo del líder" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-medium mb-1">Departamento</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el departamento" />
            </div>
            <div>
              <label className="block font-medium mb-1">Fecha</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-medium mb-1">Municipio</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el municipio" />
            </div>
            <div>
              <label className="block font-medium mb-1">Criterios evaluados</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Seleccione los criterios</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-medium mb-1">Código DANE</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el código DANE" />
            </div>
            <div>
              <label className="block font-medium mb-1">Tipo de experiencia</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Seleccione el tipo</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-medium mb-1">Descripción</label>
              <textarea rows={2} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese la descripción de la experiencia" />
            </div>
            <div>
              <label className="block font-medium mb-1">Estado actual</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ingrese el estado actual" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button type="button" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded shadow" onClick={onClose}>
              Listo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienciaModal;

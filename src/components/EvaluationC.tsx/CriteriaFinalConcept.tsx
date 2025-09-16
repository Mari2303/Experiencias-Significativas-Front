import React from "react";

const CriteriaFinalConcept: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-between p-0">
      <div className="max-w-5xl w-full mx-auto">
        <div className="bg-white rounded-lg p-6 mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">
            4. Concepto final de Evaluación
          </h2>
          <p className="mb-4 text-gray-700">
            En esta sección se debe emitir el concepto final por cada una de las experiencias significativas, esto con base en las valoraciones anteriormente realizada y a la evolución que esta ha tenido durante su trayectoria.
          </p>
          <div className="mb-4">
            <a
              href="#"
              className="text-sky-600 font-semibold hover:underline block mb-1"
            >
              Guia de valoracion - equivalencia cuantitativa y cualitativa
            </a>
            <span className="block text-sky-600 font-semibold">
              Naciente: Menor o igual a 45 puntos
            </span>
            <span className="block text-sky-600 font-semibold">
              Creciente: Mayor de 46 y menor o igual a 79 puntos
            </span>
            <span className="block text-sky-600 font-semibold">
              Inspiradora: Mayor o igual a 80 puntos
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="font-semibold text-gray-800 mb-4">
            Respecto a la evaluación la experiencia significativa una vez analizado su evolución y trayectoria se valora como:
          </p>
          <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700 mb-2">
          Estado de desarrollo en el que se encuentra actualmente la experiencia <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center cursor-pointer">
            <input type="radio" name="estado" className="custom-radio" />
            <span className="ml-2">Naciente</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="estado" className="custom-radio" />
            <span className="ml-2">Creciente</span>
          </label>
          <label className="inline-flex items-center si">
            <input type="radio" name="estado" className=" custom-radio" />
            <span className="ml-2">Inspiradora</span>
          </label>
        </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-8">
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-16 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 text-lg transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
    </div>
  );
};

export default CriteriaFinalConcept;

import React from "react";

const EvaluatorInfo: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-t-lg px-6 py-3 mb-6 ">
        <span className="text-lg font-semibold !text-[#00aaff]">
          1. Información del Evaluador
        </span>
      </div>
      <p className="!text-[#00aaff] text-sm mb-6 px-2">
        En esta sección se registra los datos básicos del evaluador asignado a cada una de las experiencias significativas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Rol en el acompañamiento de la experiencia significativa <span className="text-red-500">*</span>
          </label>
          <select className="w-full border rounded p-2 bg-white" defaultValue="">
            <option value="" disabled>Elegir</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-4 text-gray-700">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <select className="w-full border rounded p-2 bg-white" defaultValue="">
            <option value="" disabled>Elegir</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Tipo de evaluación que aplicará a la experiencia significativa <span className="text-red-500">*</span>
          </label>
          <select className="w-full border rounded p-2 bg-white" defaultValue="">
            <option value="" disabled>Elegir</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default EvaluatorInfo;

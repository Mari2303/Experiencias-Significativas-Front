import React from "react";
import "./radioCustom.css";

const ExperienceInfo: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-t-lg px-6 py-3 mb-6 mt-4">
        <span className="text-lg font-semibold !text-[#00aaff]">
          2. Información de la experiencia Significativa a evaluar
        </span>
      </div>
      <p className="!text-[#00aaff] text-sm mb-6 px-2">
        En esta sección se selecciona los datos de la experiencia significativa a evaluar según la información suministrada por la SEM a través de la ficha de registro / actualización
      </p>
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700">
          Seleccione la Institución Educativa a la que pertenece: <span className="text-red-500">*</span>
        </label>
        <select className="w-full border rounded p-2 bg-white" defaultValue="">
          <option value="" disabled>Elegir</option>
          {/* Opciones dinámicas */}
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700">
          Enfoque temático de la Experiencia Significativa <span className="text-red-500">*</span>
        </label>
        <select className="w-full border rounded p-2 bg-white" defaultValue="">
          <option value="" disabled>Elegir</option>
          {/* Opciones dinámicas */}
        </select>
      </div>
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
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700">
          Nombre de la Experiencia Significativa. <span className="text-red-500">*</span>
        </label>
        <select className="w-full border rounded p-2 bg-white" defaultValue="">
          <option value="" disabled>Elegir</option>
          {/* Opciones dinámicas */}
        </select>
      </div>
    </>
  );
};

export default ExperienceInfo;

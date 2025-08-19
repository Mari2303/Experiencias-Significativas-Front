import React, { useState } from "react";
import StatePage from "./States/StatePage";
import GradePage from "./Grades/GradePage";
import PopulationGroupPage from "./PopulationGroup/PopulationGroupPage";
import CriteriaPage from "./Criteria/CriteriaPage";
import LineThematicPage from "./LineThematic/LineThematicPage";

// Aquí podrías importar otras páginas CRUD de tu módulo
// import OtraEntidadPage from "./otraEntidad/OtraEntidadPage";

export default function ModuloTabs() {
  const [activeTab, setActiveTab] = useState<string>("states");

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "states"
              ? "border-b-2 border-sky-500 text-sky-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("states")}
        >
          Estados
        </button>

        {/* Grades */}
        
        <button
          className={`px-4 py-2 ${
            activeTab === "grades"
              ? "border-b-2 border-sky-500 text-sky-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("grades")}
        >
          Grados
        </button>


        {/* PopulationGroup */}
        
        <button
          className={`px-4 py-2 ${
            activeTab === "populationGroup"
              ? "border-b-2 border-sky-500 text-sky-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("populationGroup")}
        >
          Grupo Poblacional
        </button>

        {/* LineThematic */}
        
        <button
          className={`px-4 py-2 ${
            activeTab === "lineThematic"
              ? "border-b-2 border-sky-500 text-sky-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("lineThematic")}
        >
          Línea Temática
        </button>
      

        {/* Criteria */}
        
        <button
          className={`px-4 py-2 ${
            activeTab === "criteria"
              ? "border-b-2 border-sky-500 text-sky-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("criteria")}
        >
          Criterios
        </button>
      </div>

      {/* Contenido de cada tab */}
      <div>
        {activeTab === "states" && <StatePage />}
        {activeTab === "grades" && <GradePage />}
        {activeTab === "populationGroup" && <PopulationGroupPage />}
        {activeTab === "criteria" && <CriteriaPage />}
        {activeTab === "lineThematic" && <LineThematicPage />}
      </div>
    </div>
  );
}

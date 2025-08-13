// src/components/AgregarExperiencia/Componentes.tsx
import React from "react";

const Componentes: React.FC = () => {
  return (
    <div className="w-full border rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">COMPONENTES</h2>

      {/* Problema o necesidad */}
      <div className="mb-6">
        <label className="block font-medium">
          PROBLEMA O NECESIDAD QUE ORIGINÓ LA EXPERIENCIA
        </label>
        <p className="text-sm text-gray-600 mb-2">
          Describa la problemática o necesidad, que dio origen a la experiencia significativa, sus antecedentes, el escenario en el que se ha desarrollado y a quiénes beneficia...
        </p>
        <textarea
          rows={4}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Objetivo */}
      <div className="mb-6">
        <label className="block font-medium">OBJETIVO(S)</label>
        <p className="text-sm text-gray-600 mb-2">
          Enuncie el (o los) objetivo(s) propuesto(s) para la experiencia significativa.
        </p>
        <textarea
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Enfoque teórico */}
      <div className="mb-6">
        <label className="block font-medium">ENFOQUE TEÓRICO - FUNDAMENTACIÓN</label>
        <p className="text-sm text-gray-600 mb-2">
          Especifique los principales referentes pedagógicos, conceptuales, metodológicos, evaluativos, instrumentales, entre otros, que sustentan la experiencia significativa.
        </p>
        <textarea
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Metodología */}
      <div className="mb-6">
        <label className="block font-medium">CÓMO SE DESARROLLA - METODOLOGÍA</label>
        <p className="text-sm text-gray-600 mb-2">
          Describa las estrategias, acciones, mecanismos e instrumentos adoptados para cumplir los objetivos...
        </p>
        <textarea
          rows={4}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Innovación */}
      <div>
        <label className="block font-medium">INNOVACIÓN</label>
        <p className="text-sm text-gray-600 mb-2">
          Mencione si ha diseñado e implementado procesos educativos o pedagógicos de manera novedosa...
        </p>
        <textarea
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>
    </div>
  );
};

export default Componentes;

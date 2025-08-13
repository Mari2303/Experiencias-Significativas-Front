// src/components/AgregarExperiencia/SeguimientoEvaluacion.tsx
import React from "react";

const SeguimientoEvaluacion: React.FC = () => {
  return (
    <div className="w-full border rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">SEGUIMIENTO Y EVALUACIÓN</h2>

      {/* Seguimiento y evaluación */}
      <div className="mb-6">
        <label className="block font-medium">SEGUIMIENTO Y EVALUACIÓN</label>
        <p className="text-sm text-gray-600 mb-2">
          Describa la metodología y los mecanismos establecidos para el seguimiento, la evaluación y la documentación de la experiencia significativa...
        </p>
        <textarea
          required
          rows={4}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Resultados */}
      <div className="mb-6">
        <label className="block font-medium">RESULTADOS</label>
        <p className="text-sm text-gray-600 mb-2">
          Especifique cuáles han sido los logros obtenidos de acuerdo con el (o los) objetivo(s) planteado(s) en la experiencia significativa...
        </p>
        <textarea
          required
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Sostenibilidad */}
      <div className="mb-6">
        <label className="block font-medium">SOSTENIBILIDAD</label>
        <p className="text-sm text-gray-600 mb-2">
          Mencione las estrategias previstas para garantizar la continuidad, el fortalecimiento y la consolidación de la ES en el tiempo...
        </p>
        <textarea
          required
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Transferencia */}
      <div>
        <label className="block font-medium">TRANSFERENCIA</label>
        <p className="text-sm text-gray-600 mb-2">
          Especifique los procesos, metodologías, mecanismos o medios que permiten que la experiencia significativa haya sido replicada o transferida...
        </p>
        <textarea
          required
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>
    </div>
  );
};

export default SeguimientoEvaluacion;

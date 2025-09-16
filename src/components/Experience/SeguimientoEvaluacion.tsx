// src/components/AgregarExperiencia/SeguimientoEvaluacion.tsx
import React from "react";


interface SeguimientoEvaluacionProps {
  value: any;
  onChange: (val: any) => void;
}

const SeguimientoEvaluacion: React.FC<SeguimientoEvaluacionProps> = ({ value, onChange }) => {
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
          value={value.seguimiento || ""}
          onChange={e => onChange({ ...value, seguimiento: e.target.value })}
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
          value={value.resultados || ""}
          onChange={e => onChange({ ...value, resultados: e.target.value })}
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
          value={value.sostenibilidad || ""}
          onChange={e => onChange({ ...value, sostenibilidad: e.target.value })}
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
          value={value.transferencia || ""}
          onChange={e => onChange({ ...value, transferencia: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SeguimientoEvaluacion;

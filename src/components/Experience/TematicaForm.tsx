

import React from "react";
interface TematicaFormValues {
  area: string;
  estrategias: string;
  articulacion: string;
  cobertura: string;
  poblaciones: string;
  pandemia: string;
}

interface TematicaFormProps {
  value: TematicaFormValues;
  onChange: (value: TematicaFormValues) => void;
}

const TematicaForm: React.FC<TematicaFormProps> = ({ value, onChange }) => {
  const handleInput = (field: keyof TematicaFormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [field]: e.target.value });
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">TEMÁTICA Y DESARROLLO</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Temática de la experiencia significativa"
          value={value.area}
          onChange={handleInput("area")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Estrategias pedagógicas"
          value={value.estrategias}
          onChange={handleInput("estrategias")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Articulación y proyectos transversales"
          value={value.articulacion}
          onChange={handleInput("articulacion")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Cobertura"
          value={value.cobertura}
          onChange={handleInput("cobertura")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Poblaciones"
          value={value.poblaciones}
          onChange={handleInput("poblaciones")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Experiencias de Pandemia Covid 19"
          value={value.pandemia}
          onChange={handleInput("pandemia")}
        />
      </div>
    </div>
  );
};

export default TematicaForm;

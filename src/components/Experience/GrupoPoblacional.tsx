
import React from "react";

interface GrupoPoblacionalFormProps {
  value: any;
  onChange: (val: any) => void;
}

const grupos = [
  "Indígenas", "Mestizos", "Pequeños productores", "Rom",
  "Afrocolombianos", "Palenqueros", "Raizales"
];

const GrupoPoblacionalForm: React.FC<GrupoPoblacionalFormProps> = ({ value, onChange }) => {
  const handleCheck = (grupo: string, checked: boolean) => {
    const newValue = {
      ...value,
      [grupo]: checked
    };
    onChange(newValue);
  };
  const handleOtro = (otro: string) => {
    const newValue = {
      ...value,
      otro
    };
    onChange(newValue);
  };
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">GRUPO POBLACIONAL</h2>
      <div className="grid grid-cols-3 gap-2">
        {grupos.map((grupo) => (
          <label key={grupo} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={!!value[grupo]}
              onChange={e => handleCheck(grupo, e.target.checked)}
            />
            {grupo}
          </label>
        ))}
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={!!value["Otro(s)"]}
            onChange={e => handleCheck("Otro(s)", e.target.checked)}
          />
          Otro(s)
          <input
            placeholder="¿Cuál?"
            className="ml-2 border rounded p-1 w-24"
            value={value.otro || ""}
            onChange={e => handleOtro(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default GrupoPoblacionalForm;
